export interface CompanyNew {
    image: any,
    title: string,
    content: string,
    linkText: string
};

export const CompanyNewsMock: CompanyNew[] = [
    {
        image: require('../img/newsItem1.png'),
        title: 'Просто новость о цветах, а о чем еще пишут СМИ?',
        content: 'Что–то тут должно быть написано, чтобы всем сразу захотелось нажать кнопку, которая будет предлагать...',
        linkText: 'ЧИТАТЬ ПОЛНОСТЬЮ'
    },
    {
        image: require('../img/newsItem.png'),
        title: 'Всего 3 чайные ложки этого средства – и вы богат',
        content: 'А тут может и не быть текста, потому что вы уже выпили 3 чайные ложки и стали очень богатым,',
        linkText: 'ЧИТАТЬ ПОЛНОСТЬЮ'
    },
    {
        image: require('../img/newsItem2.png'),
        title: 'Кеннеди катался на таком, пока не отлетел в 1963',
        content: 'А после Кеннеди вам можно будет сидеть за рулем такого роскошного автомобиля?',
        linkText: 'ЧИТАТЬ ПОЛНОСТЬЮ'
    },
    {
        image: require('../img/newsItem3.png'),
        title: 'Самая странная новость почему то тут находится',
        content: 'Шок–контент, горят леса у кого–то, а у нас тут шикарная растительность, кайфуем в Тае.',
        linkText: 'ЧИТАТЬ ПОЛНОСТЬЮ'
    },
]; 

export default CompanyNewsMock;