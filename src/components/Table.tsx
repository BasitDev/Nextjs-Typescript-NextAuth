'use client'
import { FC } from 'react';
import { TableProps } from '@/interfaces/table';



const Table: FC<TableProps> = ({ contacts }) => {
    return (
        <table className="min-w-full bg-white shadow-md rounded-lg" >
            <thead>
                <tr >
                    <th className="py-2 px-4 border">Title</th>
                    <th className="py-2 px-4 border">Subject</th>
                    <th className="py-2 px-4 border">Email</th>
                    <th className="py-2 px-4 border">Message</th>
                </tr>
            </thead>
            <tbody>
                {/* Sample data row */}
                {contacts && contacts.map(data => (
                    <tr>
                        <td className="py-2 px-4 border-b">{data?.title}</td>
                        <td className="py-2 px-4 border-b">{data?.subject}</td>
                        <td className="py-2 px-4 border-b">{data?.email}</td>
                        <td className="py-2 px-4 border-b">{data?.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;