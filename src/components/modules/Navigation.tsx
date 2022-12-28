import NextLink from 'next/link';
// import config from '../../lib/config';

const navigation = [
    {
        id: 1,
        url: '/',
        name: 'Home',
        current: true,
    },
    {
        id: 2,
        url: '/about',
        name: 'About',
        current: false,
    },
    {
        id: 3,
        url: '/product',
        name: 'Product',
        current: false,
    },
    {
        id: 5,
        url: '/contact',
        name: 'Contact',
        current: false,
    },
    {
        id: 4,
        url: '/cart',
        name: 'Cart',
        current: false,
    },
    // {
    //   id: ,
    //   url: '/',
    //   name: '',
    //   current: false,
    // },
];

const Navigation = () => {
    return (
        <nav id='nav'>
            <ul>
                {navigation &&
                    navigation.map(navi => {
                        return (
                            <li key={navi.id}>
                                <NextLink href={navi.url}>{navi.name}</NextLink>
                            </li>
                        );
                    })}
            </ul>
        </nav>
    );
};

export default Navigation;
