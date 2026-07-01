export interface Project {
    id: string;
    title: string;
    link: string;
    imgDesktop: string;
    imgMobile: string;
    esGrupal: boolean;
    category: 'real' | 'practice';
}

export const projects: Project[] = [
    {
        id: 'aapreCongreso2026',
        title: 'Congreso Aapresid 2026',
        link: 'https://congreso.aapresid.org.ar/es',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-aapreCongreso2026.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-aapreCongreso2026Mobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'provinciaMicro',
        title: 'Provincia Microcréditos',
        link: 'https://www.provinciamicrocreditos.com.ar/',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-provinciaMicro.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-provinciaMicroMobile.webp',
        esGrupal: false,
        category: 'real'
    },
    {
        id: 'diapason',
        title: 'Diapasón',
        link: 'https://diapasón.com/',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-diapason.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-diapasonMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'aapreCongreso',
        title: 'Congreso Aapresid 2025',
        link: 'https://congreso-2025.aapresid.org.ar/es',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-aapreCongreso.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-aapreCongresoMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'aapresid',
        title: 'Aapresid - asociate',
        link: 'https://www.aapresid.org.ar/es/asociate',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-aapre.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-aapreMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'repower',
        title: 'RepowerLab',
        link: 'https://repowerlab.com/',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-repower.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-repowerMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'wakarimasuka',
        title: 'Wakarimasuka?',
        link: 'https://wakarimasuka.vercel.app/',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-wakarimasuka.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-wakarimasukaMobile.webp',
        esGrupal: false,
        category: 'practice'
    },
    {
        id: 'sizeMatch',
        title: 'Size Match',
        link: 'https://sizematch.vercel.app/',
        imgDesktop: '/src/assets/imagenes/proyectos/pr-sizeMatch.webp',
        imgMobile: '/src/assets/imagenes/proyectos/pr-sizeMatchMobile.webp',
        esGrupal: false,
        category: 'practice'
    }
];
