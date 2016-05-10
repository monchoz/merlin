jQuery(document).ready(function(){
    $("#btnAdd").hide();
    loadTasks();
});

function showAddButton() {
    var newTask = $("#newTask").val();
    if(newTask!=""){
        $("#btnAdd").show();
    }
    else{
        $("#btnAdd").hide();
    }
}

function  addTask() {
    createTask(localStorage.length,$("#newTask").val());  
    localStorage.setItem(localStorage.length,$("#newTask").val());
    
    
}

function loadTasks(){
    for (x=0; x<=localStorage.length-1; x++)  {  
        key = localStorage.key(x);
        value = localStorage[key];
        createTask(key,localStorage[key]);
     }
}

function createTask(key,task){
    var taskStructure = 
    "<tr>"+
    "<td width='10%'> "+
    "<a href='#' class='checkbox'> "+
    "<i class='fa fa-circle-o '></i>"+
    "<i class='fa fa-check-circle-o removeItem'></i>"+
    "</a>"+
    "</td>"+
    "<td width='40%'>"+
    "<p class='task-title'>"+ task +"</p>"+
    "</td>"+
    "<td width='25%' align='center'>"+
    "<span class='task-time'>00:00:00</span>"+
    "</td>"+
    "<td width='25%' align='center'>"+
    "<button type='button' class='task-time-button green-flat-button'>Start</button>"+
    "</td>"+
    "</tr>";   
    $("#tasks-table").append(taskStructure);
}

function clearTasks(){
    localStorage.clear();
}

function removeTask(key){
    localStorage.removeItem(key);
}