
console.log('привет')
const refs = {
    input: document.querySelector('input'),
    todoList: document.querySelector('#todo'),
    totalTask: document.querySelector('.total-tasks')

}
let currentId = 0;
let allTodos = 0;
console.log(refs.totalTask)

refs.input.addEventListener('keydown', onSubmit)
refs.input.addEventListener('change', onChecked)


function onSubmit(e) {
    if (e.keyCode === 13) {
        e.preventDefault()
        const task = refs.input.value;

        refs.todoList.insertAdjacentHTML('beforeend', addTask(task));
        refs.input.value = ''
        console.log(currentId)
        allTodos = refs.todoList.querySelectorAll('li').length
        totalTask(allTodos)
    }
}

function addTask(text) {
   return  `
           <li class="list-item" data-id=${currentId += 1}>
           
           

             <span class ="span-${currentId}">${text}</span>
           </li>
           `
}
function totalTask(num) {
    refs.totalTask.innerHTML=''
    refs.totalTask.insertAdjacentHTML('beforeend',`количество дел ${num}`)
    console.log(`количество дел ${num}`)
}

function onChecked(e) {
    e.preventDefault()
   
    allTodos-=1
    const target = e.target
    console.log(target)

    refs.totalTask.insertAdjacentHTML('beforeend',`количество дел ${allTodos}`)

 }

