'use client'
import React, { FC } from 'react';
import { ModalProps } from '@/interfaces/modal';

const Modal: FC<ModalProps> = ({ isOpen, onClose, onSubmit, onChange, formData }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
            <div className="bg-white p-8 rounded-lg shadow-md w-96 z-10">
                <h2 className="text-2xl mb-4">Add Data</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter Title Here"

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter Subject Here"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter Email Here"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter message Here"
                            rows={4}
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="button" className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500" onClick={onClose}>
                            Close
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Modal;