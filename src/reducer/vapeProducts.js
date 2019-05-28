// export default (state = null, actions) => {
//     switch (actions.type) {
//         case "GET_LIST_VAPE":
//             return actions.payload;
    
//         case "DELETE_LIST_VAPE":
//             const id = actions.payload;
//             return state.filter(el => el.id !== id)

//         case "ADD_LIST_VAPE": 
//             return actions.payload

//         default:
//             return state;
//     }
// }

let initialState = [
    {
        id: '1',
        name: 'Aleader Orbit 100W TC Box Mod Chính Hãng – Hot new 2019',
        image: "https://vapechinhhang.com/wp-content/uploads/2018/12/aleader-orbit-100w-tc-box-mod-chinh-hang-300x300.jpg",
        price: "790000đ",
        inventory: 50
    },
    {
        id: '2',
        name: 'Asvape Gabriel Choice 80W – Bách Quỷ Dạ Hành V2 Chính Hãng',
        image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Gabriel-Choice-80W-1-300x300.jpg",
        price: "1490000đ",
        inventory: 15
    },{
        id: '3',
        name: 'Vape Dovpo Mvv 280W Full Kit chính hãng',
        image: "https://vapechinhhang.com/wp-content/uploads/2018/06/Asvape-Gabriel-Choice-80W-1-300x300.jpg",
        price: "1650000đ",
        inventory: 5
    },
]

const VapeProducts = (state = initialState, action) => {
    switch(action.type) {
        default: return [ ...state ]
    }
}

export default VapeProducts