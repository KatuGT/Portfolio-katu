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
        id: 'diapason',
        title: 'Diapasón',
        link: 'https://diapasón.com/',
        imgDesktop: '/src/assets/imagenes/pr-diapason.webp',
        imgMobile: '/src/assets/imagenes/pr-diapasonMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'aapreCongreso',
        title: 'Congreso Aapresid 2025',
        link: 'https://congreso-2025.aapresid.org.ar/es',
        imgDesktop: '/src/assets/imagenes/pr-aapreCongreso.webp',
        imgMobile: '/src/assets/imagenes/pr-aapreCongresoMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'aapresid',
        title: 'Aapresid - asociate',
        link: 'https://www.aapresid.org.ar/es/asociate',
        imgDesktop: '/src/assets/imagenes/pr-aapre.webp',
        imgMobile: '/src/assets/imagenes/pr-aapreMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'repower',
        title: 'RepowerLab',
        link: 'https://repowerlab.com/',
        imgDesktop: '/src/assets/imagenes/pr-repower.webp',
        imgMobile: '/src/assets/imagenes/pr-repowerMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'chimpance',
        title: 'Chimpancé digital',
        link: 'https://www.chimpance.digital/agenciaweb',
        imgDesktop: '/src/assets/imagenes/pr-chimpa.webp',
        imgMobile: '/src/assets/imagenes/pr-chimpaMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'zonaInmo',
        title: 'Zona Inmo',
        link: 'https://www.zonainmo.com.py/',
        imgDesktop: '/src/assets/imagenes/pr-zonaInmo.webp',
        imgMobile: '/src/assets/imagenes/pr-zonaInmoMobile.webp',
        esGrupal: true,
        category: 'real'
    },
    {
        id: 'payFriend',
        title: 'PayFriend',
        link: '#',
        imgDesktop: '/src/assets/imagenes/PayfriendImg1.webp',
        imgMobile: '/src/assets/imagenes/PayfriendImg2.webp',
        esGrupal: true,
        category: 'practice'
    },
    {
        id: 'sizeMatch',
        title: 'Size Match',
        link: 'https://sizematch.vercel.app/',
        imgDesktop: '/src/assets/imagenes/pr-sizeMatch.webp',
        imgMobile: '/src/assets/imagenes/pr-sizeMatchMobile.webp',
        esGrupal: false,
        category: 'practice'
    }
];
