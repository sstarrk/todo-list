import { Card, Project } from "./index";

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