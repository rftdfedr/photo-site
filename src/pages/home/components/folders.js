import Folder from "./new-folder";
import { useSelector } from "react-redux";



function Folders() {
    const dates = useSelector((state) => (state.photoReducer.dates))
    

    
    // const DateFilter = () => {
    //     const [startDate, setStartDate] = useState('');
    //     const [endDate, setEndDate] = useState('');
    
    //     const StartDateCh = (e) =>{
    //         setStartDate(e.target.value)
    //     }
    //     const EndDateCh = (e) => {
    //         setEndDate(e.target.value);
    //       };
    
          
    //     }




    return (
        <div className='folders'>
            
            <div className='container folders-body'>
            
            <div className='search'>
                    <p>От:</p>
                    <input type='date' className='date date-start' />
                    <p>До:</p>
                    <input type='date' className='date date-end' />
                    <button className='button_search'>Показать</button>
                </div>

                 {dates.map(keys => 
                <Folder data_folder={keys.date} key ={keys.date} />
                 
                 )}  
            </div>
        </div>
    )
}
export default Folders;