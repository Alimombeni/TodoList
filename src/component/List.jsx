import Item from "./Item.jsx";
import './list.css';
// eslint-disable-next-line react/prop-types
function List ({works, onDelete}) {

    return (

        <div className='list'>
            <ul>
                {/* eslint-disable-next-line react/prop-types */}

                {works.map((work)=>work(<Item work={work} key={work.id} onDelete={onDelete}>{work.name}</Item> ))}



            </ul>
        </div>


    )


}


export default List