//VARIABLES GLOBALES
var start = false;

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

function addTask() {
    localStorage.setItem(localStorage.length,$("#newTask").val());
    $("#tasks-table tr").remove();
    loadTasks();
    $("#newTask").val('');
    $("#newTask").focus();
}

function loadTasks(){
    for (x=0; x<=localStorage.length-1; x++)  {
        key = localStorage.key(x);
        value = localStorage[key];
        createTask(key,localStorage[key]);
     }
     
     $(".btnDelete").click(function(){
           var $row = $(this).closest("tr"),        // Finds the closest row <tr>
           $tds = $row.find("td:nth-child(6)")
           $key = $($tds).text();
           removeTask($key);
    });
    
    startTask();
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
    "<td width='15%' align='center'>"+
    "<button type='button' class='task-time-button green-flat-button btnStart'>Start</button>"+
    "</td>"+
    "<td width='10%' align='center'>"+
    "<i class='fa fa-close inactive btnDelete' title='Delete'></i>"+
    "</td>"+
    "<td hidden='hidden'>"+key+"</td>"+
    "</tr>";

    $("#tasks-table").append(taskStructure);
    
}

function clearTasks(){
    localStorage.clear();
}

function removeTask(key){
    localStorage.removeItem(key);
    $("#tasks-table tr").remove();
    loadTasks();
}

function startTask(){
    $(".btnStart").click(function(){
        if(start==false){
            $(this).removeClass("green-flat-button");
            $(this).addClass("red-flat-button");
            $(this).text("Stop");
            start = true;
        }else{
            $(this).addClass("green-flat-button");
            $(this).removeClass("red-flat-button");
            $(this).text("Start");
            start = false;
        }
     });
}



