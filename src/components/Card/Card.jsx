import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Card = ({item, handleOnclick}) => {
    console.log(item.details_of_course.length)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl justify-between w-full h-full">
                <figure style={{display: "block"}}><img className='w-full' src={item.img} alt="Shoes" /></figure>
                <div className="card-body p-0">
                    <h2 className="card-title">{item.course_name}</h2>
                    <p>
                        {item.details_of_course.length > 100 ? 
                        <>
                            {item.details_of_course.slice(0,100)}
                            <br />
                            <span className='text-[#4A07DA] cursor-pointer'>read more ...</span>
                        </> 
                        : item.details_of_course.length}
                    </p>
                    <div className='flex justify-between'>
                        <div className="price flex items-center space-x-2">
                            <FontAwesomeIcon icon={faDollarSign} /> 
                            <p>Price : {item.price}</p>    
                        </div>
                        <div className="credit flex items-center space-x-2">
                            <FontAwesomeIcon icon={faBookOpen} />
                            <p>Credit: {item.credit_value}hr</p>
                        </div>
                    </div>
                    <div className="card-actions justify-center w-full contents">
                        <button className="btn btn-primary h-fit min-h-[30px]" onClick={() => handleOnclick(item)}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.object.isRequired,
    handleOnclick: PropTypes.func.isRequired
};

export default Card;