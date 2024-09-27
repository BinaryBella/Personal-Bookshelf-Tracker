import './globals.css'
import type { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Personal Bookshelf Tracker',
  description: 'Track your reading journey',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <header className="bg-[#0f3b60] h-40 text-white p-4">
          <nav className="container mx-auto flex flex-col items-center justify-center h-full">
              <a href="/" className="text-4xl font-bold">Bookshelf Tracker</a>
              <ul className="flex space-x-4 mt-6">
                  <li><a href="/">Home</a></li>
                  <li><a href="/books">My Books</a></li>
                  <li><Link href="/books/add">Add Book</Link></li>
              </ul>
          </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
          {children}
      </main>
      </body>
      </html>
  )
}
