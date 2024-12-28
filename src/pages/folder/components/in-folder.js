import { Link, useParams } from "react-router-dom";
import NewImage from "./new-image";
import { useSelector } from "react-redux";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


 function InFolder(props) {
  const {date} = useParams();
 const images = useSelector((state) => state.photoReducer.dates.filter(obj => obj.date === date)[0].photos)
   return (
     <div className="InFolder container">

        <Link to="/" className="in-folder-date">
         <img src="img/arrow-left.png" className="in-folder-arrow" />
         <h1 className="in-folder-date-text">{date}</h1>
       </Link>

       <div className="">


       <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
       <Masonry columnsCount={3} gutter="10px">

       {images.map(obj => 
          <NewImage img={obj.photo} id ={obj.id} price={obj.price} date={date}/>
       )}

       </Masonry>
       </ResponsiveMasonry>
       </div> 
    </div>
   );
 }

export default InFolder;

