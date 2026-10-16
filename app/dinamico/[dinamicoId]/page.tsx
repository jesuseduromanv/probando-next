import React from "react";

const DinamicoIdPage = async ({
    params,
}: {
    params: Promise<{ dinamicoId: string }>;
}) => {
    const { dinamicoId } = await params;
    return <div>DinamicoIdPage</div>;
};

export default DinamicoIdPage;
