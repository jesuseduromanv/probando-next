import UseReact from "@/components/UseReact";
import React, { Suspense } from "react";

const UseReactPage = () => {
    // Probando el use de React junto con el Suspense.
    return (
        <Suspense fallback={"Cargando..."}>
            <UseReact />
        </Suspense>
    );
};

export default UseReactPage;
