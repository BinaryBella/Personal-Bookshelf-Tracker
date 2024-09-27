'use client'

import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import { BookOpenIcon, ClockIcon, CheckIcon } from '@heroicons/react/24/outline'

type Book = {
    id: number
    title: string
    author: string
    status: 'read' | 'reading' | 'to-read'
}

export default function BookList() {
    const [books, setBooks] = useState<Book[]>([])
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
    const [filter, setFilter] = useState<'all' | 'read' | 'reading' | 'to-read'>('all')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API fetch with a delay
        setTimeout(() => {
            const sampleBooks: Book[] = [
                { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'read' },
                { id: 2, title: 'Hello Tinki', author: 'George Orwell', status: 'to-read' },
                { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'reading' },
                { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', status: 'read' },
                { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', status: 'to-read' },
                { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', status: 'reading' },
            ]
            setBooks(sampleBooks)
            setFilteredBooks(sampleBooks)
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        if (filter === 'all') {
            setFilteredBooks(books)
        } else {
            setFilteredBooks(books.filter(book => book.status === filter))
        }
    }, [filter, books])

    const FilterButton = ({ status, icon }: { status: typeof filter, icon: React.ReactNode }) => (
        <button
            onClick={() => setFilter(status)}
            className={`flex items-center px-4 py-2 rounded-full ${filter === status ? 'bg-[#0f3b60] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
            {icon}
            <span className="ml-2 capitalize">{status === 'all' ? 'All' : status.replace('-', ' ')}</span>
        </button>
    )

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="py-6">
            <div className="flex justify-center space-x-4 mb-8">
                <FilterButton status="all" icon={<BookOpenIcon className="h-5 w-5" />} />
                <FilterButton status="reading" icon={<BookOpenIcon className="h-5 w-5" />} />
                <FilterButton status="to-read" icon={<ClockIcon className="h-5 w-5" />} />
                <FilterButton status="read" icon={<CheckIcon className="h-5 w-5" />} />
            </div>
            {filteredBooks.length === 0 ? (
                <p className="text-center text-gray-600 text-xl">No books found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    )
}
