var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("—__________ New Task Added __________");
    console.log("Task " + task + " inserted in the list");
    return tasks.length;
}
function listAllTasks() {
    console.log("START: All items in Array:");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("END: All items in Array:");
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("__________ Task Removed __________");
        console.log("Task " + task + " removed from list.");
    }
    return tasks.length;
}
addTask('wake up');
addTask('sleep');
listAllTasks();
deleteTask('sleep');
