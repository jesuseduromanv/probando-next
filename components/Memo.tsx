"use client";
import React, { useState } from "react";
import MemoHijo from "./MemoHijo";

const Memo = () => {
    const [contador, setContador] = useState(1);
    const [propIntacta, setPropIntacta] = useState(1);
    return (
        <>
            <p>
                Contador: <span>{contador}</span>
                <button onClick={() => setContador((prev) => prev + 1)}>
                    Actualizar + 1
                </button>
                <MemoHijo propIntacta={propIntacta} />
            </p>
        </>
    );
};

export default Memo;
