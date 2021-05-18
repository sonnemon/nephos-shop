const myWishlists = [
  {
    id: 0,
    name: 'Nice Couches',
    products: [
      {
        id: 9,
        name: 'Imperator',
        category: 'Office',
        price: 699.99,
        images: [
          {
            url: 'assets/img/products/office3.jpg',
          },
        ],
      },
      {
        id: 13,
        name: 'Ambassador',
        category: 'Office',
        price: 480.0,
        images: [
          {
            url: 'assets/img/products/office9.png',
          },
        ],
      },
      {
        id: 14,
        name: 'Conqueror',
        category: 'Office',
        price: 590.0,
        images: [
          {
            url: 'assets/img/products/office6.png',
          },
        ],
      },
      {
        id: 15,
        name: 'Gentleman',
        category: 'Office',
        price: 375.0,
        images: [
          {
            url: 'assets/img/products/office7.gif',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Ryan's new room",
    products: [
      {
        id: 20,
        name: 'Treasure Chest',
        category: 'For Kids',
        price: 185.0,
        images: [
          {
            url: 'assets/img/products/kids5.jpg',
          },
        ],
      },
      {
        id: 21,
        name: 'Child desk',
        category: 'For Kids',
        price: 190.0,
        images: [
          {
            url: 'assets/img/products/kids7.jpg',
          },
        ],
      },
      {
        id: 17,
        name: 'Rabbit lamp',
        category: 'For Kids',
        price: 14.49,
        images: [
          {
            url: 'assets/img/products/kids2.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'My Next Purchases',
    products: [],
  },
];
const myOrders = [
  {
    id: 46985,
    total: 200.37,
    date: 'Aug 17 2019',
    status: 'Shipping',
    completed: 66,
    shippingMethod: 'UPS',
    orderModel: {
      subtotal: 130.25,
      taxes: 7.82,
      shipping: 62.3,
      total: 200.37,
    },
    products: [
      {
        id: 1,
        name: 'Red Seat',
        price: 45.0,
        quantity: 1,
        photoUrl: 'assets/img/products/cosy-red-seat.png',
      },
      {
        id: 4,
        name: 'Blue Seat',
        price: 35.0,
        quantity: 1,
        photoUrl: 'assets/img/products/blue-seat.png',
      },
      {
        id: 6,
        name: 'Dark Seat',
        price: 50.25,
        quantity: 1,
        photoUrl: 'assets/img/products/dark-seat.jpg',
      },
    ],
    contact: {
      name: 'Janet Smith',
      photoUrl: 'assets/img/avatars/janet.jpg',
    },
  },
  {
    id: 46878,
    total: 411.52,
    date: 'Jul 5 2019',
    status: 'Preparing',
    completed: 33,
    shippingMethod: 'FedEx',
    orderModel: {
      subtotal: 317.47,
      taxes: 19.04,
      shipping: 75.0,
      total: 411.52,
    },
    products: [
      {
        id: 17,
        name: 'Rabbit Lamp',
        price: 14.49,
        quantity: 2,
        photoUrl: 'assets/img/products/kids2.jpg',
      },
      {
        id: 19,
        name: 'Toy Boxes',
        price: 80.0,
        quantity: 1,
        photoUrl: 'assets/img/products/kids4.jpg',
      },
      {
        id: 21,
        name: 'Treasure Chest',
        price: 185.0,
        quantity: 1,
        photoUrl: 'assets/img/products/kids7.jpg',
      },
      {
        id: 22,
        name: 'Animals Set',
        price: 23.49,
        quantity: 1,
        photoUrl: 'assets/img/products/kids6.jpg',
      },
    ],
    contact: {
      name: 'Mark Korsky',
      photoUrl: 'assets/img/avatars/marc.jpg',
    },
  },
  {
    id: 42135,
    total: 412.5,
    date: 'Jun 27 2019',
    status: 'Processing',
    completed: 23,
    shippingMethod: 'Ground',
    orderModel: {
      subtotal: 375.0,
      taxes: 22.5,
      shipping: 15.0,
      total: 412.5,
    },
    products: [
      {
        id: 18,
        name: 'White Bed',
        price: 375.0,
        quantity: 1,
        photoUrl: 'assets/img/products/kids3.png',
      },
    ],
    contact: {
      name: 'Lauren Hill',
      photoUrl: 'assets/img/avatars/lauren.png',
    },
  },
  {
    id: 39456,
    total: 1063.82,
    date: 'Jun 3 2019',
    status: 'Blocked',
    completed: 40,
    shippingMethod: 'Ground',
    orderModel: {
      subtotal: 947.0,
      taxes: 56.82,
      shipping: 60.0,
      total: 1063.82,
    },
    products: [
      {
        id: 29,
        name: 'Styled Lamp',
        price: 178.0,
        quantity: 2,
        photoUrl: 'assets/img/products/access1.jpg',
      },
      {
        id: 30,
        name: 'Golden Lamp',
        price: 178.0,
        quantity: 2,
        photoUrl: 'assets/img/products/access2.jpg',
      },
      {
        id: 31,
        name: 'Aquarium',
        price: 235.0,
        quantity: 1,
        photoUrl: 'assets/img/products/access3.jpg',
      },
    ],
    contact: {
      name: 'Mark Korsky',
      photoUrl: 'assets/img/avatars/marc.jpg',
    },
  },
  {
    id: 38246,
    total: 636.32,
    date: 'May 15 2019',
    status: 'Complete',
    completed: 100,
    shippingMethod: 'Ground',
    orderModel: {
      subtotal: 572.0,
      taxes: 34.32,
      shipping: 30.0,
      total: 636.32,
    },
    products: [
      {
        id: 7,
        name: 'TV Furniture',
        price: 430.0,
        quantity: 1,
        photoUrl: 'assets/img/products/house1.png',
      },
      {
        id: 25,
        name: 'Gentleman',
        price: 142.0,
        quantity: 1,
        photoUrl: 'assets/img/products/office7.gif',
      },
    ],
    contact: {
      name: 'Janet Smith',
      photoUrl: 'assets/img/avatars/janet.jpg',
    },
  },
];
const elieAddresses = [
  {
    type: 'billingAddress',
    address1: '23, Block C2',
    address2: 'Church Street',
    city: 'Sydney',
    postalCode: '2037',
    state: 'New South Wales',
    country: 'Australia',
  },
  {
    type: 'shippingAddress',
    disabled: false,
    address1: '23, Block C2',
    address2: 'Church Street',
    city: 'Sydney',
    postalCode: '2037',
    state: 'New South Wales',
    country: 'Australia',
  },
];
const johnAddresses = [
  {
    type: 'Billing Address',
    address1: '47 St John Limits',
    address2: 'Havana Street',
    city: 'Sydney',
    postalCode: '2037',
    state: 'New South Wales',
    country: 'Australia',
  },
  {
    type: '',
    disabled: true,
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    state: '',
    country: '',
  },
];
const samanthaAddresses = [
  {
    type: 'Billing Address',
    address1: '14 Gregor Street',
    address2: 'Apt 22',
    city: 'Sydney',
    postalCode: '2037',
    state: 'New South Wales',
    country: 'Australia',
  },
  {
    type: '',
    disabled: true,
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    state: '',
    country: '',
  },
];
const arthurAddresses = [
  {
    type: 'Billing Address',
    address1: '150 Gordon Ave',
    address2: 'Suite G3',
    city: 'Sydney',
    postalCode: '2037',
    state: 'New South Wales',
    country: 'Australia',
  },
  {
    type: '',
    disabled: true,
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    state: '',
    country: '',
  },
];
export default [
  {
    isLoggedIn: true,
    firstName: 'Elie',
    lastName: 'Daniels',
    email: 'elie@mail.com',
    password: 'testpassword',
    phone: '+1 555 623 568',
    photoUrl: 'assets/img/avatars/elie.jpg',
    wishlists: myWishlists,
    orders: myOrders,
    addresses: elieAddresses,
  },
  {
    isLoggedIn: true,
    firstName: 'John',
    lastName: 'Cambell',
    email: 'john@mail.com',
    password: 'testpassword',
    phone: '+1 555 623 568',
    photoUrl: 'assets/img/avatars/john.jpg',
    wishlists: myWishlists,
    orders: myOrders,
    addresses: johnAddresses,
  },
  {
    isLoggedIn: true,
    firstName: 'Samantha',
    lastName: 'Rogers',
    email: 'samantha@mail.com',
    password: 'testpassword',
    phone: '+1 555 623 568',
    photoUrl: 'assets/img/avatars/samantha.jpg',
    wishlists: myWishlists,
    orders: myOrders,
    addresses: samanthaAddresses,
  },
  {
    isLoggedIn: true,
    firstName: 'Arthur',
    lastName: 'Baxter',
    email: 'arthur@mail.com',
    password: 'testpassword',
    phone: '+1 555 623 568',
    photoUrl: 'assets/img/avatars/arthur.jpg',
    wishlists: myWishlists,
    orders: myOrders,
    addresses: arthurAddresses,
  },
];
