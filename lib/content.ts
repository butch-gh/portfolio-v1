export const profile = {
  name: 'Botchki Pielago',
  title: 'Senior Fullstack Developer',
  location: 'Lower Bicutan, Taguig City',
  phone: '+63 921-000-1234',
  email: 'botchkipielago@gmail.com',
  linkedin: 'https://www.linkedin.com/in/botchki-pielago-0811b314b/',
  summary:
    'Senior Fullstack Developer with 18+ years building enterprise-grade systems across .NET, React/TypeScript, and cloud-native architectures. I design pragmatic, maintainable solutions with SOLID practices, clean APIs, and strong observability. Comfortable across microservices and monoliths, event-driven systems (RabbitMQ), and secure deployments behind Nginx with SSL. Experienced in PostgreSQL/Oracle/MS SQL performance tuning, CI/CD, and end-to-end delivery.',
}

export type ProjectRow = {
  year: string
  project: string
  company: string
  stack: string[]
  summary?: string
  role?: string
  responsibilities?: string[]
  link?: string
}

export const projectsTable: ProjectRow[] = [
  {
    year: '2023',
    project: 'IAS – Integrated Approval System',
    company: 'WSP USA – Manila Dev Team',
    stack: ['React JS', 'Material UI', 'Webpack', 'HTML/CSS', 'JavaScript', 'GitHub', 'Azure DevOps'],
    role: 'React Developer',
    summary:
      'This approval workflow system was developed to simplify and optimize the approval process across multiple organizational matrices. By automating key workflow steps and dynamically populating role assignments, the solution significantly increases operational efficiency. It also enhances visibility into compliance, approval stages, and response times, ensuring smoother coordination and faster decision-making across teams.',
    responsibilities: [
      'Maintain and enhance application features and workflow logic.',
      'Build and optimize Azure Pipelines.',
      'Implement comprehensive unit tests and support QA cycles.',
      'Address Azure DevOps work items and manage deployments.'
    ]
  },
  {
    year: '2023',
    project: 'Forecaster',
    company: 'WSP USA – Manila Dev Team',
    stack: ['React TypeScript', 'MUI', 'Vite', 'HTML/CSS', 'JavaScript', 'GitHub', 'Azure DevOps'],
    role: 'React Developer',
    summary:
      'An advanced project management tool designed to streamline key workflow processes and improve transparency across project teams. The system introduces major usability enhancements, including the retention of Resource field data when switching between methodologies—removing the need for repetitive data entry and significantly improving efficiency. \n\n' +
      'Forecaster replaces two legacy features from the Data Query Tool (DQT): Estimate to Complete (ETC) and Project Status Update. By consolidating and modernizing these capabilities, the tool offers a more intuitive, consistent, and efficient experience for project teams, ultimately simplifying project tracking and decision-making.',
    responsibilities: [
      'Maintain and extend core application features and UI components.',
      'Build and maintain Azure Pipelines with unit testing.',
      'Provide QA/testing support and resolve story items.',
      'Manage deployment processes end to end.'
    ]
  },
  {
    year: '2023',
    project: 'Client Hive',
    company: 'WSP USA – Manila Dev Team',
    stack: ['React JS', 'Material UI', 'Webpack', 'HTML/CSS', 'JavaScript', 'GitHub', 'Azure DevOps'],
    role: 'React Developer',
    summary:
      'A comprehensive platform designed to optimize client care and relationship management. By capturing, analyzing, and interpreting client experiences, the system empowers the business to better understand client needs, strengthen relationships, and drive continuous improvement in overall service engagement.',
    responsibilities: [
      'Maintain and enhance core application features with refined UI components.',
      'Develop and execute unit tests with QA collaboration.',
      'Resolve Azure DevOps story items and support deployments.'
    ]
  },
  {
    year: '2022',
    project: 'On-Premise to Cloud Migration',
    company: 'Amdocs Inc.',
    stack: ['VM Windows Server', '.NET', 'MS SQL', 'RDP'],
    role: 'Full Stack Developer',
    summary: 'Selected as one of five cross-team developers to migrate in-house systems from on-premise servers to the company’s new cloud infrastructure. Assigned three major applications for full assessment, migration, and validation.',
    responsibilities: [
      'Migrated and redeployed three business-critical applications to the cloud via Remote Desktop.',
      'Identified and replicated all dependencies: APIs, SMS gateways, SMTP, authentication, and database connections.',
      'Performed inbound/outbound connectivity checks, port testing, and coordinated firewall lifting between private and public subnets.',
      'Collaborated with Cloud Ops, Infra, and DBA teams for VM setup, database access, network routing, and troubleshooting.',
      'Executed integration testing, resolved deployment issues, and ensured full system functionality post-migration.',
      'Created clear documentation for configurations, issues, and handover processes.'
    ]
  },
  {
    year: '2022',
    project: 'Common Known Vulnerability Remediation',
    company: 'Amdocs Inc.',
    stack: ['JavaScript', 'jQuery', 'HTML', 'Config Files', 'MS SQL', '.NET', 'RDP'],
    role: 'Full Stack Developer',
    summary: 'Selected as 1 of 2 cross-team developers assigned to assess and remediate security vulnerabilities across 20+ existing in-house applications. The project aimed to identify potential malicious entry points, apply fixes, and ensure all systems meet secure coding and vulnerability compliance standards.',
    responsibilities: [
      'Analyzed 20+ applications to identify common security vulnerabilities including XSS, SQL Injection, Command Injection, DDoS-related weaknesses, insecure configurations, and exposed endpoints.',
      'Performed hands-on remediation by updating HTML, JavaScript, jQuery, and application configuration files without impacting core business logic.',
      'Conducted vulnerability testing, attack simulation, and verification based on known vulnerability patterns.',
      'Created detailed documentation, tracking sheets, and per-application status reports to monitor findings, fixes, and remaining risks.',
      'Collaborated with System/Application Owners, Infra, Cloud Ops, and DBA teams for verification, deployment of fixes, and retesting.',
      'Provided secure coding recommendations and guided app owners on preventing recurring vulnerabilities.'
    ]
  },
  {
    year: '2021',
    project: 'Bizload v3',
    company: 'Amdocs Inc.',
    stack: ['.NET Framework', '.NET Core', 'MS SQL', 'HTML/CSS/JS', 'JQuery', 'CI/CD (Gitlab-Jenkins-Nexus)'],
    role: 'Full Stack Developer',
    summary: 'Maintained and enhanced the company’s Loading Application System, used for employee load scheduling, on-demand load requests, and delivery of load plan packages. The system consists of Bizload Client, Bizload CMS, Bizload API, Bizload Loading Services, and MSSQL for data management. ' + 
    'Developed and improved key system features, including Email and SMS notification services, and optimized the multi-threading engine in the .NET background service that processes each scheduled load item efficiently and reliably.',
    responsibilities: [
      'Enhanced Email and SMS Notification Services: Improved the notification system to ensure timely and accurate communication with users regarding load scheduling and delivery status.',
      'Optimized Multi-Threading Engine: Refined the background service responsible for processing scheduled load items, enhancing performance and reliability in load delivery operations.',      
      'Collaborated with Cross-Functional Teams: Worked closely with QA, DBA, Infra, and other stakeholders to ensure seamless integration and deployment of new features and improvements.',
      'Monitored daily load scheduling processes and resolved any issues.',
    ]
  },
  {
    year: '2021',
    project: 'EMCPRO',
    company: 'Amdocs Inc.',
    stack: ['SMPP/SMSC', 'RabbitMQ', 'C# .NET Core', 'MS SQL', 'Oracle', 'CSHTML/CSS', 'JavaScript'],
    role: 'Full Stack Developer',
    summary: 'Redesigned and redeveloped the architecture of the SMS Messaging System (EMCPro Message Caster) to handle continuous high-volume SMS traffic and modernize legacy components with updated technologies.',
    responsibilities: [
      'Inetlab SMPP (Short Message Peer-to-Peer): Implemented to handle SMS messages through the SMSC (Short Message Service Center) for reliable storage, forwarding, conversion, and delivery of messages.',
      'RabbitMQ: Integrated as a messaging queue to efficiently manage high SMS traffic and ensure smooth message flow.',
      'Database Migration: Migrated the existing MSSQL database to Oracle for improved performance and reliability.',
      'Web App Modernization: Rebuilt the existing admin web tool as a C# .NET Core Web Application with improved usability and maintainability.',
      'Scalability & High Availability: Redesigned system architecture to support horizontal scaling, load balancing, and fault-tolerant operations.'
    ]
  },
  {
    year: '2020',
    project: 'NBA League Pass',
    company: 'Amdocs Inc.',
    stack: ['.NET', 'MS SQL', 'Razor', 'JavaScript'],
    role: 'Full Stack Developer',
    summary: 'Enhanced an application that provides NBA League live streaming for SMART, SUN, and TNT postpaid subscribers, including package offerings with free data access. The system consists of a mobile app redirect page, a web service, and a console application for brand syncing of mobile numbers. ' + 
    'Developed a new console application to generate CSV reports for NBA subscription activity, improving reporting efficiency and data accuracy.',
  },
  {
    year: '2019',
    project: 'SMART Store Locator',
    company: 'Amdocs Inc.',
    stack: ['.NET Core', 'JSON', 'CSHTML/CSS', 'JavaScript', 'JQuery', 'Ajax'],
    role: 'Back-End Developer',
    summary: 'Developed a Web Application for Smart Store Locator to improve customer experience and provide easy access to store information and services. ' + 
    'The application integrates real-time data, interactive maps, and a seamless booking system, enhancing both user convenience and operational efficiency.',
    responsibilities: [
      'View and Find Stores: Allows users to search and filter stores based on location, services, and availability.',
      'Store Details and Map Integration: Displays detailed store information and location on Google Maps for easy navigation.', 
      'Appointment Booking: Enables customers to schedule appointments directly within the store, streamlining service requests.',
      'RSS Feeds: Provides the latest news, promotions, and updates related to stores and services.',      
    ]
  },
  {
    year: '2018',
    project: 'Online Purchase & Inventory System (One-Eload)',
    company: 'Amdocs Inc.',
    stack: ['.NET C#', 'MS SQL', 'HTML/CSS/JS', 'AJAX'],
    role: 'Full Stack Developer',
    summary: 'Maintained and enhanced an online web application system that manages order processing and enables real-time sales monitoring between distributors and SMART. The system also facilitates the management of SmartLoad distribution, tracking the sales pipeline from initial load allocation down to end-user delivery.',
    responsibilities: [
      'Migration of Huawei API services: Updated and integrated Huawei APIs to improve reliability and support both synchronous and asynchronous calls.',
      'Console Application Development: Built console applications to handle Huawei API SYNC/ASYNC operations, ensuring seamless communication and data processing.',
      'Database Migration Tool: Developed a utility to migrate SUN dealers and retailers into the OPIS database, streamlining data consolidation and improving operational efficiency.',
    ]
  },
  {
    year: '2017',
    project: 'CSP Report Scheduler',
    company: 'Smart Communications Inc. (SLI)',
    stack: ['.NET C#', 'Oracle', 'HTML/CSS/JS', 'AJAX', 'Adobe Photoshop'],
    role: 'Full Stack Developer',
    summary: 'Developed a CRM-aligned reporting application that replicated and enhanced an out-of-the-box scheduler, enabling users to create, schedule, and generate delimited report files delivered to remote or specified destinations. The system supported dynamic parameter configuration, integrated role-based account management, and enforced both screen-level and data-level security to ensure controlled and compliant report output.',
    responsibilities: [
      'Flexible Report Management: Users can remove, edit, reprocess, replicate, and toggle scheduled reports ON/OFF.',
      'Real-Time Monitoring: Provides live log views for scheduled jobs, allowing instant tracking and troubleshooting.',
      'User-Friendly Controls: Designed with intuitive interfaces and controls for enhanced user experience.',
      'Security and Compliance: Built-in security features ensure data protection and compliance readiness for future regulatory requirements.',
    ]
  },
  {
    year: '2016',
    project: 'CSPRS – Shared Analytics',
    company: 'Smart Communications Inc. (SLI)',
    stack: ['.NET C#', 'MS SQL', 'Oracle', 'SSRS', 'HTML/CSS/JS', 'Adobe Photoshop'],
    role: 'Full Stack Developer',
    summary: 'Maintained and enhanced a CRM-related legacy CSP Report Scheduler, enabling users to instantly generate customer and operational reports within the CRM environment. The system incorporated membership and role-based access control, allowing administrators to add, activate, or deactivate users as needed.',
    responsibilities: [
      'Screen and Data Control: Restricts access based on user roles to ensure secure and compliant report generation.',
      'Active Directory Integration: Validates user information against the corporate domain via Active Directory (AD) for authentication and authorization.',
      'Administrative Flexibility: Provides administrators with tools to manage users, roles, and access privileges efficiently.',
    ]
  },
  {
    year: '2015',
    project: 'Sales Performance Monitoring (SPM)',
    company: 'Smart Communications Inc. (SLI)',
    stack: ['.NET C#', 'MS SQL', 'Oracle', 'SSRS', 'HTML/XML/CSS', 'JavaScript'],
    role: 'Front-End Developer / Designer',
    summary: 'Developed and maintained a CRM-integrated Web Application System that allowed users and agents to monitor sales targets against defined thresholds for both inbound and outbound sales channels. The platform provided multi-level visibility for Nationwide, Regional, Area, and Wireless Center management, supporting data-driven decision-making across the CRM ecosystem.',
    responsibilities: [
      'Role-Based Access Control: Integrated membership and role management to enforce secure and appropriate access.',
      'Active Directory Integration: Validates users against the corporate domain for authentication and authorization.',
      'Real-Time Monitoring: Offers dashboards and alerts to track performance against sales targets at different organizational levels.',
    ]
  },
  {
    year: '2014',
    project: 'Online SOA',
    company: 'Smart Communications Inc. (SLI)',
    stack: ['.NET C#', 'MS SQL', 'Oracle', 'HTML/CSS/JS'],
    role: 'Full Stack Developer',
    summary: 'Developed and maintained an online Statement of Account reporting system that enables Agents and Coordinators to manage the uploading of sales data, as well as view and generate detailed reports.',
    responsibilities: [
      'Data Management: Simplifies uploading and processing of sales details for accurate reporting.',
      'Report Generation: Provides real-time, downloadable reports for better tracking and analysis.',
      'User Roles: Supports role-based access to ensure secure and controlled data visibility.',
    ]
  },
  {
    year: '2013',
    project: 'iHelp',
    company: 'Smart Communications Inc. (SLI)',
    stack: ['.NET', 'HTML/CSS/JS', 'Adobe Photoshop'],
    role: 'UI Designer',
    summary: 'Designed the user interface for an in-house Web Application used by Smart/PLDT employees to create and manage service requests, including software and hardware maintenance (laptops, desktops, etc.), operating system troubleshooting, and domain account support.',
    responsibilities: [
      'Developed intuitive and user-friendly interfaces for efficient request creation and tracking.',
      'Designed forms, dashboards, and navigation flows to simplify user interactions.',
      'Ensured consistency, accessibility, and usability across the application for a seamless employee experience.',
    ]
  },
  {
    year: '2012',
    project: 'Online Purchase & Inventory System (OPIS Legacy)',
    company: 'Smart Communications Inc. (SLI)',
    stack: ['.NET C#', 'MS SQL', 'HTML/CSS/JS', 'AJAX'],
    role: 'Full Stack Developer / Designer',
    summary: 'Developed and maintained an online web application system that manages order processing and provides real-time sales monitoring between distributors and SMART. The system also facilitates the management of SmartLoad distribution, tracking the sales pipeline from initial allocation down to end-user delivery.',
    responsibilities: [
      'Real-Time Sales Monitoring: Provides live updates on sales performance across distributors.',
      'Load Management: Tracks SmartLoad allocation and distribution to ensure efficient delivery.',
      'Order Processing: Streamlines order submission, validation, and fulfillment across multiple channels.',
    ]
  },
  {
    year: '2011',
    project: 'CSPRS Reporting Team (ETL)',
    company: 'Smart Communications Inc. (SLI)',
    stack: ['Oracle', 'SQLPlus', 'Shell Script', 'UNIX', 'WinSCP', 'Excel'],
    role: 'ETL & PL/SQL Developer',
    summary: 'Developed and maintained CRM-focused ETL processes to generate daily, weekly, and monthly reports across multiple business units. This included extracting, transforming, and loading customer and operational data, optimizing workflows, troubleshooting issues, and creating documentation to support enterprise-wide CRM reporting requirements.',
    responsibilities: [
      'Successfully delivered 250+ CSP reporting projects (as of 2013) across organizations such as SMART, PLDT, and SUN, covering both ad-hoc and regular automated reports.',
      'Optimized existing ETL scripts using various scripting and performance-tuning techniques to improve execution speed and reliability.', 
      'Provided ongoing support and troubleshooting for deployed reporting processes to ensure timely and accurate output.',
      'Prepared complete documentation packages, including: UT – Unit Testing documentation, VCU – Version Control (Ready for UAT), CRF – Change Request Forms',
      'IT-Initiated Improvements: Enhanced and re-implemented existing shell script architectures to improve processing efficiency and reduce deployment complexity.',
      'IT-Initiated Improvements: Introduced a more configurable and modular script design, enabling faster report generation and minimizing maintenance overhead.',
    ]
  },
  {
    year: '2007',
    project: 'Payroll Management System',
    company: 'Nestlé Philippines, Inc.',
    stack: ['Visual FoxPro'],
    role: 'FoxPro Developer',
    summary: 'I was part of a development team responsible for building a customized Payroll System used by Nestlé Philippines to manage employee compensation processing. The system automated payroll calculations, statutory deductions, employee record maintenance, and payroll period management.',
    responsibilities: [
      'Designing and developing the Salary Computation module, which handled various pay structures, allowances, overtime rates, and government-mandated deductions such as SSS, PhilHealth, and Pag-IBIG.',
      'Built several front-end payroll forms, ensuring usability, data accuracy, and error-handling workflows for HR and finance personnel.',
      'Responsible for the reporting section of the application. This included generating payslips, payroll summary reports, government contribution reports, and internal financial reports.',
      'Designed the report layouts, built the query logic, and optimized data retrieval for fast processing across multiple payroll periods.',
    ]
  },
]

