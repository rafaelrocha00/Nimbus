import type Task from "./task";

export default interface Project {
    id: number,
    name: string,
    icon: string,
    tasks: Array<Task>
} 