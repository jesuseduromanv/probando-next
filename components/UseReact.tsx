"use client";
import React, { use } from "react";
const getData = () =>
    new Promise<string>((resolve) => {
        setTimeout(async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1",
            );

            resolve(response.json());
        }, 3000);
    });

const dataPromise = getData();

const UseReact = () => {
    const responseUse = use(dataPromise);
    return <div>UseReact</div>;
};

export default UseReact;
