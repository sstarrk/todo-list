import "./styles.css";
import "./DOMstaff";

export const allCards = [];
export const allProjects = [];

export class Card {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

export class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.projects = [];
    }
};

export function newCard(taskName, taskDescription, taskDueDate, taskPriority) {
    const newCard = new Card(taskName, taskDescription, taskDueDate, taskPriority);
    allCards.push(newCard);
    console.log(allCards);
};

export function newProject(projectName, projectDescription) {
    const newProject = new Project(projectName, projectDescription);
    allProjects.push(newProject);
    console.log(allProjects);
};
