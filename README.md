# 📝 Todo Pro (Vanilla JavaScript)

A feature-rich **Todo application** built with **HTML, SCSS, and pure JavaScript**.  
The goal of this project is to practice modern JavaScript without frameworks, focusing on **state management, DOM manipulation, and modular code architecture**.

---

## 🚀 Features

- Add, edit, complete, and delete tasks (CRUD operations)
- Projects and categories support
- Deadlines with overdue highlighting
- Task priorities (Low → High)
- Tags and quick filters (Today, This Week, Overdue)
- Search and sort tasks
- LocalStorage persistence
- Responsive design (desktop & mobile)

---

## 📦 Planned Extensions

- Subtasks (checklists inside a task)
- Bulk actions (mark multiple tasks at once)
- Undo/redo history
- Recurring tasks
- Calendar view with drag & drop
- Pomodoro / Focus mode
- Export/Import (JSON backup)
- Offline support (PWA, IndexedDB)
- Notifications & reminders

---

## 🛠️ Tech Stack

- **HTML5** – semantic markup  
- **SCSS (Sass)** – modular styles with variables and mixins  
- **JavaScript (ES6+)** – modules, async/await, event delegation  
- **Bootstrap 5** -   
- **LocalStorage** – data persistence  

---

## 📂 Project Structure

```text
/todo-app
│── /build               # production output (generated)
│
│── /assets              # development sources (edit here)
│   ├── /scss             # SCSS
│   │   ├── main.scss
│   │   └── _*.scss
│   ├── /js              # ES modules
│   │   ├── main.js
│   │   ├── state.js
│   │   ├── storage.js
│   │   └── ui.js
│   └── /icons /images   # static assets
├── index.html
│── package.json
│── README.md
```

---

## ⚡ Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-pro.git
   cd todo-pro