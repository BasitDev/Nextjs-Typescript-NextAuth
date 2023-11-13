'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Modal from '@/components/Modal';
import Table from '@/components/Table';
import API from '@/utils/axios';
import { tableData } from '@/helpers/constants';
import { FormDataProps } from '@/interfaces/form';

export default function page() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [contacts, setContacts] = useState([...tableData])
    const [formData, setFormData] = useState<FormDataProps>({
        title: '',
        subject: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await API.post('/v1/contact', formData);
            const newContact = response?.data?.contacts;
            setFormData({
                title: '',
                subject: '',
                email: '',
                message: ''
            });
            setContacts(prevContacts => [...prevContacts, newContact]);
            setModalOpen(false);
        } catch (error) {
            console.error('Axios request failed:', error);
        }
    };
    return (
        <div className="container mx-auto p-8">
            <button
                className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => setModalOpen(true)}
            >
                Add Data
            </button>
            <Table contacts={contacts} />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleSubmit}
                onChange={handleInputChange}
                formData={formData}
            />
        </div>
    );

}
