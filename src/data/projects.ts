
import { writable } from "svelte/store";
import type project from "../models/project";

const createStore = () => {

    const projects = writable<project[]>([])
    const endpoint = 'projects'

    async function fetch() {
        setTimeout(() => {
            const mock : project[] = [{
                id: 0,
                name: "Litle by Litle",
                icon:  'fa fa-cat',
                tasks: [{
                    id: 1,
                    name: "main stage",
                    finished: true
                },
                {
                    id: 2,
                    name: "main stage",
                    finished: false
                }]
            }]

            projects.set(mock)
        })
    }

    return {
        subscribe: projects.subscribe,
        fetch
    }
}

export const store = createStore()