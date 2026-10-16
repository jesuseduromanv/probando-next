import React from "react";
import { getCacheado } from "./CacheReact1";

const CacheReact2 = () => {
    // Esta funcion solo se ejecuta 1 vez ya que son los mismos argumentos aqui y en CacheReact1, si cambiamos el argumento entonces veremos 2 console logs en la consola.
    const resultado = getCacheado(1);
    return <div>CacheReact2</div>;
};

export default CacheReact2;
