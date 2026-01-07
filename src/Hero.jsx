import React from 'react'

const Hero = () => {
    return (
        <div id="inicio" className="min-h-screen flex items-center justify-center bg-slate-900 px-4 pt-20">

            <div className="max-w-4xl text-center">
                
                <div className="mb-8 relative inline-block">
                    <img 
                        src="/diego.jpg"  
                        alt="Diego Tristán" 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-slate-800 shadow-xl shadow-blue-500/20"
                    />
                    <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-slate-900 rounded-full"></span>
                </div>

                <div className="mb-6">
                    <span className="py-2.5 px-4 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-semibold shadow-lg shadow-blue-500/10">
                        Disponible para trabajar 🚀
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Hola, soy<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Diego Tristán</span>
                </h1>

                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                    Ingeniero y Desarrollador de Software apasionado por transformar problemas complejos en soluciones eficientes.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a
                        href="#proyectos"
                        className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25 text-center"
                    >
                        Ver Proyectos
                    </a>

                    <a
                        href="/cv-diego.pdf"
                        download="CV_Diego_Tristan.pdf"
                        className="w-full md:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-semibold transition-all text-center"
                    >
                        Descargar CV
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800">
                    <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Tech Stack</p>

                    <div className="flex gap-8 justify-center items-center">
                        {/* Java */}
                        <div className="group relative flex justify-center">
                            <svg className="w-10 h-10 fill-current text-slate-500 group-hover:text-red-500 transition-colors duration-300" viewBox="0 0 24 24">
                                <path d="M12,22c4.97,0,9-4.03,9-9c0-4.97-4.03-9-9-9c-4.97,0-9,4.03-9,9C3,17.97,7.03,22,12,22z M12,6 c3.31,0,6,2.69,6,6c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6C6,8.69,8.69,6,12,6z" />
                                <path d="M10.5 9h3v6h-3z" />
                            </svg>
                            <span className="absolute -bottom-6 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Java</span>
                        </div>

                        {/* Spring */}
                        <div className="group relative flex justify-center">
                            <svg className="w-10 h-10 fill-current text-slate-500 group-hover:text-green-500 transition-colors duration-300" viewBox="0 0 24 24">
                                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17,14h-3v3c0,1.1-0.9,2-2,2h0 c-1.1,0-2-0.9-2-2v-3H7c-1.1,0-2-0.9-2-2h0c0-1.1,0.9-2,2-2h3V7c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v3h3c1.1,0,2,0.9,2,2h0 C19,13.1,18.1,14,17,14z" />
                            </svg>
                            <span className="absolute -bottom-6 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Spring</span>
                        </div>

                        {/* React */}
                        <div className="group relative flex justify-center">
                            <svg className="w-10 h-10 fill-current text-slate-500 group-hover:text-blue-400 transition-colors duration-300" viewBox="-11.5 -10.23174 23 20.46348">
                                <circle cx="0" cy="0" r="2.05" opacity="1" />
                                <g stroke="currentColor" strokeWidth="1" fill="none">
                                    <ellipse rx="11" ry="4.2" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                </g>
                            </svg>
                            <span className="absolute -bottom-6 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">React</span>
                        </div>

                        {/* SQL */}
                        <div className="group relative flex justify-center">
                            <svg className="w-10 h-10 fill-current text-slate-500 group-hover:text-blue-600 transition-colors duration-300" viewBox="0 0 24 24">
                                <path d="M12,2C6.48,2,2,3.34,2,5v14c0,1.66,4.48,3,10,3s10-1.34,10-3V5C22,3.34,17.52,2,12,2z M12,19c-4.41,0-8-1.12-8-2.5V15 c0,1.38,3.59,2.5,8,2.5s8-1.12,8-2.5v1.5C20,17.88,16.41,19,12,19z M12,14c-4.41,0-8-1.12-8-2.5V10c0,1.38,3.59,2.5,8,2.5 s8-1.12,8-2.5v1.5C20,12.88,16.41,14,12,14z M12,7c-4.41,0-8-1.12-8-2.5S7.59,2,12,2s8,1.12,8,2.5S16.41,7,12,7z" />
                            </svg>
                            <span className="absolute -bottom-6 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">SQL</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero