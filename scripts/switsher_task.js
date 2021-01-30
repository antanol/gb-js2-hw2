let current_task = "task1-2",
    links = document.getElementsByTagName("a");
    
for (let i=0; i<links.length; i++){
    links[i].onclick = (evt)=>{
        document.getElementById(current_task).classList.add("task-hidden");
        current_task = evt.target.getAttribute("href").substring(1);
        document.getElementById(current_task).classList.remove("task-hidden");
    };
}