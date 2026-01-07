import React, { useState } from 'react'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: "App Móvil & Backend de Imprenta",
            description: "Sistema integral con App Móvil Gerencial para visualización de finanzas y estadísticas en tiempo real. El Backend gestiona la lógica operativa, fue realizado con una arquitectura de microservicios, fue dockerizado y se encuentra desplegado en un servidor productivo para asegurar su disponibilidad.", tech: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "React Native", "Docker"],
            color: "from-blue-900 to-slate-900",
            logo: "../proyectos/logo.png",
            images: [
                "../proyectos/Login.PNG",
                "../proyectos/Cotizaciones.PNG",
                "../proyectos/Ordenes.PNG",
                "../proyectos/Resumen.PNG",
                "../proyectos/Perfil.PNG",
            ]
        },
        {
            id: 2,
            title: "Sistema de Inventarios (En Construcción)",
            description: "Actualmente estoy desarrollando una solución para gestión de almacenes utilizando microservicios. Este proyecto demostrará el uso de Docker y despliegue en la nube.",
            tech: ["Java", "Spring Cloud", "Docker", "MySQL"],
            color: "from-gray-700 to-slate-900",
            logo: null,
            images: [],
            inProgress: true
        }
    ]

    return (
        <div id="proyectos" className="py-20 bg-slate-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Mis Proyectos
                    </h2>
                    <div className="w-100 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-700 relative">

                            {project.inProgress && (
                                <div className="absolute top-4 right-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
                                    EN PROCESO
                                </div>
                            )}

                            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-6 relative`}>
                                {project.logo ? (
                                    <img
                                        src={project.logo}
                                        alt={`Logo ${project.title}`}
                                        className="h-32 w-auto object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <span className="text-5xl">{project.inProgress ? '⚙️' : '💻'}</span>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed text-justify">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-slate-800 text-blue-400 text-xs rounded-full border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => !project.inProgress && setSelectedProject(project)}
                                        disabled={project.inProgress}
                                        className={`flex-1 px-4 py-2 text-white text-center rounded-lg font-medium transition-colors border border-slate-600 text-sm 
                                            ${project.inProgress
                                                ? 'bg-slate-700 text-gray-500 cursor-not-allowed opacity-50'
                                                : 'bg-slate-800 hover:bg-slate-700 cursor-pointer'
                                            }`}
                                    >
                                        {project.inProgress ? 'Próximamente...' : 'Ver Galería'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm transition-opacity">
                    <div className="bg-slate-800 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-700 overflow-hidden relative max-h-[90vh] flex flex-col">

                        <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-900">
                            <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-400 hover:text-white hover:bg-slate-700 p-2 rounded-full transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto">
                            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedProject.images && selectedProject.images.length > 0 ? (
                                    selectedProject.images.map((img, index) => (
                                        <div key={index} className="rounded-lg overflow-hidden border border-slate-600 group">
                                            <img
                                                src={img}
                                                alt={`Captura ${index + 1}`}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-center col-span-2">No hay capturas disponibles para este proyecto.</p>
                                )}
                            </div>
                        </div>

                        <div className="p-4 border-t border-slate-700 bg-slate-900 text-right">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                            >
                                Cerrar
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects