import React, { useEffect, useMemo, useState } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";
import axios from "@/utils/axios";
import Loader from '@/components/Loader';

const AuthGuard = ({ children }: any) => {
    const pathname = usePathname();
    const { data: session, status } = useSession();
    const [isHeaderSet, setIsHeaderSet] = useState(false);

    const isLoggedIn = useMemo(() => {
        return !!session;
    }, [session]);

    useEffect(() => {
        if (status !== 'loading' && !session) {
            // Session data has loaded and the user is not authenticated.
            redirect('/auth/login');
        }
    }, [pathname, session, status]);

    useEffect(() => {
        if (session?.user) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${session?.user?.access_token}`;
            setIsHeaderSet(true);
        }
    }, [session?.user]);

    // Ensure that if the status is 'loading' or headers are not set, show the loader.
    if (status === 'loading' || !isHeaderSet) {
        return <div className={'h-[100vh] w-[100vw] flex items-center justify-center'}>
            <Loader loading />
        </div>
    }

    return isLoggedIn ? children : null;
};

export default AuthGuard;
