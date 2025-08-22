# Edgy_Frontend

Welcome to **Edgy_Frontend**!  
This is the frontend for the Edgy platform, delivering a modern, responsive, and engaging user interface for learning and collaboration.

---

## 🚀 Overview

Edgy_Frontend is a web application designed to provide seamless access to study materials, flashcards, chat-based AI assistance, and more. It serves as the client-side of the Edgy ecosystem.

---

# Edgy

Edgy is a personal project designed to revolutionize how you organize, study, and interact with your learning materials. With Edgy, you can create custom sections, upload files, generate flashcards, enable spaced repetition, and even ask questions about your content—all in one place.

## Features

### 1. Section-Based Organization
- **Create Sections:** Organize your content by creating unique sections (e.g., Math, History, Programming).
- **Upload Files:** Upload files (PDFs, docs, etc.) to any section at any time for flexible organization.

### 2. Smart PDF Info Extraction
- **PDF Parsing:** When you upload a PDF to a section, Edgy extracts and summarizes key information.
- **Pinecone Integration:** All extracted info is saved to Pinecone for efficient semantic search and retrieval within each section.

### 3. Flashcard Generation
- **Automated Flashcards:** Flashcards are automatically generated from the content of files uploaded to each section.
- **Continuous Updates:** As more files are added, the flashcard set grows and evolves.

### 4. Spaced Repetition
- **Intelligent Review:** Flashcards support spaced repetition, helping you review material at optimal intervals to boost retention.

### 5. Ask Section
- **Question & Answer:** Each section has an "Ask" feature where you can ask questions about the uploaded files.
- **Contextual Answers:** Responses are generated based on the content stored in Pinecone, ensuring accurate and relevant answers.

## How It Works

1. **Create a Section:** Start by making a new section for your subject or topic.
2. **Upload Files:** Add PDFs or other files relevant to your section.
3. **Info Extraction:** Edgy parses and stores summary info from PDFs in Pinecone for semantic search.
4. **Flashcard Generation:** Flashcards are created from the contents of your files, and you can begin practicing them.
5. **Spaced Repetition:** Review flashcards using spaced repetition algorithms for effective learning.
6. **Ask Questions:** Use the Ask feature to query information about your uploaded files and get instant, content-based answers.

## Example Workflow

1. **Create section:** "Biology"
2. **Upload PDFs:** Add lecture notes, textbook chapters, or research papers.
3. **Flashcards:** Edgy automatically creates flashcards like "What is mitosis?" from your files.
4. **Spaced repetition:** Practice daily for long-term retention.
5. **Ask:** "Explain the process of cellular respiration." Get an answer based on your uploaded PDFs.

---

## 🛠️ Tech Stack

- **React** — UI library for building interactive interfaces
- **Redux Toolkit** — State management (users, chat, sections, uploads, flashcards)
- **React Router** — Client-side routing
- **Vite** — Lightning-fast build tool and development server
- **Axios** — HTTP client for backend API communication
- **React-Toastify** — Toast notifications for user feedback
- **JavaScript (ES6+)**
- **CSS** — Custom styles across components

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anuragk0/Edgy_Frontend.git
   cd Edgy_Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🖥️ Usage

- Open [http://localhost:5173](http://localhost:5173) (default Vite port) in your browser.
- Explore features: section management, uploading materials, flashcards, chat-based AI for Q&A, authentication, and more.

---

## 🌟 Features

- Authentication (Sign up, Login, OTP verification)
- Section and material management
- Flashcard creation and review
- AI-powered chat for Q&A
- Responsive and intuitive UI
- Toast notifications for smooth user feedback

---

## Links

- **Backend:** [Edgy Backend](https://github.com/anuragk0/Edgy-Backend)

---

**Happy Coding! 🚀**
