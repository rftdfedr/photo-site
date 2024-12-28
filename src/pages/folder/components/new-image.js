import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function NewImage(props) {

    const basket = useSelector((state) => state.photoReducer.basket)
    
    const test =() => {
        console.log(props.id, props.date)
        console.log(props.date in basket && "2" in basket[props.date])
    }
    




    const dispatch = useDispatch()
    const addImage = () => {
        dispatch({
            type: "ADD_IMAGE", payload: {
                date: props.date,
                key: props.id
            }
        })
    }
    const deleteImage = () => {
        dispatch({
            type: "DELETE_IMAGE", payload: {
                key: props.id,
                date: props.date
            }
        })
    }
    
    return (
        <div className="new-image-photo" onClick={test}>
            <img src={props.img} className="new-image-img"></img>
            {(props.date in basket && basket[props.date].includes(props.id)) ? <p className="new-image-price" onClick={() => { deleteImage() }} > Добавлено в корзину </p> : <p className="new-image-price" onClick={() => { addImage() }} >{props.price} рублей </p>}

        </div>
    );
}

export default NewImage;


