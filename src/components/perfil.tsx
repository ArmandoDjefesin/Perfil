import fondo from '/src/assets/Images/Retro.png'
import perfil from '/src/assets/Images/Perfil.jpeg'

export const Perfil = () => {
    return (
        <div>
            <div className="absolute w-full" >
                <img src={fondo} className="w-full h-auto" />
            </div>

            <div className="relative flex flex-col ">//
                
                <section className="py-5 flex items-center justify-center">
                    <div className="flex items-center gap-16 backdrop-blur-xs px-60 py-10">
                        <img src={perfil} className="w-65 h-65 rounded-full object-cover "/>
                    <div>
                        <h1 className="text-blue-300 text-7xl font-bold leading-tight">
                            Armando Diaz Calderon
                        </h1>
                        <h2 className="text-white text-3xl font-semibold mt-6">
                            ESTUDIANTE EN INGENIERIA EN SISTEMAS COMPUTACIONALES
                        </h2>
                    </div>
                    </div>
                </section>
                
                <section className="py-5 flex items-center justify-center">
                    <div className="tems-center gap-16 backdrop-blur-xs px-60 py-10 ">
                        <h2 className="text-5xl font-semibold text-blue-300 mb-12 text-center">
                            Acerca de mi 
                        </h2>
                        <p className="text-2xl text-gray-300 text-justify">
                            Actualmente soy estudiante de la carrera de ingenieriia en Sitemas computacionales
                            en el Instituto Tecnologico de Morelia, cursando el 7ª semestre de la carrera.
                            Actualmente cuento con certificaciones en Cisco CCNA en redes y tambien cuento 
                            con titulo tecnico en programcacion de nivel medio superior. Desarrollador Backend 
                            con experiencia (media- basica)en el diseño de bases de datos, desarrollo de APIs y 
                            creación de aplicaciones móviles para sectores como consultoría. He participado en 
                            proyectos completos desde la planeación hasta la implementación,coordinando equipos
                            con metodologías ágiles. Me gusta proponer ideas para la optimización de procesos,
                            integración de servicios externos y mejora del flujo de información entre sistemas. 
                            </p>
                    </div>
                </section>

                
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

                <section className="py-5 flex items-center justify-center">
                    <div className="tems-center gap-16 backdrop-blur-xs px-60 py-10 ">
                        <h1 className="text-5xl font-semibold text-blue-300 mb-12 text-center">
                            Experiencia laboral y proyectos
                        </h1>
                            <h3 className="text-3xl font-semibold text-blue-300 mb-12 text-center">Centro de Información de la Salud (CIS) | Desarrollador & Scrum Master 2025</h3>
                            <ul className="text-gray-300 text-2xl list-disc">
                                <li>Coordiné el desarrollo de una aplicación para ambulancias utilizando React y Node.js, mejorando la comunicación en tiempo real.</li>
                                <li>Ayude en el rediseño y optimizacion de la arquitectura de la base de datos en PostgreSQL, garantizando la integridad de los datos clínicos.</li>
                            </ul>
                            <p className="text-2xl text-gray-300 text-justify">LOGRO CLAVE</p>
                            <p className="text-2xl text-gray-300 text-justify">Se integro exitosamente Mapbox para geolocalización y Jitsi para videollamadas, reduciendo los tiempos de respuesta
                            y permitiendo la transmisión instantánea de datos clínicos para una canalización más eficiente de pacientes.</p>
                            <br></br>
                    
                            <h3 className="text-3xl font-semibold text-blue-300 mb-12 text-center py-10">Caballo de Hierro Consulting | Desarrollador & Scrum Master 2025 </h3>
                            <ul className="text-gray-300 text-2xl list-disc">
                                <li>Lideré el desarrollo de una aplicación de encuestas empresariales actuando como Scrum Master, gestionando el backlog y asegurando la entrega a tiempo.</li>
                                <li>Diseñé la base de datos relacional en MariaDB y desarrollé módulos clave para la interfaz en Flutter/Android.</li>
                            </ul>
                            <p className="text-2xl text-gray-300 text-justify">LOGRO CLAVE</p>
                            <p className="text-2xl text-gray-300 text-justify">Se implemento una solución que automatizó un proceso manual de 2 horas, optimizando la captura y el análisis de datos, 
                                y reduciendo drásticamente los errores de escritura.</p>
                            <br></br>

                            <h3 className="text-3xl font-semibold text-blue-300 mb-12 text-center py-10"> SIGESBI - Sistema de Gestión Bibliotecaria | Finalista nacional </h3>
                            <span className="text-2xl text-gray-300">Preparatoria CETIS120 | 2021</span>
                            <ul className="text-gray-300 text-2xl list-disc">
                                <li>Desarrollé de forma integral un sistema de gestión bibliotecaria desde el análisis de requisitos hasta la implementación, para resolver las necesidades de la biblioteca de mi escuela.</li>
                                <li>Diseñé la arquitectura del software y la base de datos, y programé la solución, la cual fue puesta en producción y utilizada por usuarios reales.</li>
                            </ul>
                            <p className="text-2xl text-gray-300 text-justify">LOGRO CLAVE</p>
                            <p className="text-2xl text-gray-300 text-justify"> Proyecto galardonado a nivel estatal y seleccionado para representar a la región en la etapa nacional del Concurso de Prototipos y Proyectos de 
                                Emprendimiento de la DGETI, compitiendo contra los mejores desarrollos de estudiantes a nivel país.</p>
                            <br></br>
                    </div>
                </section>

                <section className="py-5 flex items-center justify-center">
                    <div className="backdrop-blur-xs px-60 py-10">
                        <h2 className="text-5xl font-semibold text-blue-300 mb-12 text-center">
                            Educación
                        </h2>
                        <h3 className="text-2xl font-semibold text-white">Ingeniería en Sistemas Computacionales</h3>
                        <p className="text-2xl text-blue-300">Instituto Tecnológico de Morelia | 2021 - Presente</p>
                        <p className="text-gray-300 text-xl">7° semestre</p>
                            
                        <h3 className="text-2xl font-semibold text-white">Técnico en Programación</h3>
                        <p className="text-2xl text-blue-300">CETIS 120 | 2018 - 2021</p>
                        <p className="text-gray-300 text-xl">Título de nivel medio superior</p>
                            
                        <h3 className="text-2xl font-semibold text-white">Certificaciones</h3>
                        <p className="text-gray-300 text-xl">Cisco CCNA (Redes)</p>
                    </div>
                    <div className="backdrop-blur-xs px-60 py-32">
                        <h2 className="text-5xl font-semibold text-blue-300 mb-12 text-center">
                            Contacto
                        </h2>
                        <span className='text-3xl text-gray-300' >Correo: </span>
                        <span className='text-3xl text-gray-300'>armandodiaz297@gmail.com</span>
                            <br></br>
                        <span className='text-3xl text-gray-300'>GitHub</span>
                        <span className='text-3xl text-gray-300'>github.com/ArmandoDjefesin</span>
                            
                        
                    </div>
                </section>
            </div>
        </div>
    )
}