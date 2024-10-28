import { v4 } from "uuid"

export default class Todo {
    public complited:boolean = false
    public create_at:Date
    public id:string
    constructor(public title:string) {
        this.create_at = new Date()
        this.id = v4()
    }
}