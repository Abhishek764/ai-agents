# 🚀 AI Agent Development

This repository contains my learning journey and experiments while building **AI Agents** using the **OpenAI Agents SDK**, TypeScript, and Node.js.  
Each file demonstrates a different concept such as *Hello World*, *Tool Calling*, and more advanced agent behaviors.

This project also includes a `.gitignore` file for clean version control and a PowerShell script (`push.ps1`) to automatically upload updates to GitHub.

---

## 📂 Project Structure

Agent Development/
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
│
├── 1.hello_world.ts
├── 2.tool_calling.ts
│
├── push.ps1
└── README.md

yaml
Copy code

---

## ⚙️ Technologies Used

- **Node.js**
- **TypeScript**
- **OpenAI Agents SDK** (`@openai/agents`)
- **PowerShell automation**
- **Git + GitHub for version control**

---

## 🔧 Installation & Setup

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Add environment variables
Create a .env file:

ini
Copy code
OPENAI_API_KEY=your_api_key_here
⚠️ .env is already ignored in .gitignore.

▶️ Running the Code
Run TypeScript files:
bash
Copy code
npx ts-node 1.hello_world.ts
or

bash
Copy code
npx ts-node 2.tool_calling.ts
🔨 Included Features
✅ 1. Hello World Agent
Basic example to verify the OpenAI SDK setup.

✅ 2. Tool Calling Agent
Builds an agent that can use tools (functions).

📌 More agent files can be added later.
🔧 Git Automation Script — push.ps1
This project includes a PowerShell script to automatically push your updates to GitHub.

Usage:
powershell
Copy code
.\push.ps1
It performs:

git add .

git commit -m "your message"

git push

If you see a permissions error:
powershell
Copy code
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
🗂️ .gitignore
A properly configured .gitignore is included to keep the repository clean.

Ignored items include:

node_modules/

.env

.env.*.local

dist/, out/, build/

logs

VSCode files

TypeScript build cache

🎯 Goals of This Project
Learn how AI agents work

Practice OpenAI Agents SDK

Understand tool calling

Build clean, structured agent examples

Automate GitHub uploads with PowerShell

📘 Future Plans
Multi-tool agents

Memory-enabled agents

Multi-agent communication

Complete agent workflows

Agent API server with Express

🤝 Contributing
This is a personal learning project, but anyone can use or improve it.

📄 License
Open for learning and experimentation.

yaml
Copy code

---

If you also want the `.gitignore` and `push.ps1` **inside markdown blocks**, just tell me — I’ll gen