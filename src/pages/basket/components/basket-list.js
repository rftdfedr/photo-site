import { useSelector } from "react-redux";
import BasketPhoto from "./new-basket-photo";

function BasketList() {

      const dates = useSelector((state) => state.photoReducer.dates)
      const basket = useSelector((state) => state.photoReducer.basket)


       const photos = Object.entries(basket).map(([date, keys]) => {
        console.log(date, keys)
            return( keys.map(key => {

                 const item = dates.filter(obj => obj.date === date)[0].photos.filter(obj => obj.id == key)[0]

                return(<BasketPhoto id = {key} img = {item.photo} price={item.price} date={date}/>)
              }))
          })
    return (
       

        <div className="basket-list">
           {photos}  
        </div>
    )
}

export default BasketList;


