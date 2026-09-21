# AI Section Generator & Editor

A simplified full-stack prototype that allows users to generate website sections from a text prompt, edit the generated content inline, and save the updated section.

## 🚀 Live Demo

**Frontend:**
https://ai-section-generator-zeta.vercel.app/

**Backend:**
https://ai-section-generator-ckg8.onrender.com/

**GitHub Repository:**
https://github.com/tinachelwanii/ai-section-generator

---

## ✨ Features

* Generate predefined website sections based on natural-language prompts
* Mock AI generation using keyword-based layout matching
* Supports multiple predefined layouts:

  * Hero Section
  * Pricing Section
* Structured nested JSON representation of UI components
* Dynamic recursive rendering of the JSON tree
* Inline editing of headings, paragraphs, and buttons
* React state updates when content is edited
* Save edited layouts to the backend
* In-memory storage for saved layouts
* Responsive and clean user interface

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* CORS

### Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Source Code:** GitHub

---

## 📁 Project Structure

```text
ai-section-generator/
│
├── backend/
│   ├── data/
│   │   └── layouts.js
│   ├── routes/
│   │   └── sectionRoutes.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DynamicRenderer.jsx
│   │   │   └── PromptBox.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## 🔄 How It Works

The application follows this flow:

```text
User Prompt
     ↓
React Frontend
     ↓
Express API
     ↓
Mock Layout Generator
     ↓
Structured JSON Tree
     ↓
Dynamic Recursive Renderer
     ↓
Editable Website Section
     ↓
Save Changes
     ↓
Express API
     ↓
In-Memory Storage
```

The backend does not return raw HTML. Instead, it returns a structured nested JSON tree describing the UI.

For example, a prompt such as:

```text
Build a pricing section
```

returns a predefined pricing layout represented as structured JSON.

The frontend recursively reads this JSON tree and dynamically renders the corresponding HTML elements.

---

## 🎨 Supported Layouts

### Hero Section

Example prompt:

```text
Create a hero section
```

The generated section contains:

* Heading
* Description
* Call-to-action button

### Pricing Section

Example prompt:

```text
Build a pricing section
```

The generated section contains:

* Section heading
* Description
* Three pricing cards
* Plan names
* Prices
* Descriptions
* Buttons

---

## ✏️ Inline Editing

Generated text elements can be edited directly on the page.

Users can click on:

* Headings
* Paragraphs
* Buttons

and modify their content.

The updated text is stored in the frontend's JSON layout state.

Clicking **Save Changes** sends the modified JSON structure to the backend.

---

## 💾 Data Storage

This project intentionally uses **in-memory storage** instead of a database.

The saved layout is stored temporarily by the Express backend.

This means saved data may be reset when the backend restarts or the deployment instance is restarted.

No external database is required for this prototype.

---

## 🔌 API Endpoints

### Health Check

```http
GET /api/health
```

Checks whether the backend is running.

### Generate Section

```http
POST /api/generate
```

Example request:

```json
{
  "prompt": "Build a pricing section"
}
```

Returns a structured JSON layout based on the prompt.

### Save Section

```http
POST /api/save
```

Accepts the modified structured JSON layout and stores it in memory.

### Get Saved Section

```http
GET /api/saved
```

Returns the currently saved layout.

---

## 💻 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/tinachelwanii/ai-section-generator.git
cd ai-section-generator
```

### 2. Install and start the backend

```bash
cd backend
npm install
npm run dev
```

The backend runs locally at:

```text
http://localhost:5000
```

### 3. Install and start the frontend

Open another terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs locally at:

```text
http://localhost:5173
```

---

## 🌐 Deployment

The application is deployed as two separate services.

### Frontend

Deployed using **Vercel**:

https://ai-section-generator-zeta.vercel.app/

### Backend

Deployed using **Render**:

https://ai-section-generator-ckg8.onrender.com/

The frontend communicates with the deployed Express backend through the configured API URL.

---

## 📝 Assignment Notes

This project intentionally uses a **mock AI generator** rather than a real LLM.

The backend uses keyword matching to select predefined layouts, keeping the implementation simple and aligned with the prototype requirements.

No real database or LLM API is required.

The primary application flow is:

**Prompt → Generate → Render → Edit → Save**

---


