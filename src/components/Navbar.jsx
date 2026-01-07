import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-xl tracking-wider">
                            Diego<span className="text-blue-500">Dev</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#inicio" className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all">
                                Inicio
                            </a>
                            <a href="#proyectos" className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all">
                                Proyectos
                            </a>
                            <a href="#habilidades" className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all">
                                Habilidades
                            </a>
                            <a href="#contacto" className="text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-all">
                                Contacto
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar