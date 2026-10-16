import React, { cache } from "react";
import CacheReact2 from "./CacheReact2";

export const getCacheado = cache((numero: number) => {
    //Marca de tiempo para ver que se ejecuto solamente 1 vez la funcion, esta se llama con los mismos argumentos en CacheReact1 y CacheReact2, si no se ejecuta 1 sola vez es porque no se esta cacheando la funcion
    const fecha = new Date().toISOString();

    console.log("Ejecutado:", fecha);
    return numero + 2;
});

const CacheReact1 = () => {
    // Esta funcion solo se ejecuta 1 vez ya que son los mismos argumentos aqui y en CacheReact2, si cambiamos el argumento entonces veremos 2 console logs en la consola.
    const resultado = getCacheado(1);
    return <div>Cache1</div>;
};

export default CacheReact1;
