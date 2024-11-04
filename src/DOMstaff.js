import { Card, Project } from "./index";

function closeTaskModal() {
    const taskModal= document.querySelector(".task-modal");
    taskModal.style.display = "none";
};

document.querySelector("#close").addEventListener("click", () => {
    closeTaskModal();
});