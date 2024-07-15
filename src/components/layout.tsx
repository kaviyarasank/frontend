import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./header";
import Sidebar from "./sidebar";
import { getAccessToken } from "@/utils";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    const users = getAccessToken();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div>
            <Head>
                <title> FrontEnd Dashboard</title>
            </Head>
            {
                isClient &&
                <>
                    {
                        users ?
                            <>
                                <Header />
                                <Sidebar />
                                <main className={users ? "user_logged_in" : ""}>{children}</main>
                            </> :
                            <main>{children}</main>
                    }
                </>
            }

        </div>
    );
};

export default Layout;
