import React from "react";
async function getData() {
    // si le quitas el use cache ya dejaras de ver en la pantalla el "Cache" con fondo gris (consola del servidor de front), se necesita un mensaje con console log para ver que si aplica
    "use cache";
    console.log("hola");
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    return { ...data, generatedAt: new Date().toISOString() };
}
const CacheEjemploPage = async () => {
    const data = await getData();

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default CacheEjemploPage;
