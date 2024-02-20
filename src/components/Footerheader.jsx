import React from 'react'

function Footerheader() {
    return (
        <>
        <footer className="bg-zinc-800 text-gray-300 py-2 px-16">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">© 2024, Gizmore.</div>
                <div className="flex space-x-4">
                    <a href="#" className="text-sm hover:text-white">Search</a>
                    <a href="#" className="text-sm hover:text-white">Terms of Service</a>
                    <a href="#" className="text-sm hover:text-white">Refund policy</a>
                    <a href="#" className="text-sm hover:text-white">Track Order</a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footerheader