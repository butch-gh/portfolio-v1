import os
import numpy as np
import gradio as gr
from sentence_transformers import SentenceTransformer
from huggingface_hub import InferenceClient
import markdown

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONTEXT_PATH = os.path.join(BASE_DIR, "info.txt")

# ------------------------------
# Load embedding model
# ------------------------------
embedder = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

try:
    with open(CONTEXT_PATH, "r", encoding="utf-8") as f:
        resume_text = f.read()
except FileNotFoundError:
    resume_text = "Botchki Pielago is a senior .NET C# engineer with 18+ years experience..."

def chunk_text(text, chunk_size=150, overlap=50):
    words = text.split()
    chunks = []
    for i in range(0, len(words), chunk_size - overlap):
        chunks.append(" ".join(words[i:i + chunk_size]))
    return chunks

sections = chunk_text(resume_text)
section_embeddings = embedder.encode(sections, convert_to_tensor=True).cpu().numpy()

# ------------------------------
# LLM Client
# ------------------------------
llm = InferenceClient(
    "mistralai/Mistral-7B-Instruct-v0.2",
    token=os.getenv("HF_TOKEN")
)

# ------------------------------
# Cosine similarity helper
# ------------------------------
def cosine_similarity(a, b):
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

def find_relevant_context(user_input, top_k=3):
    query_emb = embedder.encode(user_input, convert_to_tensor=True).cpu().numpy()
    scores = np.array([cosine_similarity(se, query_emb) for se in section_embeddings])
    top_idx = scores.argsort()[-top_k:][::-1]
    return "\n".join([sections[i] for i in top_idx])


# ------------------------------
# System prompt function
# ------------------------------
def reminders(name):
    _reminders = (
        f"You are an AI assistant representing {name}. Your primary role is to answer questions "
        f"specifically about {name}'s career, background, skills, achievements, and professional experience. "
        f"All responses must remain focused on {name} and stay fully in character.\n\n"

        f"You are provided with a summary of {name}'s background. Use only that information, plus general "
        f"professional reasoning, to answer questions. Do not invent detailed personal facts unless they are "
        f"consistent with the provided background.\n\n"

        f"Your tone should be professional, friendly, concise, and aligned with how {name} would speak to a "
        f"potential client, recruiter, or collaborator visiting the website.\n\n"

        f"Never break character. Never refer to yourself as an AI—always speak as {name}. "
        f"Stay on subject and avoid unrelated topics.\n\n"

        f"With this context, interact with the user while consistently representing {name}."
    )
    return _reminders



def chat_reply(message, history):
    # message: str, history: list[tuple[user, assistant]]
    llm_messages = [
        {
            "role": "system",
            "content": reminders("Botchki") + " Format answers in clean Markdown."
        }
    ]
    # Optionally include brief history context (without recalculating RAG per turn)
    for turn in (history or [])[-3:]:
        user_msg = assistant_msg = None

        if isinstance(turn, (list, tuple)) and len(turn) >= 2:
            user_msg, assistant_msg = turn[0], turn[1]
        elif isinstance(turn, dict):
            role = turn.get("role")
            if role == "user":
                user_msg = turn.get("content")
            elif role == "assistant":
                assistant_msg = turn.get("content")

        if user_msg:
            llm_messages.append({"role": "user", "content": user_msg})
        if assistant_msg:
            llm_messages.append({"role": "assistant", "content": assistant_msg})

    ctx = find_relevant_context(message)
    llm_messages.append({
        "role": "user",
        "content": f"Context:\n{ctx}\n\nUser Question: {message}"
    })

    response = llm.chat_completion(
        model="mistralai/Mistral-7B-Instruct-v0.2",
        messages=llm_messages,
        max_tokens=300
    )
    raw_text = response.choices[0].message["content"]
    return raw_text  # Markdown string; ChatInterface will render it

if __name__ == "__main__":
    demo = gr.ChatInterface(fn=chat_reply)
    # Make background transparent so embedding page shows through
    demo.css = """
    .gradio-container, .gradio-container .main, body {
        background-color: transparent !important;
        background: transparent !important;
    }
    /* Hide Gradio footer links and settings */
    [data-testid="footer"],
    [data-testid="block-settings"],
    .footer,
    .svelte-zxu34v { /* fallback class used by some Gradio versions for footer */
        display: none !important;
    },
    div.block div {
        height: 100vh !important;
        }
    """
    demo.launch()