import Link from 'next/link'
import { BookOpenIcon, ClockIcon, CheckIcon } from '@heroicons/react/24/outline'

type Book = {
    id: number
    title: string
    author: string
    status: 'read' | 'reading' | 'to-read'
}

export default function BookCard({ book }: { book: Book }) {
    const statusIcons = {
        'read': <CheckIcon className="h-5 w-5 text-green-500" />,
        'reading': <BookOpenIcon className="h-5 w-5 text-blue-500" />,
        'to-read': <ClockIcon className="h-5 w-5 text-yellow-500" />
    }

    const statusColors = {
        'read': 'bg-green-100 text-green-800',
        'reading': 'bg-blue-100 text-blue-800',
        'to-read': 'bg-yellow-100 text-yellow-800'
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-gray-600 mb-4 italic">{book.author}</p>
                <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[book.status]}`}>
                        {statusIcons[book.status]}
                        <span className="ml-1 capitalize">{book.status.replace('-', ' ')}</span>
                    </span>
                    <Link
                        href={`/books/${book.id}`}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0f3b60] rounded-lg hover:bg-[#071b2c] focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        View Details
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
