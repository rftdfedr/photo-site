import { useDispatch } from "react-redux";

function BasketPhoto(props) {

     const dispatch = useDispatch()
    const deleteImage = () => {
    dispatch({type:"DELETE_IMAGE", payload:{
         key: props.id,
         date: props.date
     }})}
  
    
    
    return (
        <div className="basket-photo" key={props.id}>
             <img src={props.img} className="basket-in-img" />
            <div className="basket-in-info">
                <p>Цена: {props.price}</p>
                <img src="img\bin.png" className="bin-icon" onClick={() => {deleteImage()}}/>
            </div> 
        </div>
    )
}

export default BasketPhoto;