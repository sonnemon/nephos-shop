export default {
  products: [
    {
      id: 1,
      name: 'Red Seat',
      category: 'House',
      pic: 'assets/img/products/cosy-red-seat.png',
      discounted: false,
      price: 45.0,
      oldPrice: 45.0,
      tagline: 'An elegant chair',
      shortDesc:
        'This seat is nicely and will fit perfectly in your living room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/red-seat.png',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '4x4x8',
      weight: '24.23 Lbs',
      sku: 'SKU-877',
      related: [
        {
          id: '4',
        },
        {
          id: '5',
        },
        {
          id: '3',
        },
      ],
    },
    {
      id: 3,
      name: 'White Table',
      category: 'House',
      pic: 'assets/img/products/modern-table.png',
      discounted: false,
      price: 350.49,
      oldPrice: 350.49,
      tagline: 'Ideal for family',
      shortDesc:
        'This table will bring joy into your house for you and your family members. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/modern-table.png',
        },
      ],
      vendor: 'Globe Furniture',
      inventoryQty: 250,
      shippingTime: '3 weeks',
      dimensions: '4x4x8',
      weight: '80.59 Lbs',
      sku: 'SKU-1059',
      related: [
        {
          id: '4',
        },
        {
          id: '5',
        },
        {
          id: '1',
        },
      ],
    },
    {
      id: 4,
      name: 'Blue Seat',
      category: 'House',
      pic: 'assets/img/products/blue-seat.png',
      discounted: false,
      price: 35.0,
      oldPrice: 35.0,
      tagline: 'An gorgeous seat',
      shortDesc:
        'This seat is nicely and will fit perfectly in your living room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/blue-seat.png',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '4x4x8',
      weight: '10.23 Lbs',
      sku: 'SKU-423',
      related: [
        {
          id: '6',
        },
        {
          id: '3',
        },
        {
          id: '5',
        },
      ],
    },
    {
      id: 5,
      name: 'Modern Bed',
      category: 'House',
      pic: 'assets/img/products/modern-bed.jpg',
      discounted: true,
      price: 120.99,
      oldPrice: 299.99,
      tagline: 'Sleep good & well',
      shortDesc:
        'An amazing bed that will make you very happy. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/modern-bed.jpg',
        },
      ],
      vendor: 'Globe Furniture',
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '12x12x59',
      weight: '126.59 Lbs',
      sku: 'SKU-05595',
      related: [
        {
          id: '7',
        },
        {
          id: '2',
        },
        {
          id: '3',
        },
      ],
    },
    {
      id: 6,
      name: 'Dark Seat',
      category: 'House',
      pic: 'assets/img/products/dark-seat.jpg',
      discounted: true,
      price: 50.25,
      oldPrice: 79.25,
      tagline: 'The elegance of Dark',
      shortDesc:
        'This seat is nicely and will fit perfectly in your living room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/dark-seat.jpg',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '4x4x8',
      weight: '10.23 Lbs',
      sku: 'SKU-112',
      related: [
        {
          id: '4',
        },
        {
          id: '1',
        },
        {
          id: '5',
        },
      ],
    },
    {
      id: 7,
      name: 'TV Furniture',
      category: 'House',
      pic: 'assets/img/products/house1.png',
      discounted: false,
      price: 430.0,
      oldPrice: 430.0,
      tagline: 'Watch TV like a king',
      shortDesc:
        'An awesome TV furniture for your living. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/house1.png',
        },
      ],
      vendor: 'Bobby Living',
      inventoryQty: 250,
      shippingTime: '3 weeks',
      dimensions: '4x4x8',
      weight: '95.23 Lbs',
      sku: 'SKU-4564',
      related: [
        {
          id: '7',
        },
        {
          id: '2',
        },
        {
          id: '3',
        },
      ],
    },
    {
      id: 8,
      name: 'Cabinet',
      category: 'House',
      pic: 'assets/img/products/house2.jpg',
      discounted: false,
      price: 430.0,
      oldPrice: 430.0,
      tagline: 'Nice and minimal',
      shortDesc:
        'A nice minimal cabinet for your living. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/house2.jpg',
        },
      ],
      vendor: 'Bobby Living',
      inventoryQty: 250,
      shippingTime: '3 weeks',
      dimensions: '4x4x8',
      weight: '154.49 Lbs',
      sku: 'SKU-59984',
      related: [
        {
          id: '7',
        },
        {
          id: '2',
        },
        {
          id: '3',
        },
      ],
    },
    {
      id: 9,
      name: 'Imperator',
      category: 'Office',
      pic: 'assets/img/products/office3.jpg',
      discounted: true,
      price: 490.0,
      oldPrice: 699.99,
      tagline: 'An imperial couch',
      shortDesc:
        'This couch fits for classy and cosy livings. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/office3.jpg',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '4x4x8',
      weight: '24.23 Lbs',
      sku: 'SKU-49488',
      related: [
        {
          id: '10',
        },
        {
          id: '12',
        },
        {
          id: '11',
        },
      ],
    },
    {
      id: 10,
      name: 'Roller',
      category: 'Office',
      pic: 'assets/img/products/office1.jpg',
      discounted: false,
      price: 75.0,
      oldPrice: 75.0,
      tagline: 'The rolling chair',
      shortDesc:
        'Perfectly fits in classy offices. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/office1.jpg',
        },
      ],
      vendor: 'Furnimod',
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '4x4x8',
      weight: '42.23 Lbs',
      sku: 'SKU-78564',
      related: [
        {
          id: '14',
        },
        {
          id: '12',
        },
        {
          id: '11',
        },
      ],
    },
    {
      id: 11,
      name: 'Executive',
      category: 'Office',
      pic: 'assets/img/products/office4.jpg',
      discounted: false,
      price: 125.0,
      oldPrice: 125.0,
      tagline: 'The executive chair',
      shortDesc:
        'Perfectly fits in classy offices. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/office4.jpg',
        },
      ],
      vendor: 'Furnimod',
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '4x4x8',
      weight: '36.23 Lbs',
      sku: 'SKU-52684',
      related: [
        {
          id: '12',
        },
        {
          id: '10',
        },
        {
          id: '14',
        },
      ],
    },
    {
      id: 12,
      name: 'Cosy Chair',
      category: 'Office',
      pic: 'assets/img/products/office5.jpg',
      discounted: true,
      price: 88.49,
      oldPrice: 119.99,
      tagline: 'Comfortable & Classy',
      shortDesc:
        'Perfectly fits in classy offices. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/office5.jpg',
        },
      ],
      vendor: 'Furnimod',
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '15x59xx15',
      weight: '36.23 Lbs',
      sku: 'SKU-566846',
      related: [
        {
          id: '15',
        },
        {
          id: '10',
        },
        {
          id: '14',
        },
      ],
    },
    {
      id: 13,
      name: 'Ambassador',
      category: 'Office',
      pic: 'assets/img/products/office9.png',
      discounted: false,
      price: 480.0,
      oldPrice: 480.0,
      tagline: 'A VIP couch',
      shortDesc:
        'This couch fits for classy and cosy livings. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/office9.png',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '4x4x8',
      weight: '150.49 Lbs',
      sku: 'SKU-08974',
      related: [
        {
          id: '9',
        },
        {
          id: '15',
        },
        {
          id: '14',
        },
      ],
    },
    {
      id: 14,
      name: 'Conqueror',
      category: 'Office',
      pic: 'assets/img/products/office6.png',
      discounted: false,
      price: 590.0,
      oldPrice: 590.0,
      tagline: 'A premium couch',
      shortDesc:
        'This couch fits for classy and cosy livings. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/office6.png',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '50x95x65',
      weight: '150.49 Lbs',
      sku: 'SKU-08974',
      related: [
        {
          id: '9',
        },
        {
          id: '15',
        },
        {
          id: '13',
        },
      ],
    },
    {
      id: 15,
      name: 'Gentleman',
      category: 'Office',
      pic: 'assets/img/products/office7.gif',
      discounted: false,
      price: 375.0,
      oldPrice: 375.0,
      tagline: 'A middle sized couch',
      shortDesc:
        'An accessible couch that fits for classy and cosy livings. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/office7.gif',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '50x95x65',
      weight: '150.49 Lbs',
      sku: 'SKU-05568',
      related: [
        {
          id: '9',
        },
        {
          id: '15',
        },
        {
          id: '13',
        },
      ],
    },
    {
      id: 16,
      name: 'Tabouret',
      category: 'For Kids',
      pic: 'assets/img/products/kids1.jpg',
      discounted: false,
      price: 22.0,
      oldPrice: 22.0,
      tagline: 'A nice sit for kids',
      shortDesc:
        "Ideal for your kid's room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.",
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids1.jpg',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '50x95x65',
      weight: '20.49 Lbs',
      sku: 'SKU-0548',
      related: [
        {
          id: '17',
        },
        {
          id: '18',
        },
        {
          id: '19',
        },
      ],
    },
    {
      id: 17,
      name: 'Rabbit Lamp',
      category: 'For Kids',
      pic: 'assets/img/products/kids2.jpg',
      discounted: false,
      price: 14.49,
      oldPrice: 14.49,
      tagline: 'A cute lamp',
      shortDesc:
        "Ideal for your kid's room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.",
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids2.jpg',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '50x95x65',
      weight: '3.12 Lbs',
      sku: 'SKU-4568',
      related: [
        {
          id: '20',
        },
        {
          id: '19',
        },
        {
          id: '18',
        },
      ],
    },
    {
      id: 18,
      name: 'White Bed',
      category: 'For Kids',
      pic: 'assets/img/products/kids3.png',
      discounted: false,
      price: 375.0,
      oldPrice: 375.0,
      tagline: 'A nice wooden bed',
      shortDesc:
        "Ideal for your kid's room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.",
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids3.png',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '50x95x65',
      weight: '62.12 Lbs',
      sku: 'SKU-15645',
      related: [
        {
          id: '17',
        },
        {
          id: '22',
        },
        {
          id: '19',
        },
      ],
    },
    {
      id: 19,
      name: 'Toy Boxes',
      category: 'For Kids',
      pic: 'assets/img/products/kids4.jpg',
      discounted: false,
      price: 80.0,
      oldPrice: 80.0,
      tagline: 'A nice toy box',
      shortDesc:
        "Ideal for your kid's room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.",
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids4.jpg',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '50x95x65',
      weight: '9.75 Lbs',
      sku: 'SKU-55648',
      related: [
        {
          id: '17',
        },
        {
          id: '18',
        },
        {
          id: '16',
        },
      ],
    },
    {
      id: 20,
      name: 'Treasure Chest',
      category: 'For Kids',
      pic: 'assets/img/products/kids5.jpg',
      discounted: true,
      price: 185.0,
      oldPrice: 215.0,
      tagline: 'A nice toy box',
      shortDesc:
        "Ideal for your kid's room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.",
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids5.jpg',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '15x47x49',
      weight: '9.75 Lbs',
      sku: 'SKU-1525',
      related: [
        {
          id: '17',
        },
        {
          id: '18',
        },
        {
          id: '19',
        },
      ],
    },
    {
      id: 21,
      name: 'Child Desk',
      category: 'For Kids',
      pic: 'assets/img/products/kids7.jpg',
      discounted: true,
      price: 185.0,
      oldPrice: 215.0,
      tagline: 'A cool mini desk',
      shortDesc:
        "Ideal for studying and your kid's room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.",
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids7.jpg',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '15x47x49',
      weight: '15.75 Lbs',
      sku: 'SKU-02654',
      related: [
        {
          id: '17',
        },
        {
          id: '18',
        },
        {
          id: '19',
        },
      ],
    },
    {
      id: 22,
      name: 'Animals Set',
      category: 'For Kids',
      pic: 'assets/img/products/kids6.jpg',
      discounted: false,
      price: 23.49,
      oldPrice: 23.49,
      tagline: 'A ready to eat kit',
      shortDesc:
        'Ideal for babies and toddlers. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids6.jpg',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '5x5x5',
      weight: '2.75 Lbs',
      sku: 'SKU-4564',
      related: [
        {
          id: '17',
        },
        {
          id: '18',
        },
        {
          id: '19',
        },
      ],
    },
    {
      id: 23,
      name: 'Wood Elephant',
      category: 'For Kids',
      pic: 'assets/img/products/kids6.jpg',
      discounted: false,
      price: 57.99,
      oldPrice: 57.99,
      tagline: 'A beautiful handmade toy',
      shortDesc:
        'Ideal for babies and toddlers. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kids6.jpg',
        },
      ],
      vendor: "Kid's Valley",
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '12x12x12',
      weight: '4.75 Lbs',
      sku: 'SKU-4898',
      related: [
        {
          id: '17',
        },
        {
          id: '18',
        },
        {
          id: '19',
        },
      ],
    },
    {
      id: 24,
      name: 'Chromed Sink',
      category: 'Kitchen',
      pic: 'assets/img/products/kitchen.png',
      discounted: false,
      price: 142.0,
      oldPrice: 142.0,
      tagline: 'A premium sink',
      shortDesc:
        'Premium and high quality sink. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kitchen.png',
        },
      ],
      vendor: 'Valimar',
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '12x12x12',
      weight: '4.75 Lbs',
      sku: 'SKU-45687',
      related: [
        {
          id: '25',
        },
        {
          id: '26',
        },
        {
          id: '27',
        },
      ],
    },
    {
      id: 25,
      name: 'Mini Kitchen',
      category: 'Kitchen',
      pic: 'assets/img/products/kitchen3.png',
      discounted: false,
      price: 142.0,
      oldPrice: 142.0,
      tagline: 'All in one',
      shortDesc:
        'An all in on kitchen for small flats. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kitchen3.png',
        },
      ],
      vendor: 'Valimar',
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '50x50x50',
      weight: '90.45 Lbs',
      sku: 'SKU-548954',
      related: [
        {
          id: '28',
        },
        {
          id: '27',
        },
        {
          id: '26',
        },
      ],
    },
    {
      id: 26,
      name: 'Auto Toaster',
      category: 'Kitchen',
      pic: 'assets/img/products/kitchen2.jpg',
      discounted: false,
      price: 63.0,
      oldPrice: 63.0,
      tagline: 'Yummy Toasts',
      shortDesc:
        'An modern and high tech toaster. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kitchen2.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '5 days',
      dimensions: '50x50x50',
      weight: '6.45 Lbs',
      sku: 'SKU-548954',
      related: [
        {
          id: '25',
        },
        {
          id: '28',
        },
        {
          id: '27',
        },
      ],
    },
    {
      id: 27,
      name: 'Modern Fridge',
      category: 'Kitchen',
      pic: 'assets/img/products/kitchen4.jpg',
      discounted: false,
      price: 675.0,
      oldPrice: 675.0,
      tagline: 'Modern & Cool',
      shortDesc:
        'A premium fridge to help you cook better. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kitchen4.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '3 weeks',
      dimensions: '50x50x50',
      weight: '130.84 Lbs',
      sku: 'SKU-19725',
      related: [
        {
          id: '25',
        },
        {
          id: '26',
        },
        {
          id: '24',
        },
      ],
    },
    {
      id: 28,
      name: 'Coffee Maker',
      category: 'Kitchen',
      pic: 'assets/img/products/kitchen5.jpg',
      discounted: false,
      price: 178.0,
      oldPrice: 178.0,
      tagline: 'Delicious coffee',
      shortDesc:
        'A premium coffee maker for you and your family. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/kitchen5.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '3 weeks',
      dimensions: '16x16x16',
      weight: '20.84 Lbs',
      sku: 'SKU-3985',
      related: [
        {
          id: '25',
        },
        {
          id: '26',
        },
        {
          id: '27',
        },
      ],
    },
    {
      id: 29,
      name: 'Styled Lamp',
      category: 'Accessories',
      pic: 'assets/img/products/access1.jpg',
      discounted: false,
      price: 178.0,
      oldPrice: 178.0,
      tagline: 'Elegant & Sobre',
      shortDesc:
        'A nice lamps that can fit anywhere in your house. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access1.jpg',
        },
      ],
      vendor: 'Houseo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '8x8x8',
      weight: '6.50 Lbs',
      sku: 'SKU-44984',
      related: [
        {
          id: '30',
        },
        {
          id: '31',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 30,
      name: 'Golden Lamp',
      category: 'Accessories',
      pic: 'assets/img/products/access2.jpg',
      discounted: false,
      price: 178.0,
      oldPrice: 178.0,
      tagline: 'Elegant & Sobre',
      shortDesc:
        'A nice lamps that can fit anywhere in your house. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access2.jpg',
        },
      ],
      vendor: 'Houseo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '8x8x8',
      weight: '6.50 Lbs',
      sku: 'SKU-354',
      related: [
        {
          id: '31',
        },
        {
          id: '7',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 31,
      name: 'Aquarium',
      category: 'Accessories',
      pic: 'assets/img/products/access3.jpg',
      discounted: false,
      price: 235.0,
      oldPrice: 235.0,
      tagline: 'Cool & Chill',
      shortDesc:
        'A nice aquarium that will make you feel relaxed. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access3.jpg',
        },
      ],
      vendor: 'Houseo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '50x50x50',
      weight: '48.50 Lbs',
      sku: 'SKU-195',
      related: [
        {
          id: '3',
        },
        {
          id: '1',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 32,
      name: 'Design Shelf',
      category: 'Accessories',
      pic: 'assets/img/products/access4.jpg',
      discounted: true,
      price: 510.0,
      oldPrice: 629.0,
      tagline: 'Clean & Minimal',
      shortDesc:
        'A nice looking shelf to put anywhere in your house. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access4.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '90x150x90',
      weight: '48.50 Lbs',
      sku: 'SKU-24658',
      related: [
        {
          id: '30',
        },
        {
          id: '31',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 33,
      name: 'Ground Shelf',
      category: 'Accessories',
      pic: 'assets/img/products/access5.jpg',
      discounted: false,
      price: 80.0,
      oldPrice: 80.0,
      tagline: 'A simple shelf',
      shortDesc:
        'A nice looking shelf to put anywhere in your house. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access5.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '90x150x90',
      weight: '48.50 Lbs',
      sku: 'SKU-5484',
      related: [
        {
          id: '30',
        },
        {
          id: '31',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 34,
      name: 'Modern Cabinet',
      category: 'Accessories',
      pic: 'assets/img/products/access6.jpg',
      discounted: false,
      price: 265.0,
      oldPrice: 265.0,
      tagline: 'A clean cabinet',
      shortDesc:
        'A nice looking cabinet to put anywhere in your house. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access6.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '90x150x90',
      weight: '48.50 Lbs',
      sku: 'SKU-5484',
      related: [
        {
          id: '30',
        },
        {
          id: '31',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 35,
      name: 'Ground Speakers',
      category: 'Accessories',
      pic: 'assets/img/products/access8.jpg',
      discounted: false,
      price: 99.0,
      oldPrice: 99.0,
      tagline: 'Minimal design',
      shortDesc:
        'Outstanding speakers that will fit nicely in your living. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access8.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '30x30x30',
      weight: '16.50 Lbs',
      sku: 'SKU-24588',
      related: [
        {
          id: '30',
        },
        {
          id: '31',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 36,
      name: 'Modern Speakers',
      category: 'Accessories',
      pic: 'assets/img/products/access7.jpg',
      discounted: false,
      price: 175.0,
      oldPrice: 175.0,
      tagline: 'Minimal design',
      shortDesc:
        'Outstanding speakers that will fit nicely in your living. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/access7.jpg',
        },
      ],
      vendor: 'Govo',
      inventoryQty: 250,
      shippingTime: '1 week',
      dimensions: '90x120x60',
      weight: '45.50 Lbs',
      sku: 'SKU-45645',
      related: [
        {
          id: '30',
        },
        {
          id: '31',
        },
        {
          id: '6',
        },
      ],
    },
    {
      id: 37,
      name: 'Red Alcove',
      category: 'Office',
      pic: 'assets/img/products/red-seat.jpg',
      discounted: false,
      price: 45.0,
      oldPrice: 45.0,
      tagline: 'An elegant chair',
      shortDesc:
        'This seat is nicely and will fit perfectly in your living room. Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis Ut fermentum interdum malesuada sed ornare.',
      longDesc:
        '<p>Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p><p>Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>',
      images: [
        {
          id: 0,
          url: 'assets/img/products/red-seat.jpg',
        },
      ],
      vendor: "Brook's",
      inventoryQty: 250,
      shippingTime: '2 weeks',
      dimensions: '4x4x8',
      weight: '24.23 Lbs',
      sku: 'SKU-219',
      related: [
        {
          id: '30',
        },
        {
          id: '31',
        },
        {
          id: '6',
        },
      ],
    },
  ],
};
