import React from "react";

interface MemoHijoProps {
    propIntacta: number;
}
const MemoHijo = ({ propIntacta }: MemoHijoProps) => {
    console.log("se renderizo");
    return <div>Prop Intacta: {propIntacta}</div>;
};

export default MemoHijo;
