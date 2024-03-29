let form = document.querySelector('form');
let taskTitle = document.querySelector('#task-title');
let taskDetails = document.querySelector('#task-details');
let allTasks = document.querySelector('.all-tasks');
let plusBtn = document.querySelector('#plus-btn');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if (taskTitle.value!==''){
        if(taskDetails.value !== ''){
            let newTask = document.createElement('div');
            newTask.classList.add('new-task');
            allTasks.append(newTask);
            newTask.innerHTML = `<h3>${taskTitle.value}</h3><p>${taskDetails.value}</p><button>x</button>`
            taskTitle.value = '';
            taskDetails.value = '';
            
        } else{
            alert('Please add Task Details')
        }
        
    } else{
        alert('Please add Task Title')
    }
    
}
)

allTasks.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        let taskToRemove = event.target.closest('.new-task');
        taskToRemove.remove();
    }
});