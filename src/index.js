import "./styles.css";
import "./DOMstaff";

export class Card {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.projects = [];
    }
}
