import React, { useEffect } from "react";
import "./Screen.css";

const Screen = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3000); // 3 segundos

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, [onFinish]);

    return (
        <div className="splash-container">
            <img src="/logoVeritas.png" alt="veritasLogo" className="logoVeritas" />
            <p className="splash-text">Carregando...</p>
        </div>
    );
};

export default Screen;
