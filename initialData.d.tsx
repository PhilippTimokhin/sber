import {ITodo} from "interface";
import {v4 as uuidv4} from "uuid";

export const initialData: Array<ITodo> = [
    {
        title: "Свморазвитие",
        task: "Посмотреть обучающий ролик про бег",
        id: uuidv4(),
        completed: false
    }
];
