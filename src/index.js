import "./styles.css";
import "./DOMstaff";

const allCards = [];

export class Card {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

export class Project {
    constructor(name) {
        this.name = name;
        this.projects = [];
    }
};

export function newCard(taskName, taskDescription, taskDueDate, taskPriority) {
    const newCard = new Card(taskName, taskDescription, taskDueDate, taskPriority);
    allCards.push(newCard);
    console.log(allCards);
};
