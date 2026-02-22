export const Habilidades = () => {
    return (
        <section className="py-5 flex items-center justify-center">
            <div className=" items-center gap-16 backdrop-blur-xs px-60 py-10 ">
                <h2 className="text-5xl font-semibold text-blue-300 mb-12 text-center">
                    Habilidades
                </h2>
                <ul className="text-gray-300 text-2xl list-disc">
                    <li>Liderazgo y coordinación de equipos</li>
                    <li>Comunicación efectiva</li>
                    <li>Adaptación rápida a cambios</li>
                    <li>Proactividad y solución de problemas</li>
                    <li>Gestión de tareas y entregas puntuales</li>
                    <li>Capacidad de aprendizaje rápido</li>
                    <li>Respuesta efectiva bajo presión</li>
                </ul>
            </div>
            <div className=" items-center gap-16 backdrop-blur-xs px-5 py-10">
                <h2 className="text-5xl font-semibold text-blue-300 mb-12 text-center">
                    Habilidades Tecnicas
                </h2>
                <ul className="text-gray-300 text-2xl list-disc">
                    <li>Lenguajes: Java, Python, JavaScript, PHP</li>
                    <li>Bases de datos: MySQL, MariaDB. PostgreSQL (intermedio), MongoDB</li>
                    <li>Frameworks/stacks: Flask, NodeJS, React, Angular (Nivel basico funcional)</li>
                    <li>Desarrollo Movil: Android Studio, Flutter</li>
                    <li>APIs y servicios: Mapbox, Jitsi, JSON, REST</li>
                    <li>Control de versiones: Git/ GitHub</li>
                    <li>Metodologias Scrum</li>
                </ul>
            </div>
        </section>
    );
};