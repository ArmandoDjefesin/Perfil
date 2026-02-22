import { Fondo } from '../components/secciones/Fondo';
import { Header } from '../components/secciones/header';          
import { AcercaDeMi } from '../components/secciones/acercaDeMi'; 
import { Habilidades } from '../components/secciones/habilidades';   
import { Experiencia } from '../components/secciones/experiencia';   
import { Educacion } from '../components/secciones/educacion';      

export const Perfil = () => {
    return (
        <div>
            <Fondo />
            <div className="relative flex flex-col ">
                <Header />
                <AcercaDeMi />
                <Habilidades />
                <Experiencia />
                <Educacion />
            </div>
        </div>
    );
};