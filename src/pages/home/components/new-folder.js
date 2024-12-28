import { Link } from "react-router-dom";

function Folder(props) {
    return (
        <Link to={`${props.data_folder}`}>
        <div className='folder'>
            <img src='img/folder.png' className='folder-image' />
            <p className='folder-date'>{props.data_folder}</p>
        </div>
        </Link>
    )
}

export default Folder;