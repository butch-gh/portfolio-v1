import os
import numpy as np
import gradio as gr
from sentence_transformers import SentenceTransformer
from huggingface_hub import InferenceClient
import markdown

# ------------------------------
# Load embedding model
# ------------------------------
embedder = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

resume_text = """
Botchki Pielago is a senior .NET C# engineer with 18+ years experience...
Lower Bicutan, Taguig City.
hctubguitarist@gmail.com
https://www.linkedin.com/in/botchki-pielago-0811b314b/
=================================
About Me:
Senior software engineer with 18+ years delivering enterprise systems across large‑scale back‑end services and modern web front‑ends. I design pragmatic, scalable architectures with a focus on clean code, observability, security, and long‑term maintainability in production environments. I apply appropriate design patterns—creational, structural, and behavioral—to reduce coupling, improve testability, and enable safe extension.

Back‑end focus: modular monoliths and microservices, token‑based APIs, asynchronous and event‑driven processing, and high‑throughput parallel services. Data experience spans relational databases and procedural SQL, including performance tuning and operational reporting.

On the front‑end, I design modern, responsive interfaces that balance clarity and aesthetics. I use component‑driven development, consistent design systems, and utility‑first techniques to create polished, accessible experiences with thoughtful motion—performant and adaptable across devices and screen sizes.

I rapidly absorb and stabilize existing codebases—legacy or modern—prioritizing safe refactoring, clarity, and incremental improvement. Fast to learn new domains and practices, I adapt tooling as needed while maintaining delivery pace. I mentor junior and early‑career engineers through pairing, review, and structured guidance, helping them build confidence in quality, security, and architectural thinking.

=================================
Professional Summary:
Seasoned IT professional with 18+ years of experience in .NET C# application development, system design, and enterprise-grade in-house solutions. Skilled in architecting and developing scalable systems using .NET Core, MVC, Web API, Entity Framework, and Windows/Web services, with strong adherence to SOLID principles, maintainability, and performance optimization.
Experienced in building applications that combine Microservices and Monolithic architectures, secured with JWT authentication, and integrated with various third-party services for SMS notifications, Email delivery (including DNS-based configurations), and both online and cash-based payment workflows.
Proficient in PostgreSQL, Oracle PL/SQL, and MS SQL including database procedure development, performance tuning, and reporting (SSRS). Skilled in implementing asynchronous, event-driven systems using RabbitMQ, as well as developing multithreaded applications for high-throughput processes.
Hands-on deployment and infrastructure management experience using VPS, handling full-cycle provisioning and configuration. Successfully deployed multiple web applications and microservices behind an Nginx with SSL, and managed services using Docker/Docker Compose and PM2. Also configured VPS-based PostgreSQL, subdomain routing via DNS Zone, and deployment using WinSCP and Git Bash workflows.
Nearly 2 years of modern front-end development experience using React/TypeScript, TailwindCSS, and Webpack/Vite, supported by Visual Studio Code and AI-assisted development workflows (GitHub Copilot / LLM-based agents). Strong expertise in Node.js, Express.js, and GraphQL, delivering robust backend architectures, microservices, API gateways, and event-driven systems.
Experienced in DevOps and tools such as Azure DevOps, TFS/VSTS, CI/CD pipelines, and Git-based version control workflows.

================
Work Experience
=================================================================
November 2022 – March 2024
Sr. Software Developer (React/Front-End) 
@WSP USA – Manila Dev Team 
Office: 2nd Floor, Damosa Business 
Center, Angliongto Road, Lanang, Davao City, 1800 Philippines
=================================================================
React Developer
-----------------------------------------------------------------
--------------------------------
1. IAS – Integrated Approval System
--------------------------------
This approval workflow system was developed to simplify and optimize the approval process across multiple organizational matrices. By automating key workflow steps and dynamically populating role assignments, the solution significantly increases operational efficiency. It also enhances visibility into compliance, approval stages, and response times, ensuring smoother coordination and faster decision-making across teams.
Responsibilities:
•	Maintain and enhance application features and workflow logic
•	Build and optimize Azure Pipelines
•	Implement comprehensive unit tests
•	Provide QA and testing support
•	Address and resolve Azure DevOps work items
•	Manage and support deployment processes
Role:	React Developer		
Technology:
React JS, Material UI, Webpack, HTML/CSS, JavaScript, GitHub
Project Management:
Team Foundation Server, Azure DevOps/Visual Studio Team Services
-----------
2. Forecaster
-----------
An advanced project management tool designed to streamline key workflow processes and improve transparency across project teams. The system introduces major usability enhancements, including the retention of Resource field data when switching between methodologies—removing the need for repetitive data entry and significantly improving efficiency.
Forecaster replaces two legacy features from the Data Query Tool (DQT): Estimate to Complete (ETC) and Project Status Update. By consolidating and modernizing these capabilities, the tool offers a more intuitive, consistent, and efficient experience for project teams, ultimately simplifying project tracking and decision-making.
Responsibilities:
•	Maintain and enhance application features
•	Develop and refine Web UI components
•	Build and maintain Azure Pipelines
•	Implement unit tests
•	Provide functional and integration testing support
•	Resolve Azure DevOps story items
•	Manage and support deployment processes
Role:	React Developer	
Technology:
React Typescript, MUI, Vite, HTML/CSS, JavaScript, GitHub
Project Management:
Team Foundation Server, Azure DevOps/Visual Studio Team Services
------------
3. Client Hive
------------
A comprehensive platform designed to optimize client care and relationship management. By capturing, analyzing, and interpreting client experiences, the system empowers the business to better understand client needs, strengthen relationships, and drive continuous improvement in overall service engagement.
Responsibilities:
•	Maintained and enhanced core application features to improve performance, usability, and client engagement workflows.
•	Designed and refined web UI components, ensuring a clean, intuitive, and responsive user experience.
•	Developed and executed unit tests to ensure component reliability and prevent regressions.
•	Provided testing support during QA cycles, validating fixes and ensuring alignment with business requirements.
•	Resolved Azure DevOps story items, including bug fixes, UI improvements, and feature enhancements.
•	Supported and handled deployment activities, ensuring smooth and successful releases across environments.
Role:	React Developer		
Technology:
React JS, Material UI, Webpack, HTML/CSS, JavaScript, GitHub
Project Management:
Team Foundation Server, Azure DevOps/Visual Studio Team Services
============================================
April 2018 – November 2022
.Net C# Developer / MSSQL 
@Amdocs 
30th Corporate Center, Ayala Mall Pasig.
=============================================
.Net Software Developer
----------------------------------------------
--------------------------------
4. On-Premise to Cloud Migration
-------------------------------
Selected as one of five cross-team developers to migrate in-house systems from on-premise servers to the company’s new cloud infrastructure. Assigned three major applications for full assessment, migration, and validation.
Contributions:
•	Migrated and redeployed three business-critical applications to the cloud via Remote Desktop.
•	Identified and replicated all dependencies: APIs, SMS gateways, SMTP, authentication, and database connections.
•	Performed inbound/outbound connectivity checks, port testing, and coordinated firewall lifting between private and public subnets.
•	Collaborated with Cloud Ops, Infra, and DBA teams for VM setup, database access, network routing, and troubleshooting.
•	Executed integration testing, resolved deployment issues, and ensured full system functionality post-migration.
•	Created clear documentation for configurations, issues, and handover processes.
Result: Successfully transitioned all assigned applications to the cloud with complete feature parity and stable operation.
Developer:	(Team of 5)		
Technology: Windows Server, .Net Applications, MS SQL, Remote Desktop (RDP)
---------------------------------------
5. Common Know Vulnerability Remediation
-----------------------------------------
Selected as 1 of 2 cross-team developers assigned to assess and remediate security vulnerabilities across 20+ existing in-house applications. The project aimed to identify potential malicious entry points, apply fixes, and ensure all systems meet secure coding and vulnerability compliance standards.
Contributions:
•	Analyzed 20+ applications to identify common security vulnerabilities including XSS, SQL Injection, Command Injection, DDoS-related weaknesses, insecure configurations, and exposed endpoints.
•	Performed hands-on remediation by updating HTML, JavaScript, jQuery, and application configuration files without impacting core business logic.
•	Conducted vulnerability testing, attack simulation, and verification based on known vulnerability patterns.
•	Created detailed documentation, tracking sheets, and per-application status reports to monitor findings, fixes, and remaining risks.
•	Collaborated with System/Application Owners, Infra, Cloud Ops, and DBA teams for verification, deployment of fixes, and retesting.
•	Provided secure coding recommendations and guided app owners on preventing recurring vulnerabilities.
Technologies & Areas:
JavaScript · jQuery · HTML · App Configurations · Vulnerability Testing · XSS · SQL Injection · Input Validation · Secure Headers · Rate Limiting Concepts · Log Monitoring
Result: Successfully remediated identified vulnerabilities across all assigned applications, strengthening overall system security and reducing risk exposure.
Developer:	(Team of 2)		
Technology: Windows Server, .Net Applications, MS SQL, Remote Desktop (RDP)
-----------
6. Bizload v3
-----------
Maintained and enhanced the company’s Loading Application System, used for employee load scheduling, on-demand load requests, and delivery of load plan packages. The system consists of Bizload Client, Bizload CMS, Bizload API, Bizload Loading Services, and MSSQL for data management.
Developed and improved key system features, including Email and SMS notification services, and optimized the multi-threading engine in the .NET background service that processes each scheduled load item efficiently and reliably.
Role:	Full Stack Developer		
Technology: .Net Framework, .Net Core, MS SQL, HTML/CSS, JavaScript, JQuery, CI/CD (Gitlab-Jenkins-Nexus)
-------
7. EMCPRO
-------
Redesigned and redeveloped the architecture of the SMS Messaging System (EMCPro Message Caster) to handle continuous high-volume SMS traffic and modernize legacy components with updated technologies. 
Enhancements included:
1.	Inetlab SMPP (Short Message Peer-to-Peer): Implemented to handle SMS messages through the SMSC (Short Message Service Center) for reliable storage, forwarding, conversion, and delivery of messages.
2.	RabbitMQ: Integrated as a messaging queue to efficiently manage high SMS traffic and ensure smooth message flow.
3.	Database Migration: Migrated the existing MSSQL database to Oracle for improved performance and reliability.
4.	Web App Modernization: Rebuilt the existing admin web tool as a C# .NET Core Web Application with improved usability and maintainability.
5.	Scalability & High Availability: Redesigned system architecture to support horizontal scaling, load balancing, and fault-tolerant operations.
Result: The redesigned system efficiently processes high-volume SMS traffic, improves maintainability, and ensures reliable message delivery across all channels.
Role:	Full Stack Developer	
Technology: SMPP/SMSC, RabbitMQ, C# .Net Core, MS SQL, Oracle, CSHTML Razor /CSS, JavaScript, JQuery
---------------
8. NBA League Pass
---------------
Enhanced an application that provides NBA League live streaming for SMART, SUN, and TNT postpaid subscribers, including package offerings with free data access. The system consists of a mobile app redirect page, a web service, and a console application for brand syncing of mobile numbers.
Developed a new console application to generate CSV reports for NBA subscription activity, improving reporting efficiency and data accuracy.
Role:	Full Stack Developer		
Technology: .Net Framework, MS SQL, CSHTML Razor /CSS, JavaScript, JQuery
-------------------
9. SMART Store Locator
-------------------
Developed a Web Application for Smart Store Locator to improve customer experience and provide easy access to store information and services. The application features a user-friendly interface with the following functionalities:
1.	View and Find Stores: Allows users to search and filter stores based on location, services, and availability.
2.	Store Details and Map Integration: Displays detailed store information and location on Google Maps for easy navigation.
3.	Appointment Booking: Enables customers to schedule appointments directly within the store, streamlining service requests.
4.	RSS Feeds: Provides the latest news, promotions, and updates related to stores and services.
The application integrates real-time data, interactive maps, and a seamless booking system, enhancing both user convenience and operational efficiency.
Role:	Back-End	
Developer:  (Team of 3)	
Technology: .Net Core, JSON, CSHTML Razor/CSS, JavaScript, JQuery, Ajax
------------------------------------------------------
10. Online Purchase & Inventory System (One-Eload Version)
------------------------------------------------------
Maintained and enhanced an online web application system that manages order processing and enables real-time sales monitoring between distributors and SMART. The system also facilitates the management of SmartLoad distribution, tracking the sales pipeline from initial load allocation down to end-user delivery.
Contributions include:
•	Migration of Huawei API services: Updated and integrated Huawei APIs to improve reliability and support both synchronous and asynchronous calls.
•	Console Application Development: Built console applications to handle Huawei API SYNC/ASYNC operations, ensuring seamless communication and data processing.
•	Database Migration Tool: Developed a utility to migrate SUN dealers and retailers into the OPIS database, streamlining data consolidation and improving operational efficiency.
These enhancements improved system stability, automated key processes, and strengthened the overall sales and distribution workflow.
Role:	Full Stack Developer
Technology: .Net C#, MS SQL, HTML/CSS, JavaScript, AJAX
==================================================
August 2007 – April 2018
.Net C# Developer / Oracle PL/SQL 

Smart Communications Inc. 
Under SLI (Software Laboratories Inc.)
Madrigal Bldg. Ayala, Makati.
===================================================
.Net C# Developer
---------------------------------------------------
---------------------
11. CSP Report Scheduler
---------------------
Role: Full Stack Developer	
Developed a reporting application designed to replicate an out-of-the-box scheduler, enabling users to create, schedule, and generate delimited report files to remote or desired destinations. The system allows dynamic parameter configuration, incorporates role-based account management, and enforces screen- and data-level security to ensure controlled report output.
Features include:
•	Flexible Report Management: Users can remove, edit, reprocess, replicate, and toggle scheduled reports ON/OFF.
•	Real-Time Monitoring: Provides live log views for scheduled jobs, allowing instant tracking and troubleshooting.
•	User-Friendly Controls: Designed with intuitive interfaces and controls for enhanced user experience.
•	Security and Compliance: Built-in security features ensure data protection and compliance readiness for future regulatory requirements.
This system improves operational efficiency, streamlines reporting processes, and provides a secure, flexible platform for enterprise reporting needs.
Technology: .Net C#, Oracle, HTML/CSS, JavaScript, AJAX, Adobe Photoshop
--------------------------
12. CSPRS – Shared Analytics
---------------------------
Maintained and enhanced a legacy CSP Report Scheduler that enables users to generate reports instantly. The system includes membership and role-based access control, allowing administrators to manage user accounts by adding, activating, or deactivating users as needed.
Features include:
•	Screen and Data Control: Restricts access based on user roles to ensure secure and compliant report generation.
•	Active Directory Integration: Validates user information against the corporate domain via Active Directory (AD) for authentication and authorization.
•	Administrative Flexibility: Provides administrators with tools to manage users, roles, and access privileges efficiently.
This system improved user management, streamlined report generation, and ensured secure access in a legacy environment.
Role: Front-End, Back-End, Designer	
Technology: .Net C#, MS SQL, Oracle, SSRS, Report Builder, HTML/CSS, JavaScript, AJAX, Adobe Photoshop
----------------------------------
13. Sales Performance Monitoring (SPM)
----------------------------------
Developed and maintained a Web Application System that enables users and agents to monitor sales targets against defined thresholds for both inbound and outbound sales channels. The system provides multi-level visibility, supporting Nationwide, Regional, Area, and Wireless Center management.
Features include:
•	Role-Based Access Control: Integrated membership and role management to enforce secure and appropriate access.
•	Active Directory Integration: Validates users against the corporate domain for authentication and authorization.
•	Real-Time Monitoring: Offers dashboards and alerts to track performance against sales targets at different organizational levels.
This system enhanced sales monitoring, improved accountability, and provided secure, hierarchical access for all user roles.
Role:	Front-End, Designer	
Technology: .Net C#, MS SQL, Oracle, SSRS, Report Builder, HTML/XML/CSS, JavaScript, AJAX, Adobe Photoshop
-----------	
14. Online SOA
-----------	
Developed and maintained an online Statement of Account reporting system that enables Agents and Coordinators to manage the uploading of sales data, as well as view and generate detailed reports.
Features include:
•	Data Management: Simplifies uploading and processing of sales details for accurate reporting.
•	Report Generation: Provides real-time, downloadable reports for better tracking and analysis.
•	User Roles: Supports role-based access to ensure secure and controlled data visibility.
This system streamlined sales reporting, improved data accuracy, and enhanced operational efficiency for agents and coordinators.
Role:	Front-End,Back-End,Designer	
Technology: .Net C#, MS SQL, Oracle, SSRS, Report Builder, HTML/CSS, JavaScript, AJAX, Adobe Photoshop
-----
15. iHelp
-----	
Designed the user interface for an in-house Web Application used by Smart/PLDT employees to create and manage service requests, including software and hardware maintenance (laptops, desktops, etc.), operating system troubleshooting, and domain account support.
Contributions as UI/Designer:
•	Developed intuitive and user-friendly interfaces for efficient request creation and tracking.
•	Designed forms, dashboards, and navigation flows to simplify user interactions.
•	Ensured consistency, accessibility, and usability across the application for a seamless employee experience.
The redesigned UI improved productivity, reduced request handling time, and enhanced overall user satisfaction.
Role:	UI, Designer	
Technology: .Net, HTML/CSS, JavaScript, AJAX, Adobe Photoshop
--------------------------------------------------------
16. Online Purchase & Inventory System (OPIS Legacy Version)
--------------------------------------------------------
Developed and maintained an online web application system that manages order processing and provides real-time sales monitoring between distributors and SMART. The system also facilitates the management of SmartLoad distribution, tracking the sales pipeline from initial allocation down to end-user delivery.
Features include:
•	Real-Time Sales Monitoring: Provides live updates on sales performance across distributors.
•	Load Management: Tracks SmartLoad allocation and distribution to ensure efficient delivery.
•	Order Processing: Streamlines order submission, validation, and fulfillment across multiple channels.
This system improved operational efficiency, enhanced sales visibility, and ensured accurate load distribution throughout the sales pipeline.
Role:	Front-End, Back-End, Designer	
Technology: .Net C#, MS SQL, HTML/CSS, JavaScript, AJAX, Adobe Photoshop
==================================
Oracle PL/SQL (2013 – April 2018)
==================================
------------------------
17. CSPRS (Reporting Team)
------------------------
Developed and maintained ETL processes for generating daily, weekly, and monthly reports across multiple business units. Responsibilities included data extraction, transformation, loading, optimization, troubleshooting, and documentation to support enterprise reporting requirements.
Accomplishments
•	Successfully delivered 250+ reporting projects (as of 2013) across organizations such as SMART, PLDT, and SUN, covering both ad-hoc and regular automated reports.
•	Optimized existing ETL scripts using various scripting and performance-tuning techniques to improve execution speed and reliability.
•	Provided ongoing support and troubleshooting for deployed reporting processes to ensure timely and accurate output.
•	Prepared complete documentation packages, including:
o	UT – Unit Testing documentation
o	VCU – Version Control (Ready for UAT)
o	CRF – Change Request Forms
IT-Initiated Improvements
•	Enhanced and re-implemented existing shell script architectures to improve processing efficiency and reduce deployment complexity.
•	Introduced a more configurable and modular script design, enabling faster report generation and minimizing maintenance overhead.
Role:	ETL Developer
Technology: Oracle Toad, sqlplus, Putty, WinSCP, UNIX/LINUX, Shell Script, Notepad++/Sublime, Excel.
=======================================
Nestlé Philippines, Inc.
Visual FoxPro Developer (2006 - 2007)
=======================================
--------------------------
18. Payroll Management System
--------------------------
I was part of a development team responsible for building a customized Payroll System used by Nestlé Philippines to manage employee compensation processing. The system automated payroll calculations, statutory deductions, employee record maintenance, and payroll period management.
My key responsibilities included designing and developing the Salary Computation module, which handled various pay structures, allowances, overtime rates, and government-mandated deductions such as SSS, PhilHealth, and Pag-IBIG. I also built several front-end payroll forms, ensuring usability, data accuracy, and error-handling workflows for HR and finance personnel.
In addition, I was responsible for the reporting section of the application. This included generating payslips, payroll summary reports, government contribution reports, and internal financial reports. I designed the report layouts, built the query logic, and optimized data retrieval for fast processing across multiple payroll periods.
Role: Software Developer
Developers: Team of 4
Technology: Visual FoxPro

------------------------------------------
Freelance Work Experience
-------------------------------------------
React Developer –  September 11, 2025 – November 13, 2025
CMS Link: https://cms.adrianodentalclinic.online/
ADC Portal: https://adc-portal.adrianodentalclinic.online/
Dental Management System – Adriano Dental Clinic Phase II	Developed a full-featured dental clinic management system with a combination of monolithic and microservices architecture, complete with a centralized SSO login portal and multiple interconnected applications. The platform includes a main portal and modules for Billing, Inventory, Maintenance, and Appointment Scheduling, along with a Public Website and a CMS, each built as separate React applications unified under one portal interface.
Key features include JWT-secured communication between all apps and the API gateway, real-time notifications via SMTP (Mailgun) and SMS (PhilSMS/Semaphore), and an integrated billing module supporting PayMongo online payments and cash transactions. System data is managed through a PostgreSQL database hosted on a self-managed VPS.
Responsibilities & Achievements:
•	Architected and developed the entire system using React.js, TypeScript, Node.js, GraphQL, and PostgreSQL / pgAdmin4.
•	Designed a hybrid Microservices + Monolithic backend, including a secure API Gateway.
•	Implemented JWT authentication, centralized SSO, and role-based access across all applications.
•	Developed separate apps for the Public Website and CMS, integrated into the unified portal.
•	Built modules for Billing, Inventory, Appointment, Maintenance, Notifications, and User Management.
•	Integrated Mailgun SMTP, PhilSMS/Semaphore SMS API, and PayMongo for online payments.
•	Deployed and managed the system on Hostinger VPS using
Nginx (SSL), PM2, Docker/Docker Compose, Git Bash/Termius, and WinSCP.
•	Set up the PostgreSQL server inside the VPS and managed via pgAdmin v4.
•	Utilized GitHub, GitHub Desktop, Git Bash, and VS Code with GitHub Copilot / LLM agents during development.
Role:	Full-Stack Developer		
Technology:
React JS, Typescript, Node.js, GraphQL, PostgreSQL, pgAdmin v4, CI/CD, Nginx, Docker, PM2, JWT, SSO, SMTP, SMS, Paymongo, WinSCP, Github, VS Code, LLMs Github Copilot, Github Actions, Gitbash, Github Desktop
Github: https://github.com/butch-gh/adc-phase2
Github Contributions: https://github.com/butch-gh
-----------------------------------------
React Developer – November 2, 2024 – December 10, 2024
Public Website Link: https://adc.adrianodentalclinic.online/
(ADC) Adriano Dental Clinic System Phase - I	Developed the first version of the Adriano Dental Clinic System focused on the Public Website and Appointment Scheduling Module. This phase was built entirely without AI assistance, relying solely on manual coding and architecture design. The goal of Phase I was to create a functional online presence for the clinic and establish a digital appointment workflow.
The system was developed mainly using React.js, TypeScript, MUI, react-hook-form, Node.js and PostgreSQL, with the backend hosted in Azure (free tier). Both the Public Website and Admin Application were exposed using VS Code Port Forwarding for remote access.
Responsibilities & Achievements:
•	Designed and built the Public Website and Admin Appointment Application using React.js and TypeScript.
•	Implemented UI components using Material UI (MUI).
•	Created form handling and validation using react-hook-form.
•	Developed RESTful APIs using Node.js and Express.js.
•	Integrated appointment SMS notifications using Semaphore SMS API.
•	Deployed backend services to Azure App Service (free tier).
•	Hosted PostgreSQL on Azure Database for PostgreSQL (free tier).
•	Managed project source code using GitHub, GitHub Desktop, and Git Bash.
Role:	Full-Stack Developer		
Technology:
React JS, Typescript, Node.js,  PostgreSQL, pgAdmin v4, JWT,  SMS, Github, VS Code, Gitbash, Github Desktop
Github: https://github.com/oe-Kkay/ADC-ADMIN


[my skills sets, my tools,my technologies] = {
  languages: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'PL/SQL'],
  backend: ['.NET Core', 'Entity Framework Core', 'GraphQL', 'ExpressJS', 'Node.js'],
  frontend: ['Dot-Net','React', 'TailwindCSS', 'CSS', 'MUI', 'Vite', 'Webpack', 'HTML5', 'Blazor', 'JQuery', 'Bootstrap', 'React Hook Forms'],
  data: ['Microsoft SQL Server','SQL Server Management Studio', 'Oracle','Toad for Oracle', 'PostgreSQL','pgAdmin4'],
  devops: ['Azure DevOps', 'Docker', 'Nginx', 'Jenkins', 'Nexus', 'GitLab','git','PM2', 'CI/CD Pipelines', 'Cloud VM Deployments', 'Remote Desktop', 'GitHub Actions'],
  concepts: ['SOLID', 'Event-Driven', 'JWT Auth', 'Microservices & Monoliths','Design Patterns'],
  repository: ['GitHub', 'GitLab'],
  gaming: ['Unity 3D', 'Blender', 'Adobe Photoshop', 'Adobe Illustrator'],
  newbie: ['Next.js','Three.js', 'Framer Motion' , 'MongoDB', 'Kubernetes', 'Zustand', 'Redux', 'n8n', 'Zapier'],
  cli: ['Git', 'PowerShell', 'NPM', 'ssh'],
  ai: ['ChatGPT', 'GitHub Copilot', 'Google Gemini', 'Copilot'],
  messaging: ['RabbitMQ','MSMQ', 'SMPP/SMSC','Inetlab'],
}

=============================
Educational Background
=============================
Regis Marie College
Bachelor of Science in Computer Science (BSCS) 
Dr. Arcadio Santos Ave. Parañaque City.
------------------------------
AMA-CLC
Computer System Design and Programming. 
Sucat, Parañaque City.
------------------------------

"""

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
# Chatbot function
# ------------------------------
def chatbot_fn(user_input):
    context = find_relevant_context(user_input)

    messages = [
        {"role": "system",
         "content": "You are a helpful assistant that ONLY answers based on the resume context. Format your answer cleanly using markdown."},
        {"role": "user",
         "content": f"Resume Context:\n{context}\n\nUser Question: {user_input}"}
    ]

    response = llm.chat_completion(
        model="mistralai/Mistral-7B-Instruct-v0.2",
        messages=messages,
        max_tokens=300
    )

    raw_text = response.choices[0].message["content"]

    # Convert Markdown → HTML
    html_output = markdown.markdown(
        raw_text,
        extensions=["fenced_code", "tables", "nl2br"]
    )

    return f"<div class='chat-response'>{html_output}</div>"

