import debbie from '../../assets/images/DEBBIE BUSICARDS.png';
import fringe from '../../assets/images/FRINGE TSHIRTS.png';
import mask4 from '../../assets/images/Mask Group 4.png';
import mask6 from '../../assets/images/Mask Group 6.png';
import mask7 from '../../assets/images/Mask Group 7.png';
import mask8 from '../../assets/images/Mask Group 8.png';
import mask9 from '../../assets/images/Mask Group 9.png';
import btbgrain from '../../assets/images/btbgrain.png';
import zep from '../../assets/images/zep.jpg';

export const showcaseWorks = [
  {
    slug: 'adelaide-fringe',
    name: 'The Fire of Adelaide',
    description: 'The Adelaide Fringe 2021',
    brief: 'Top 40 bitches',
    img: fringe,
  },
  {
    slug: 'debbie-seater',
    name: 'Debbie Seater',
    description: 'Branding',
    brief: 'bear boi',
    img: debbie,
  },
];
export const gridWorks = [
  {
    slug: 'telephone',
    name: 'RING RING',
    description: 'Hello?',
    brief: '',
    img: mask6,
  },
  {
    slug: 'dog',
    name: 'GOOD BOY',
    description: '*pant pant*',
    brief: '',
    img: mask9,
  },
  {
    slug: 'bite-the-bullet',
    name: 'BITE THE BULLET',
    description: 'Bite it!',
    brief: '',
    img: btbgrain,
  },
  {
    slug: 'first-rodeo',
    name: 'NOT MY FIRST RODEO',
    description: 'Tote',
    brief: '',
    img: mask4,
  },
  {
    slug: 'spread-love',
    name: 'POLLINATE YOUR PEERS',
    description: 'Incredible',
    brief: '',
    img: mask7,
  },
  {
    slug: 'sad-clown',
    name: 'SAD CLOWN',
    description: '*weep weep*',
    brief: '',
    img: mask8,
  },
];

export const works = [
  {
    slug: 'zep',
    name: 'zep',
    description: 'dog',
    brief: 'a good boy',
    img: zep,
  },
  ...showcaseWorks,
  ...gridWorks,
];

export const workBySlug = (slug?: string) => works.find((work) => work.slug === slug);
