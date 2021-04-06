import React from "react";

const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className="footer footer--wrapper">
                <div className="media footer__media">
                    <span className="media__logo">sber</span>
                </div>
                <div className="copy footer__media">
                    <span className="copy__info">made by philipp timokhin</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