# ------------------------------
# GRADIO INTERFACE (API + UI)
# ------------------------------

# API Interface (required for /call/predict)
api = gr.Interface(
    fn=chatbot_fn,
    inputs=gr.Textbox(lines=3, placeholder="Ask something about Botchki…"),
    outputs=gr.HTML(label="AI Response"),
    title="🤖 Botchki AI Portfolio Assistant"
)

# Chat UI
with gr.Blocks() as demo:
    gr.HTML("""
    <style>
    .chat-response {
        background: #ffffff;
        padding: 18px;
        border-radius: 12px;
        font-size: 17px;
        line-height: 1.65;
        border: 1px solid #ddd;
        margin-top: 10px;
    }
    .chat-response ul {margin-left:25px; list-style: disc;}
    .chat-response ol {margin-left:25px; list-style: decimal;}
    .chat-response code {background:#f4f4f4; padding:3px 5px; border-radius:4px; font-size:15px;}
    .chat-response pre {background:#f4f4f4; padding:10px; border-radius:8px; overflow-x:auto; margin-bottom:15px;}
    </style>
    <div class="title">🤖 Botchki AI Portfolio Assistant</div>
    """)

    chatbox = gr.Chatbot()
    msg = gr.Textbox(label="Ask anything about Botchki…", lines=3)
    
    def chat_ui(message, history):
        reply = chatbot_fn(message)
        history.append((message, reply))
        return history, ""
    
    msg.submit(chat_ui, [msg, chatbox], [chatbox, msg])

demo.queue()

# ------------------------------
# LAUNCH
# ------------------------------
if __name__ == "__main__":
    # This enables BOTH the API (/call/predict) and the UI
    api.launch(server_name="0.0.0.0", server_port=int(os.environ.get("PORT", 7860)))
