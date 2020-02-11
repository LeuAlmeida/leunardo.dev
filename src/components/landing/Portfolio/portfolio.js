const aircnc = require('../../../assets/portfolio/aircnc.jpg');
const appoctober = require('../../../assets/portfolio/appoctober.jpg');
const btm = require('../../../assets/portfolio/btm-performance.jpg');
const coi = require('../../../assets/portfolio/coi.jpg');
const decathlon = require('../../../assets/portfolio/decathlon.jpg');
const emkt = require('../../../assets/portfolio/emkt.jpg');
const portalUmesp = require('../../../assets/portfolio/portal-umesp.jpg');
const totvs = require('../../../assets/portfolio/totvs.jpg');
const t3Driver = require('../../../assets/portfolio/t3-driver-horizontal.jpg');
const guigaPeixoto = require('../../../assets/portfolio/guiga-peixoto.jpg');

export const portfolio = [
  {
    boldName: 'BTM',
    name: 'Performance',
    behance: 'https://www.behance.net/gallery/78028243/Projeto-de-Website-BTM-Performance',
    url: 'https://btmperformance.com.br/',
    image: btm,
    category: ['all', 'frontend', 'ux-ui'],
  },
  {
    boldName: 'APP',
    name: 'October',
    behance: 'https://www.behance.net/gallery/87664595/React-Native-open-source-App-October',
    github: 'https://github.com/LeuAlmeida/app.october',
    image: appoctober,
    category: ['all', 'mobile', 'ux-ui'],
  },
  {
    boldName: 'T3',
    name: 'Driver',
    behance: 'https://www.behance.net/gallery/73684575/Criacao-de-Website-T3-Driver',
    url: 'https://t3driver.com.br/',
    image: t3Driver,
    category: ['all', 'frontend'],
  },
  {
    boldName: 'TOTVS',
    name: 'Project',
    github: 'https://github.com/LeuAlmeida/TOTVS-Front-End---Educa--o-Metodista',
    behance: 'https://www.behance.net/gallery/83707895/ERP-Project-Methodist-Education',
    image: totvs,
    category: ['all', 'frontend', 'ux-ui'],
  },
  {
    boldName: 'E-mail',
    name: 'Marketing',
    github: 'https://github.com/LeuAlmeida/E-mail-Marketing-Portfolio',
    behance: 'https://www.behance.net/gallery/70186937/Criacao-e-Envio-de-E-mail-Mkt-Educacao-Metodista',
    image: emkt,
    category: ['all', 'others'],
  },
  {
    boldName: 'Guiga',
    name: 'Peixoto',
    video: 'https://www.facebook.com/watch/?v=2831370423754902',
    behance: 'https://www.behance.net/gallery/81497053/Producao-Audiovisual-Dep-Federal-Guiga-Peixoto',
    image: guigaPeixoto,
    category: ['all', 'others'],
  },
];
