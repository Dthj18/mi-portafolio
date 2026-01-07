import React from 'react'

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend & Datos",
            skills: ["Java", "Spring Boot", "Hibernate", "API RESTful", "PostgreSQL", "SQL", "Docker"],
            color: "border-blue-500"
        },
        {
            title: "Frontend & Móvil",
            skills: ["React Native", "JavaScript (ES6+)", "React JS", "Tailwind CSS", "HTML5/CSS3"],
            color: "border-purple-500"
        },
        {
            title: "Herramientas & Otros",
            skills: ["Git / GitHub", "Postman", "Scrum / Agile", "VS Code", "Linux Basics"],
            color: "border-emerald-500"
        },
        {
            title: "Habilidades Blandas",
            skills: ["Resolución de Problemas", "Trabajo en Equipo", "Comunicación Técnica", "Inglés (B1)"],
            color: "border-yellow-500"
        }
    ]

    return (
        <div id="habilidades" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Arsenal Técnico
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Las herramientas y tecnologías que utilizo para dar vida a las soluciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 ${category.color} shadow-lg`}
                        >
                            <h3 className="text-xl font-bold mb-6 text-white">
                                {category.title}
                            </h3>

                            <ul className="space-y-3">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Skills