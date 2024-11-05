import { newProject, newCard } from "./index";

function closeTaskModal() {
    document.querySelector(".task-modal").style.display = "none";
};

function showTaskModal() {
    document.querySelector(".task-modal").style.display = "flex";

};

function closeProjectModal() {
    document.querySelector(".project-modal").style.display = "none";
};

function showProjectModal() {
    document.querySelector(".project-modal").style.display = "flex";

};

document.querySelector("#close").addEventListener("click", () => {
    closeTaskModal();
});

document.querySelector(".newtask").addEventListener("click", () => {
    showTaskModal();
});

document.querySelector("#close-pr").addEventListener("click", () => {
    closeProjectModal();
});

document.querySelector(".newproject").addEventListener("click", () => {
    showProjectModal();
});

function clearInputs() {
    document.querySelector("#task-name").value = "";
    document.querySelector("#task-description").value = "";
    document.querySelector("#due-date").value = "";
    document.querySelector('input[name="priority"]').value = ""
    document.querySelector("#project-name").value = "";
    document.querySelector("#project-description").value = "";
}

// Clicking button to submit new task
const addTaskBtn = document.querySelector("#add-task");
addTaskBtn.addEventListener("click", () => {
    const taskName = document.querySelector("#task-name").value;
    const taskDescription = document.querySelector("#task-description").value;
    const taskDueDate = document.querySelector("#due-date").value;
    const taskPriority = document.querySelector('input[name="priority"]:checked')?.value;
    newCard(taskName, taskDescription, taskDueDate, taskPriority);
    closeTaskModal();
    clearInputs();
})

const addProjectBtn = document.querySelector("#add-project");
addProjectBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#project-name").value;
    const projectDescription = document.querySelector("#project-description").value;
    newProject(projectName, projectDescription);
    closeProjectModal();
    clearInputs();
});