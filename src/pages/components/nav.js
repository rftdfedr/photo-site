import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
    const basket = useSelector((state) => state.photoReducer.basket)
    const values = Object.values(basket)
    var count = 0;
    values.forEach(value => {
        count+= value.length
    })   



    return (
        <nav className='menu'>
            <div className='container menu-body'>
            <Link to="/">
                <p className='site-name'>Аэроклассика</p>
            </Link>

                <Link to="basket" className='basket'>
                    
                        <img src='img/basket.png' alt='none' className='basket-img' />
                        <p className='basket-text'>Корзина</p>
                        <p className="basket-count">{count > 0? count: ""}</p>
                </Link>
            </div>
        </nav>
    )
}
export default Nav;
// попробовать добавить звуки нажатий добавления и удаления, адаптировать под телефоны