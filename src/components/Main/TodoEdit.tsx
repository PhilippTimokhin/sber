import {ITodo} from "interface";
import React, {useState} from "react";

interface EditProps {
    editingTitle: string;
    editingTask: string;
    todos: ITodo[];
    active?: boolean;
    setModal?: (value: boolean) => void;
    setEditingTitle?: (title: string) => void;
    setEditingTask?: (task: string) => void;
    editTask: (id: number, newTitle: string, newTask: string) => void;
}

const TodoEdit: React.FunctionComponent<EditProps> = ({
    active,
    setModal,
    setEditingTitle,
    editingTitle,
    editingTask,
    setEditingTask,
    editTask
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // editTask();
        setModal(false);
    };
    const enabled = editingTitle.length > 0 && editingTask.length > 0;
    return (
        <>
            <form className={active ? "form form--wrapper active" : "form form--wrapper"}>
                <label className="form__labelName" htmlFor="name">
                    Name of note
                </label>
                <input
                    name="name"
                    placeholder="Name of your note..."
                    type="text"
                    className="form__name"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditingTitle(event.target.value)
                    }
                />
                <label className="form__bodyName" htmlFor="body">
                    Body of note
                </label>
                <input
                    name="age"
                    placeholder="Body of your note..."
                    className="form__task"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditingTask(event.target.value)
                    }
                />
                <div className="button form__buttons">
                    <button className="button__add" onClick={handleSubmit}>
                        save
                    </button>
                    <button className="button__cancel" onClick={() => setModal(false)}>
                        cancel
                    </button>
                </div>
            </form>
        </>
    );
};

export default TodoEdit;
