import React from "react";
import CacheReact1 from "@/components/CacheReact1";
import CacheReact2 from "@/components/CacheReact2";

//Vamos a probar el cache de React, para esto vamos a crear 2 componentes que llamen a la misma funcion cacheada, si todo funciona correctamente la funcion solo se ejecutara 1 vez y veremos un solo console log en la consola del servidor de front.
const ReactCachePage = () => {
    return (
        <>
            <CacheReact1 />
            <CacheReact2 />
        </>
    );
};
export default ReactCachePage;
