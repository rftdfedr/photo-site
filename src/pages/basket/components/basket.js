import BasketList from "./basket-list";
import BasketTotal from "./basket-total";
function Basket(){
    return(
        <div className="container in-basket">
            <BasketList/>
            <BasketTotal/>
        </div>
    )
}

export default Basket;