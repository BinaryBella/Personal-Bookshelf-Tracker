import Link from 'next/link';

export default function BooksPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/background.png')" }}
        >
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-2xl text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Your Book Collection
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Explore your favorite books and keep track of your reading progress.
                </p>
                <Link href="/books">
                    <div className="bg-[#0f3b60] text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-[#071b2c] transition-colors duration-300 ease-in-out shadow-md">
                        Books Collection
                    </div>
                </Link>
            </div>
        </div>
    );
}
