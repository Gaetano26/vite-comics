const links = [
    {
        text: "Characters",
        url: "#",
        active: false,
    },
    {
        text: "Comics",
        url: "#",
        active: true,
    },
    {
        text: "Movies",
        url: "#",
        active: false,
    },
    {
        text: "Tv",
        url: "#",
        active: false,
    },
    {
        text: "Games",
        url: "#",
        active: false,
    },
    {
        text: "Collectibles",
        url: "#",
        active: false,
    },
    {
        text: "Videos",
        url: "#",
        active: false,
    },
    {
        text: "Fans",
        url: "#",
        active: false,
    },
    {
        text: "News",
        url: "#",
        active: false,
    },
    {
        text: "Shop",
        url: "#",
        active: false,
    },
];

const info = [
    {
        image: 'buy-comics-digital-comics.png',
        alt: 'buy-comics-digital-comics',
        description: 'digital comics'
    },
    {
        image: 'buy-comics-merchandise.png',
        alt: 'buy-comics-merchandise',
        description: 'dc merchandise'
    },
    {
        image: 'buy-comics-subscriptions.png',
        alt: 'buy-comics-subscriptions',
        description: 'subscription'
    },
    {
        image: 'buy-comics-shop-locator.png',
        alt: 'buy-comics-shop-locator',
        description: 'comic shop locator'
    },
    {
        image: 'buy-dc-power-visa.svg',
        alt: 'buy-dc-power-visa',
        description: 'dc power visa'
    }
];

const footerLinks = [
    {
        title: 'dc comics',
        links: [
            {
                text: 'characters',
                link: '#'
            },
            {
                text: 'comics',
                link: '#'
            },
            {
                text: 'movies',
                link: '#'
            },
            {
                text: 'tv',
                link: '#'
            },
            {
                text: 'games',
                link: '#'
            },
            {
                text: 'videos',
                link: '#'
            },
            {
                text: 'news',
                link: '#'
            },
        ]
    },
    {
        title: 'shop',
        links: [
            {
                text: 'Shop DC',
                link: '#'
            },
            {
                text: 'Shop DC Collectibles',
                link: '#'
            }
        ]
    },
    {
        title: 'dc',
        links: [
            {
                text: 'terms of use',
                link: '#'
            },
            {
                text: 'privacy poolicy (new)',
                link: '#'
            },
            {
                text: 'ad choices',
                link: '#'
            },
            {
                text: 'advertising',
                link: '#'
            },
            {
                text: 'jobs',
                link: '#'
            },
            {
                text: 'subscriptions',
                link: '#'
            },
            {
                text: 'talent workshops',
                link: '#'
            },
            {
                text: 'CPSC Certificates',
                link: '#'
            },
            {
                text: 'ratings',
                link: '#'
            },
            {
                text: 'Show help',
                link: '#'
            },
            {
                text: 'contact us',
                link: '#'
            },
        ]
    },
    {
        title: 'sites',
        links: [
            {
                text: 'DC',
                link: '#'
            },
            {
                text: 'MAD Magazine',
                link: '#'
            },
            {
                text: 'DC Kids',
                link: '#'
            },
            {
                text: 'DC Universe',
                link: '#'
            },
            {
                text: 'DC Power Visa',
                link: '#'
            }
        ]
    },
]

const comics = [
    {
      "thumb": "https://www.coverbrowser.com/image/action-comics/1-1.jpg",
      "price": "$19.99",
      "series": "Action Comics",
      "type": "comic book"
    },
    {
      "thumb": "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",
      "price": "$3.99",
      "series": "American Vampire 1976",
      "type": "comic book"
    },
    {
      "thumb": "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",
      "price": "$16.99",
      "series": "Aquaman",
      "type": "graphic novel"
    },
    {
      "thumb": "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",
      "price": "$2.99",
      "series": "Batgirl",
      "type": "comic book"
    },
    {
      "thumb": "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",
      "price": "$3.99",
      "series": "Batman",
      "type": "comic book"
    },
    {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg",
      "price": "$2.99",
      "series": "Batman Beyond",
      "type": "comic book"
    },
    {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg",
      "price": "$3.99",
      "series": "Batman/Superman",
      "type": "comic book"
    },
    {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg",
      "price": "$4.99",
      "series": "Batman/Superman Annual",
      "type": "comic book"
    },
    {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg",
      "price": "$5.99",
      "series": "Batman: The Joker War Zone",
      "type": "comic book"
    },
    {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg",
      "price": "$6.99",
      "series": "Batman: Three Jokers",
      "type": "comic book"
    },
    {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg",
      "price": "$4.99",
      "series": "Batman: White Knight Presents: Harley Quinn",
      "type": "comic book"
    },
    {
      "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg",
      "price": "$16.99",
      "series": "Catwoman",
      "type": "graphic novel"
    }
  ]
export { links, info, footerLinks, comics };