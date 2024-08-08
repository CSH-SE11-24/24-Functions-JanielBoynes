const prompt = require('prompt-sync')()
let tasks = []
// FUNCTION DEFINITIONS
// Write a function called addTask that takes in task as a parameter 
function addTask(task) {
  // The function should add the task to the end of the tasks array (push()) and console.log task + " added"
  tasks.push(task)
}


// Write a function called printTasks (no parameters) that console logs the tasks array
function printTasks() {
  console.log(tasks)
}

// Write a function called firstTask (no parameters) that returns the first element of the tasks array

function firstTask(){
  
}

// Write a function called completeFirst (no parameters) that removes the first element (shift()) of the tasks array

function completeFirst (){
  tasks.shift()
}

// FUNCTION CALLS
  // Call printTasks
printTasks()

  // Prompt the user on what they want to do
let user=prompt("what do you want to do ")
  // If the user says "add task", prompt the user on their task
if(user===add task)
  let statement=prompt("")
  // and call addTask with their task



  // Else if user says "first task", call firstTask 
  // and console log the return value



  // Else if user says "complete first", call completeFirst



  // Else, says "I don't know how to do that! Try again."




}