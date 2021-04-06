import React, {useState} from "react";

interface FormProps {
    active: boolean;
    setModal?: (value: boolean) => void;
    onAdd: (title: string, task: string) => void;
}
const TodoForm: React.FunctionComponent<FormProps> = ({active, setModal, onAdd}) => {
    const [name, setName] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const clearInputs = () => {
        setName("");
        setBody("");
    };

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const changeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onAdd(name, body);
        clearInputs();
        setModal(false);
    };

    const enabled = name.length > 0 && body.length > 0;
    return (
        <>
            <form className={active ? "form form--wrapper active" : "form form--wrapper"}>
                <label className="form__labelName" htmlFor="name">
                    Name of note
                </label>
                <input
                    name="name"
                    value={name}
                    onChange={changeName}
                    placeholder="Name of your note..."
                    type="text"
                    className="form__name"
                />
                <label className="form__bodyName" htmlFor="body">
                    Body of note
                </label>
                <input
                    name="age"
                    value={body}
                    onChange={changeBody}
                    placeholder="Body of your note..."
                    className="form__task"
                />
                <div className="button form__buttons">
                    <button className="button__add" onClick={handleSubmit} disabled={!enabled}>
                        add
                    </button>
                    <button className="button__cancel" onClick={() => setModal(false)}>
                        close
                    </button>
                </div>
            </form>
        </>
    );
};

export default TodoForm;
