import React, { useEffect, useMemo } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";
import config from "@/config";
import Loader from '@/components/Loader';

const GuestGuard = ({ children }: any) => {
    const { data: session, status } = useSession();
    const pathname = usePathname();

    const isLoggedIn = useMemo(() => {
        return !!session;
    }, [session]);

    // If the user is logged in, redirect them to the default path
    useEffect(() => {
        if (status !== 'loading' && session) {
            redirect(config.defaultPath);
        }
    }, [session, status, pathname]);

    if (status === 'loading') {
        return <Loader loading />
    }

    return isLoggedIn ? null : children;
};

export default GuestGuard;
