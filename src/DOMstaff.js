import { allProjects, allCards, newProject, newCard } from "./index";

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
    showCards(allCards);
})

// Clicking button to submit new project
const addProjectBtn = document.querySelector("#add-project");
addProjectBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#project-name").value;
    const projectDescription = document.querySelector("#project-description").value;
    newProject(projectName, projectDescription);
    closeProjectModal();
    clearInputs();
    updateProjects();
});

function showCards(cards) {
    const allCardsDiv = document.querySelector(".right");
    allCardsDiv.innerHTML = "";
    cards.forEach(card => {
        const newCardDiv = document.createElement("div");
        newCardDiv.setAttribute("class", "card");
        allCardsDiv.appendChild(newCardDiv);
        const cardName = document.createElement("div");
        cardName.setAttribute("class", "name");
        cardName.textContent = card.name;
        newCardDiv.appendChild(cardName);
        const cardDescription = document.createElement("div");
        cardDescription.setAttribute("class", "description");
        cardDescription.textContent = card.description;
        newCardDiv.appendChild(cardDescription);
        const cardPriority = document.createElement("div");
        cardPriority.setAttribute("class", "priority");
        cardPriority.textContent = card.priority;
        switch (cardPriority.textContent) {
            case "High":
                cardPriority.style.backgroundColor = "red";
                cardPriority.style.color = "lightgrey"
                cardPriority.style.borderRadius = "15px";
                break;
            case "Medium":
                cardPriority.style.backgroundColor = "yellow";
                cardPriority.style.color = "#333333"
                cardPriority.style.borderRadius = "15px";
                break;
            case "Low":
                cardPriority.style.backgroundColor = "green";
                cardPriority.style.color = "lightgrey"
                cardPriority.style.borderRadius = "15px";
                break;
        }
        cardPriority.style.paddingLeft = "15px";
        newCardDiv.append(cardPriority);
        const newBotterDiv = document.createElement("div");
        newBotterDiv.setAttribute("class", "botter");
        newCardDiv.appendChild(newBotterDiv);
        const dueDateDiv = document.createElement("div");
        dueDateDiv.setAttribute("class", "dueDate");
        dueDateDiv.textContent = card.dueDate;
        newBotterDiv.appendChild(dueDateDiv);
        const imgsDiv = document.createElement("div");
        imgsDiv.setAttribute("class", "imgs");
        imgsDiv.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
            <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024"><path fill="#000000" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"/></svg>        `;
        newBotterDiv.append(imgsDiv);
    });
};

function updateProjects() {
    const projects = document.querySelector("#pr-select");
    projects.innerHTML = "";
    allProjects.forEach(pr => {
        const option = document.createElement("option");
        option.setAttribute("value", `${pr.name}`);
        option.textContent = `${pr.name}`;
        projects.appendChild(option);
    });
};