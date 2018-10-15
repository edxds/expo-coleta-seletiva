/*
Luan Rael
1: aterro

2: nada

João Pedro
1-Aterro

2-Nada

Lucas
1-para um lixão

2- algo descartável

Vinícius

1- para um centro de reciclagem

2- algo que perdeu sua utilidade para o que foi feito 

Vaz

1- centro de reciclagem

2- Nada
*/

import NailaImg from './pictures/naila01.jpg';
import LucianoImg from './pictures/luciano07.JPG';
import AytelImg from './pictures/aytel03.jpg';
import VazImg from './pictures/vaz01.jpg';
import ClansImg from './pictures/clans04.jpg';
import BrunoImg from './pictures/bruno01.jpg';
import LeticiaImg from './pictures/leticia02.jpg';
import IlanezImg from './pictures/ilanez01.jpg';
import PascoalImg from './pictures/pascoal01.jpg';
import HeitorImg from './pictures/heitor04.jpg';
import AirtonImg from './pictures/airton01.jpg';
import LuanImg from './pictures/luan04.jpg';
import JoaoImg from './pictures/joao01.jpg';
import LucasImg from './pictures/lucas01.jpg';
import ViniciusImg from './pictures/vinicius01.jpg';

const subjectsData = [
  {
    name: 'Naila',
    group: '2AEST',
    image: NailaImg,
    content: {
      where: 'Para um lixão ou para o mar',
      meaning:
        'Significa uma reflexão sobre como essa embalagem poderia ter sido produzida de uma forma mais sustentável',
    },
  },
  {
    name: 'Luciano',
    group: '2AINFO',
    image: LucianoImg,
    content: {
      where: 'É levado para um lixão, e depois é separado por categorias',
      meaning: `Significa renovação, pois um papel que a princípio não significa nada, depois do processo de reciclagem se torna algo útil, e ainda diminui um pouco o impacto desse resíduo
        \nComo já dizia Lavoisier: "Nada se cria, nada se perde, tudo se transforma"`,
    },
  },
  {
    name: 'Aytel',
    group: 'Professor',
    image: AytelImg,
    content: {
      where: 'Para um local onde é feita a reciclagem',
      meaning: 'Se reciclado, significa um mundo com menos poluição',
    },
  },
  {
    name: 'Vaz',
    group: '2AINFO',
    image: VazImg,
    imageOptions: { backgroundPosition: '0% 15%' },
    content: {
      where: 'Para um centro de reciclagem',
      meaning:
        'Dando um show de originalidade, Vaz respondeu que não significa nada.',
    },
  },
  {
    name: 'Clans',
    group: '1AMEC',
    image: ClansImg,
    content: {
      where: 'Para um depósito de lixo',
      meaning: 'Este material não significa nada para mim',
    },
  },
  {
    name: 'Bruno',
    group: '2AELT',
    image: BrunoImg,
    content: {
      where: 'Irá para um local de reciclagem',
      meaning: 'Nunca parei para pensar nisso',
    },
  },
  {
    name: 'Leticia',
    group: '3AEL',
    image: LeticiaImg,
    content: {
      where: 'Vai para um lixão',
      meaning:
        'Significa algo que eu aproveitei porem degradará o meio ambiente',
    },
  },
  {
    name: 'Ilanez',
    group: '2AMEC',
    image: IlanezImg,
    content: {
      where: 'Provavelmente vai para a reciclagem',
      meaning: 'Nada',
    },
  },
  {
    name: 'Pascoal',
    group: '1BMEC',
    image: PascoalImg,
    content: {
      where: 'Para um depósito de separação',
      meaning: 'Nada',
    },
  },
  {
    name: 'Heitor',
    group: '1BMEC',
    image: HeitorImg,
    content: {
      where: 'Para um aterro',
      meaning: 'Nada',
    },
  },
  {
    name: 'Airton',
    group: '3AINFO',
    image: AirtonImg,
    content: {
      where: 'Para a coleta seletiva',
      meaning: 'Nada',
    },
  },
  {
    name: 'Luan',
    group: '2AINFO',
    image: LuanImg,
    content: {
      where: 'Para um aterro',
      meaning: 'Nada',
    },
  },
  {
    name: 'João Pedro',
    group: '2AINFO',
    image: JoaoImg,
    imageOptions: { backgroundPosition: '0% 20%' },
    content: {
      where: 'Para um aterro',
      meaning: 'Nada',
    },
  },
  {
    name: 'Lucas',
    group: '2AINFO',
    image: LucasImg,
    imageOptions: { backgroundPosition: '0% 20%' },
    content: {
      where: 'Para um lixão',
      meaning: 'Significa algo descartável',
    },
  },
  {
    name: 'Vinicius',
    group: '2AINFO',
    image: ViniciusImg,
    content: {
      where: 'Para um centro de reciclagem',
      meaning: 'Algo que perdeu a sua utilidade original',
    },
  },
];

export default subjectsData;
