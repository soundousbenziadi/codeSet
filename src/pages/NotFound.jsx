function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full py-10">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
            <a href="/" className="px-6 py-3 bg-accentc text-white rounded transition">Go to Home</a>
        </div>
    )
}
export default NotFound