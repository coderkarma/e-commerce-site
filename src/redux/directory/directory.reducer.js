const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://www.dhresource.com/0x0s/f2-albu-g6-M01-1E-1B-rBVaSFuqXumAWKmjAAFZZK31xFI315.jpg/new-luxury-brand-men-women-loafers-sneakers.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDAKrI7fvzNIr6z8ZDIZJyCSgOI0X7xeW_ctI5MR3j8IGE9ei&s',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://my-test-11.slatic.net/original/e875c5ce1b9dcd0b630d4dcc99ed9cee.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl:
        'https://gd.image-gmkt.com/WOMEN-FASHION-SOLID-HIGH-WAIST-WIDE-LEG-PANTS-STRAP-PALAZZO-LOUNGE/li/069/405/859405069.g_400-w_g.jpg',
      id: 4,
      linkUrl: 'shop/womens',
      size: 'large'
    },
    {
      title: 'mens',
      imageUrl:
        'https://www3.assets-gap.com/webcontent/0011/437/954/cn11437954.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
