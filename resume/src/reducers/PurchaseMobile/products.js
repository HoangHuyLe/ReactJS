var initialState = [
      {
            id: 1,
            name : 'Iphone 11 Pro Max',
            image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png',
            description : 'Sản phẩm do Apple sản xuất',
            price: 3000,
            inventory: 15,
            rating : 4
      },
      {
            id: 2,
            name : 'Samsung Galaxy Note 10',
            image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008702547566121_SS-note-10-pl-glow-1-1.png',
            description : 'Sản phẩm do Samsung sản xuất',
            price: 2000,
            inventory: 15,
            rating: 5
      },
      {
            id: 3,
            name : 'Xiaomi Redmi Note 8 Pro',
            image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/10/7/637060441292078270_xiaomi-redmi-note-8-pro-trang-1.png',
            description : 'Sản phẩm do Xiaomi sản xuất',
            price: 1000,
            inventory: 15,
            rating : 3
      },
]

const products = (state = initialState, aciton) => {
      switch (aciton.type){
            default:
                  return [...state];
      }
}

export default products;