import React from "react";
export async function generateStaticParams() {
    return [
        {
            paramsDinamicosId: "1",
        },
        {
            paramsDinamicosId: "2",
        },
        {
            paramsDinamicosId: "3",
        },
        {
            paramsDinamicosId: "4",
        },
    ];
}
const ParamsDinamicosIdPage = async ({
    params,
}: {
    params: Promise<{ paramsDinamicosId: string }>;
}) => {
    const { paramsDinamicosId } = await params;

    return (
        <div>
            Params Dinamico: {paramsDinamicosId} renderizado a las{" "}
            {new Date().toLocaleTimeString()}
        </div>
    );
};

export default ParamsDinamicosIdPage;
