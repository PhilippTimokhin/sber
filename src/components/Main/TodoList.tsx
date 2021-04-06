import {ITodo} from "interface";
import React, {useState} from "react";

interface ListProps {
    todos: ITodo[];
    onDelete(id: number): void;
    onToggle(id: number): void;
    active?: boolean;
    setModal?: (value: boolean) => void;
}

const TodoList: React.FunctionComponent<ListProps> = ({setModal, todos, onDelete, onToggle}) => {
    const [modalDelete, setModalDelete] = useState(false);
    return (
        <div>
            <section className="list list--wrapper">
                {todos.map((inner) => (
                    <div key={inner.id} className="todo list__todo">
                        <div className="todo__header">
                            <span className="todo__title">{inner.title}</span>
                        </div>
                        <div className="todo__body">
                            <input
                                type="checkbox"
                                checked={inner.completed}
                                className="todo__completed"
                                onChange={onToggle.bind(null, inner.id)}
                            />
                            <span className="todo__task">{inner.task}</span>
                        </div>
                        <div className="todo__buttons">
                            <button className="button__delete" onClick={() => onDelete(inner.id)}>
                                delete
                            </button>
                            <button className="button__edit" onClick={() => setModal(true)}>
                                edit
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default TodoList;
