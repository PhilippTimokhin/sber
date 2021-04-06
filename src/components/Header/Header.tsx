import React from "react";

interface HeaderProps {
    search: string;
    setSearch: (value: string) => void;
    setModal?: (value: boolean) => void;
}
const Header: React.FunctionComponent<HeaderProps> = ({setModal, search, setSearch}) => {
    const handleInputChnge = () => {};
    return (
        <>
            <header className="header header--wrapper">
                <div className="media header__media">
                    <input
                        type="text"
                        placeholder="Please, enter something ..."
                        value={search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSearch(e.target.value)
                        }
                        className="media__search"
                    />
                </div>
                <div className="button button__header">
                    <button className="button__add" onClick={() => setModal(true)}>
                        add
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
