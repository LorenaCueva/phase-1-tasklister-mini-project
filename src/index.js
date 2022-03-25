document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#create-task-form"). addEventListener("submit", addTask)

});

function addTask(e){

     e.preventDefault()

     ///Check that form is filled
     
     if(e.target.new_task_description.value === "" || e.target.priority_select.value === "none" || e.target.due_date.value === ""){
       alert("Please Fill All the Form")
       return
     }

     const list = document.querySelector("#tasks")
     const task = document.createElement("li")

     /////Get list items by priority

     let highPriorityItems = Array.from(document.querySelectorAll(".high_priority"))
     let mediumPriorityItems = Array.from(document.querySelectorAll(".medium_priority"))
     let lowPriorityItems = Array.from(document.querySelectorAll(".low_priority"))
      
     
     list.innerHTML = ""

     task.innerText = `${e.target.new_task_description.value} ---> ${e.target.due_date.value}`

     switch(e.target.priority_select.value){
       case "high":
         task.style.color = "red"
         task.className = "high_priority"
         highPriorityItems.push(task)
         addDelete(task)
         break
       case "medium":
        task.style.color = "orange"
        task.className = "medium_priority"
        mediumPriorityItems.push(task)
        addDelete(task)
        break
       case "low":
        task.style.color = "green"
        task.className = "low_priority"
        lowPriorityItems.push(task)
        addDelete(task)
        break
     }


     addToList(highPriorityItems)
     addToList(mediumPriorityItems)
     addToList(lowPriorityItems)

  
     
    document.querySelector("#create-task-form").reset()

    function addDelete(task){
      task.addEventListener("mouseleave", e => e.target.innerHTML = e.target.innerText)
      task.addEventListener("mouseenter", e => {
          e.target.innerHTML = e.target.innerText.strike()})
      task.addEventListener("click", e=>{
          e.target.parentElement.remove()
          })
     }


     function addToList(arr){
       arr.forEach(e=>{
        list.appendChild(e)
       })
      }
     
}