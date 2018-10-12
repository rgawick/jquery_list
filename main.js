let textInput = $("textBox")
let addButton = $("addButton")
let pendingTaskList = $("pendingTaskList")
let completedTaskList = $("completedTaskList")

function removeTask(sender) {

  if (sender.parentElement == pendingTaskList){
  $("pendingTaskList").remove(sender)
}
else {
  $("completedTaskList").remove(sender)
}
}

function markAsCompleted(cb) {

  if(cb.checked) {
    $("completedTaskList").append(cb.parentElement)

  } else {
    $("pendingTaskList").append(cb.parentElement)
  }

}


$("addButton").click(function(){

let taskInput = $("textBox").val()

let taskItem =  `
<li>
  <input type='checkbox' onchange = 'markAsCompleted(this)' />
  <label>${taskInput}</label>
  <button onclick='removeTask(this.parentElement)' class="itemButton">Remove</button>
</li> `

$("pendingTaskList").append(taskItem)

})
