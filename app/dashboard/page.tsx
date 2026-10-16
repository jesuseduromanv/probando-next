import React from "react";
import Hijo from "@/components/Hijo";
import Link from "next/link";

const DashboardPage = async () => {
    return (
        <>
            <p>Dashboard</p>
            <Hijo />
            <Link href={"/settings"} prefetch={true}>
                Settings
            </Link>
        </>
    );
};

export default DashboardPage;
