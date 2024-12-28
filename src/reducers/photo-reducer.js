// const initialState = {
//     'dates': {
//         '05.06.2033': {
//             "1": {
//                 'price': 100,
//                 'date': '05.06.2033',
//                 'img': 'img/examples/ali-kazal-Wk53M_jU_0w-unsplash.jpg'
//             },
//             "2": {
//                 'price': 200,
//                 'date': '05.06.2033',
//                 'img': 'img/examples/andrei-r-popescu-xG4ePI5RI9s-unsplash.jpg'
//             },
//             "12": {
//                 'price': 300,
//                 'date': '16.03.2023',
//                 'img': 'img/examples/marek-piwnicki-EKj8Eth_XAo-unsplash.jpg'
//             },
//             "18": {
//                 'price': 400,
//                 'date': '29.04.2023',
//                 'img': 'img/examples/beautiful-ai-natural-landscape.jpg'
//             },

//         },
//         '06.06.2033': {
//             "5": {
//                 'price': 500,
//                 'date': '16.03.2023',
//                 'img': 'img/examples/marek-piwnicki-EKj8Eth_XAo-unsplash.jpg'
//             },
//             "7": {
//                 'price': 600,
//                 'date': '29.04.2023',
//                 'img': 'img/examples/beautiful-ai-natural-landscape.jpg'
//             },
//         }
//     },

//     'basket': {
//     }
// }

const initialState = {
    "dates": [
        {
            "id": 1,
            "date": "14.12.2024",
            "photos": [
                {
                    "id": 1,
                    "photo": "https://danilolegovichmelnikov.pythonanywhere.com/media/photos/2_iRl5TdO.jpeg",
                    "price": 100
                },
                {
                    "id": 2,
                    "photo": "https://danilolegovichmelnikov.pythonanywhere.com/media/photos/4.jpeg",
                    "price": 150
                },
                {
                    "id": 3,
                    "photo": "https://danilolegovichmelnikov.pythonanywhere.com/media/photos/5_C1sR6qj.jpeg",
                    "price": 200
                },
                {
                    "id": 4,
                    "photo": "https://danilolegovichmelnikov.pythonanywhere.com/media/photos/6_8zMHzK9.jpeg",
                    "price": 190
                }
            ]
        },
        {
            "id": 2,
            "date": "03.12.2024",
            "photos": [
                {
                    "id": 5,
                    "photo": "https://danilolegovichmelnikov.pythonanywhere.com/media/photos/images_62Dv9xa.jpeg",
                    "price": 150
                },
                {
                    "id": 6,
                    "photo": "https://danilolegovichmelnikov.pythonanywhere.com/media/photos/5_zK798KY.jpeg",
                    "price": 120
                },
                {
                    "id": 7,
                    "photo": "https://danilolegovichmelnikov.pythonanywhere.com/media/photos/6_pbGK0a1.jpeg",
                    "price": 190
                }
            ]
        }
    ],
    "basket": {
        "03.12.2024" : [5,7],
        "14.12.2024" : [1,2]
    }
}

const photoReducer = (state = initialState, action) => {

     const basket = state.basket
     switch (action.type) {

        case "ADD_IMAGE":
            const date = action.payload.date
            const key = action.payload.key
            if (date in basket) {

                return { ...state, basket: { ...basket, [date]: [...basket[date], key] } }

            } else {

                return { ...state, basket: { ...basket, [date]: [key] } }


            }

         case "DELETE_IMAGE":
            const keybasket = action.payload.key
             const datebasket = action.payload.date


            return { ...state, basket: { ...basket, [datebasket]: basket[datebasket].filter(item => item !== keybasket) } }

         default:
            return state;
    }
}

export default photoReducer;









