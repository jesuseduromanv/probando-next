import Link from "next/link";
import React from "react";

const SettingsPage = () => {
    return (
        <>
            <div>SettingsPage</div>
            <Link href={"/dashboard"}>Dashboard</Link>
        </>
    );
};

export default SettingsPage;
