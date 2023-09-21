
import PropTypes from 'prop-types';


const Cart = ({currentCredit, coursesInCart}) => {
    return (
        <>
            <h3 className='lg:text-[13px] xl:text-[15px] font-bold text-[#2F80ED]'>Credit Hour Remaining : {20 - currentCredit}hr</h3>
            <hr className='h-2 border-zinc-700 my-4' />
            <h2 className='text-lg font-bold mb-4'>Course Name</h2>
            <ol className='list-decimal ml-4'>
                {
                    coursesInCart.map((item,index) => <li className='mb-2' key={index}>{item.course_name}</li>)
                }
            </ol>
            <hr className='h-2 border-zinc-700 my-4' />
            <h4 className='my-4'>Total Credit Hour : {currentCredit}</h4>
        </>
    );
};

Cart.propTypes = {
    currentCredit: PropTypes.number.isRequired,
    coursesInCart: PropTypes.array.isRequired
};

export default Cart;