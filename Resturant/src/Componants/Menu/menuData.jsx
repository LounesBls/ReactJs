import food_one from '../../assets/chicken3.png';
import food_two from '../../assets/chicken1.png';
import food_three from '../../assets/dessert02.png';
import food_four from '../../assets/pizza1.png';

const menuData = [
    {
        id: 1,   
        type: 'popularMenu',
        imgUrl: food_one,
        title: 'vegetale salad',
        price: '30',
        alt: 'food image'
    },
    {
        id: 2,
        type: 'popularMenu',
        imgUrl: food_two,
        title: 'chicken',
        price: '250',
        alt: 'food image'
    },
    {
        id: 3,
        type: 'popularMenu',
        imgUrl: food_three,
        title: 'whipped cream',
        price: '50',
        alt: 'food image'
    },
    {
        id: 4,
        type: 'popularMenu',
        imgUrl: food_four,
        title: 'pizza',
        price: '80',
        alt: 'food image'
    },
];

export default menuData;