"use client";
import React, { useState, lazy, Suspense } from "react";
import dynamic from "next/dynamic";

const Huevon = dynamic(() => import("./Huevon"), { ssr: false });

const Hijo = () => {
    const [a, setA] = useState(false);
    return (
        <>
            <div>Hijo</div>
            <div>{a}</div>
            <button className="block p-4 bg-blue-300" onClick={() => setA(!a)}>
                Boton mmlon
            </button>
            {a && <Huevon />}
        </>
    );
};

export default Hijo;
