import fondo from '/src/assets/Images/Retro.png'

export const Fondo = () => {
    return (
        <div className="absolute w-full">
            <img src={fondo} className="w-full h-auto" />
        </div>
    );
};