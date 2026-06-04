// Constants & DOM references
const todoInput = document.getElementById('new-todo');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-completed');
const itemsLeft = document.getElementById('items-left');

// Data model
let todos = []; // Each todo is { id: string, text: string, completed: boolean }

// Utility functions
const generateId = () => Date.now().toString();

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    todos = storedTodos ? JSON.parse(storedTodos) : [];
};

// Render function
const renderTodos = () => {
    todoList.innerHTML = ''; // Clear existing list
    let incompleteCount = 0;

    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        if (todo.completed) {
            listItem.classList.add('completed');
        }
        listItem.dataset.id = todo.id;

        listItem.innerHTML = `
            <input type="checkbox" class="toggle-complete" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <button class="delete-btn">✕</button>
        `;
        todoList.appendChild(listItem);

        if (!todo.completed) {
            incompleteCount++;
        }
    });

    itemsLeft.textContent = `${incompleteCount} items left`;
};

// Event handlers
const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const newTodo = {
            id: generateId(),
            text: todoText,
            completed: false
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        todoInput.value = ''; // Clear input
    }
};

const toggleComplete = (event) => {
    const todoItem = event.target.closest('.todo-item');
    if (todoItem) {
        const id = todoItem.dataset.id;
        todos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos();
        renderTodos();
    }
};

const deleteTodo = (event) => {
    const todoItem = event.target.closest('.todo-item');
    if (todoItem) {
        const id = todoItem.dataset.id;
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    }
};

const clearCompleted = () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
};

// Event listener registration
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

todoList.addEventListener('change', e => {
    if (e.target.classList.contains('toggle-complete')) {
        toggleComplete(e);
    }
});

todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        deleteTodo(e);
    }
});

clearBtn.addEventListener('click', clearCompleted);

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    renderTodos();
});
