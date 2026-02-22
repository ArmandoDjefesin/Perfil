import perfil from '/src/assets/Images/Perfil.jpeg'

export const Header = () => {
    return (
        <section className="py-5 flex items-center justify-center">
            <div className="flex items-center gap-16 backdrop-blur-xs px-60 py-10">
                <img src={perfil} className="w-65 h-65 rounded-full object-cover " />
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
    );
};