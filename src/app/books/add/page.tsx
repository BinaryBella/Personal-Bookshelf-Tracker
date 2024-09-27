'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BookData {
    title: string;
    author: string;
    status: 'To Read' | 'Reading' | 'Completed';
}

export default function AddBook() {
    const [bookData, setBookData] = useState<BookData>({
        title: '',
        author: '',
        status: 'To Read',
    });
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!bookData.title || !bookData.author) {
            setError('Please fill in all fields');
            return;
        }

        console.log('Book added:', bookData);
        const books = JSON.parse(localStorage.getItem('books') || '[]');
        books.push(bookData);
        localStorage.setItem('books', JSON.stringify(books));

        router.push('/books');
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{backgroundImage: "url('/images/library-background.jpg')"}}>
            <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 p-10 rounded-xl shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Add a New Book
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="title" className="sr-only">Book Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Book Title"
                                value={bookData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="author" className="sr-only">Author</label>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Author"
                                value={bookData.author}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="status" className="sr-only">Reading Status</label>
                            <select
                                id="status"
                                name="status"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={bookData.status}
                                onChange={handleInputChange}
                            >
                                <option value="To Read">To Read</option>
                                <option value="Reading">Reading</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0f3b60] hover:bg-[#071b2c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
