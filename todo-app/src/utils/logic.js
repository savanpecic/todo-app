
const todo = () => {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const list = document.getElementById("todo-list");

  const taskCounter = document.getElementById("task-counter");


  const addTask = () => {
    const taskText  = input.value.trim();
    console.log('radi?')

    if (taskText  === "") {
      alert("Unesite neki zadatak!");
      return;
    }

    // div class = 'task-item'
    const li = document.createElement("li");
    li.className = 'task-item'

    // div class = 'icon' (nalazi se u div class = 'task-item')
    const div = document.createElement('div')
    div.className = 'icon';

    // nalazi se u div.tack-item
    const span = document.createElement('span');
    span.className = 'text-task';
    span.textContent = taskText;

    // nalazi se u div.icon
    const doneBtn = document.createElement('img');
    doneBtn.src = '/Check.svg';
    doneBtn.alt = 'Urađeno';
    doneBtn.width = 22;
    doneBtn.height = 22;
    doneBtn.className = 'done-btn'

    // nalazi se u div.icon
    const deleteBtn = document.createElement('img');
    deleteBtn.src = '/TrashSimple.svg';
    deleteBtn.className = 'delete-btn';
    deleteBtn.width = 22;
    deleteBtn.height = 20;

    // za urađene zadatake
    doneBtn.addEventListener('click', () => {
        span.style.textDecoration = span.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        update();
    })

    // za brisanje zadataka
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        update();
    })

    // za update stanja
    const update = () => {
        const totalTask = list.children.length;
        const doneTask = list.querySelectorAll('span[style*="line-through"]').length;
        taskCounter.textContent = `Task to do:${ totalTask - doneTask - 1}`;
    }

    li.appendChild(span);
    li.appendChild(div)
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);



    list.appendChild(li);
    update();
    input.value = "";
  };


//   pritisak na plus i enter
    addBtn.addEventListener('click', addTask);

    input.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            addTask();
        }
    })


};

export default todo;