export type ExperienceItem = {
  company: string
  location?: string
  role: string
  period: string
  bullets: string[]
  tech?: string[]
  logo: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'WSP USA – Manila Dev Team',
    location: 'Davao City, Philippines',
    role: 'Senior Software Developer (React/Front-End)',
    period: 'Nov 2022 – Mar 2024',
    bullets: [
      'Maintained and enhanced IAS, Forecaster, and Client Hive features and workflows.',
      'Built and optimized Azure Pipelines with testing and deployment support.',
      'Implemented unit tests and provided QA/integration testing support.',      
    ],
    tech: ['React', 'TypeScript', 'JavaScript', 'Azure DevOps'],
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEoUMHQE0Gytg/company-logo_100_100/company-logo_100_100/0/1719867936717/wsp_logo?e=1764806400&v=beta&t=g5aoIiqJCgz9N4sHW7FNLnjTnZWxN0imk1KUY1LuI7M'
  },
  {
    company: 'Amdocs',
    location: 'Pasig, Philippines',
    role: '.NET C# Developer / MSSQL',
    period: 'Apr 2018 – Nov 2022',
    bullets: [
      'Led on-prem to cloud migration for 3 business-critical apps with full dependency mapping and validation.',
      'Remediated common vulnerabilities across 20+ apps (XSS, SQLi, headers, rate-limiting concepts).',
      'Enhanced Bizload v3 and EMCPRO; implemented RabbitMQ and SMPP integrations.',
    ],
    tech: ['.Net C#','.NET Core','EF/EF Core', '.NET Framework', 'RabbitMQ', 'SMPP/SMSC', 'Microsoft SQL Server', 'Oracle'],
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHl00ZjxIp_kw/company-logo_100_100/company-logo_100_100/0/1688279976770/amdocs_logo?e=1764806400&v=beta&t=kkPyr9tlrRcQ9uyTmOEt6x5sll-p0ctC7PSsHQt9W8M'
  },
  {
    company: 'Smart Communications (under SLI)',
    location: 'Makati, Philippines',
    role: '.NET C# Developer / Oracle PL/SQL',
    period: 'Aug 2007 – Apr 2018',
    bullets: [
      'Developed enterprise reporting (CSPRS), sales monitoring (SPM), and Online SOA tools.',
      'Integrated Active Directory, role-based access, and secure report generation.',
      'Delivered 250+ reporting projects as ETL developer with UNIX shell and PL/SQL.',
    ],
    tech: ['.NET', 'Oracle PL/SQL', 'MS SQL', 'SSRS'],
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEp9khHgrWrpw/company-logo_100_100/company-logo_100_100/0/1709137852919/smart_communications_inc_logo?e=1764806400&v=beta&t=vDFJp9NEp9ZzzZnKYpJt3jowu4DCpU1lVmsFm-RKZOk'
  },
  {
    company: 'Nestlé Philippines, Inc.',
    location: 'Boni, Mandaluyong City, Philippines',
    role: 'Visual FoxPro Developer',
    period: '2006 – 2007',
    bullets: [
      'Helped build a customized payroll platform covering salary computation, statutory deductions, and payroll-period workflows.',
      'Designed computation logic for varied pay structures, allowances, overtime, and government contributions (SSS, PhilHealth, Pag-IBIG).',
      'Built HR-facing forms and reporting modules (payslips, government filings, payroll summaries) with reliable error handling and fast retrieval.'
    ],
    tech: ['Visual FoxPro', 'Payroll Systems', 'Reporting'],
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGaL-YyJ8xd7Q/company-logo_100_100/company-logo_100_100/0/1630615758178/nestle_s_a__logo?e=1764806400&v=beta&t=gs_uZibcdvB0roz7Nudpou851wPqEQk25k6WZLgQdY4'
  }
]

