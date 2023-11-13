import React, { useMemo } from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
    const { data: session, status } = useSession();

    const isLoggedIn = useMemo(() => {
        return !!session;
    }, [session]);

    const logout = () => {
        signOut({
            callbackUrl: '/auth/login'
        });
    }

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-3xl font-bold text-white">Next.js Assessment</span>

                <div className="flex items-center">
                    <div className='mr-20'>
                        {isLoggedIn ? (
                            <>
                                <Link href="/" className="mr-4 hover:underline">
                                    Home
                                </Link>
                            </>
                        ) : (
                            <Link href="/auth/login" className="mr-4 hover:underline">
                                Login
                            </Link>
                        )}
                        <Link href="/about" className="mr-4 hover:underline">
                            About
                        </Link>
                    </div>

                    {isLoggedIn &&
                        <>
                            <span className="mr-4">
                                Hello, {session?.user?.name}
                            </span>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={logout}>
                                Sign Out
                            </button>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
}
