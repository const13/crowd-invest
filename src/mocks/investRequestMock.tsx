export interface InvestRequestItem {
    image: any,
    title: string,
    rate: number,
    due: number,
    rating: number,
    collected: {
        total: string,
        current: string
    }
};

export const InvestRequestMock: InvestRequestItem[] = [
    {
        image: require('../img/item.png'),
        title: 'Рога и копыта для космического полета',
        rate: 17,
        due: 2,
        rating: 4.2,
        collected: {
            total: '420',
            current: '500 000'
        }
    },
    {
        image: require('../img/item2.png'),
        title: 'Полет космический за счет каких–то рог и копыт',
        rate: 15,
        due: 2,
        rating: 5,
        collected: {
            total: '17 240',
            current: '5 420 000'
        }
    },
    {
        image: require('../img/item3.png'),
        title: 'Какой–то очередной заголовок мощный',
        rate: 19,
        due: 2,
        rating: 5,
        collected: {
            total: '31 070 027',
            current: '38 000 000'
        }
    },
    {
        image: require('../img/item4.png'),
        title: 'Ну конечно, супер старт–ап, как Илон Маск слово',
        rate: 23,
        due: 2,
        rating: 4.8,
        collected: {
            total: '138 412 042',
            current: '150 000 000'
        }
    }
]; 

export default InvestRequestMock;