export const skills = {
  languages: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'PL/SQL'],
  backend: ['.NET Core', 'Entity Framework Core', 'GraphQL', 'ExpressJS', 'Node.js'],
  frontend: ['Dot-Net','React', 'TailwindCSS', 'CSS', 'MUI', 'Vite', 'Webpack', 'HTML5', 'Blazor', 'JQuery', 'Bootstrap', 'React Hook Forms'],
  data: ['Microsoft SQL Server', 'Oracle', 'PostgreSQL'],
  devops: ['Azure DevOps', 'Docker', 'Nginx', 'Jenkins', 'Nexus', 'GitLab','git','PM2', 'CI/CD Pipelines', 'Cloud VM Deployments', 'Remote Desktop', 'GitHub Actions'],
  // concepts: ['SOLID', 'Event-Driven', 'JWT Auth', 'Microservices & Monoliths'],
  repository: ['GitHub', 'GitLab'],
  gaming: ['Unity 3D', 'Blender', 'Adobe Photoshop', 'Adobe Illustrator'],
  newbie: ['Next.js','Three.js', 'Framer Motion' , 'MongoDB', 'Kubernetes', 'Zustand', 'Redux', 'n8n', 'Zapier'],
  tools: ['Git', 'PowerShell', 'NPM', 'ssh', 'postman', 'Visual Studio', 'VS Code', 'SQL Server Management Studio', 'Toad for Oracle', 'pgAdmin4', 'Browser DevTools', 'WinSCP'],
  ai: ['ChatGPT', 'GitHub Copilot', 'Google Gemini', 'Copilot','Hugging Face Spaces'],
  messaging: ['RabbitMQ','MSMQ', 'SMPP/SMSC','Inetlab'],
}

