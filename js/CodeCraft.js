
const taskInput = document.getElementById("taskInput");
const noteInput = document.getElementById("noteInput");
const imageInput = document.getElementById("imageInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

 
function addTask() {
    const taskText = taskInput.value.trim();
    const noteText = noteInput.value.trim();
    const imageUrl = imageInput.value.trim();

 
    if (taskText === "") {
        alert("لطفاً حداقل عنوان کار رو بنویس!");
        return;
    }

 
    const li = document.createElement("li");
    li.classList.add("task-item");

 
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("task-content");

 
    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskText;
    contentDiv.appendChild(span);

 
    if (noteText !== "") {
        const noteP = document.createElement("p");
        noteP.classList.add("task-note");
        noteP.textContent = "📝 " + noteText;
        contentDiv.appendChild(noteP);
    }
 
    if (imageUrl !== "") {
        const img = document.createElement("img");
        img.classList.add("task-image");
        img.src = imageUrl;
        img.alt = "عکس کار";
        contentDiv.appendChild(img);
    }

 
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("task-actions");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "حذف";
    actionsDiv.appendChild(deleteBtn);
 
    li.appendChild(contentDiv);
    li.appendChild(actionsDiv);
    taskList.appendChild(li);

 
    taskInput.value = "";
    noteInput.value = "";
    imageInput.value = "";

 
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

   
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
}

 
addBtn.addEventListener("click", addTask);

 
const inputs = [taskInput, noteInput, imageInput];
inputs.forEach(function(input) {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});