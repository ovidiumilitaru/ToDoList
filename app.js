const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add todos
const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
}

addForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const todo = addForm.add.value.trim();
    
    if (todo.length > 0) {
        generateTemplate(todo);
        // addForm.add.value = '';
        addForm.reset();
    }
}); 

// delete dotos 
list.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('delete')) {
        ev.target.parentElement.remove();
    }
});

// search todos 
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !(todo.textContent.toLowerCase().includes(term));
        })
        .forEach((todo) => {
            todo.classList.add('filtered')
        });

    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => {
            todo.classList.remove('filtered')
        });
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});