import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'


function App() {
  const [data, setData] = useState([])

  const [currentCredit, setCurrentCredit] = useState(0)

  const [coursesInCart, setCoursesInCart] = useState([])

  function handleOnclick(item){
    let hasIncourseInCart = coursesInCart.find(obj => obj === item)
    if (!hasIncourseInCart){
      if((currentCredit + item.credit_value) <= 20 ){
        let courses = [...coursesInCart,item]
        setCoursesInCart(courses)
        setCurrentCredit(currentCredit => currentCredit + item.credit_value)
      }else{
        toast.error("Can't add this course", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }else{
      toast.error("This course is already in cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }


  useEffect(()=>{
    fetch("./data.json")
      .then(res => res.json())
      .then(data => setData(data))
  },[])
  return (
    <div className='w-[95%] mx-auto'>
      <header className='mt-6'>
        <h1 className='text-4xl text-center'>Course Registration</h1>
      </header>
      <main className='mt-12 flex flex-col lg:flex-row justify-between'>
        <section className='grid xl:gap-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[75%] mx-auto lg:mx-0'>
          {
            data.map((item,index) => <Card key={index} item={item} handleOnclick={handleOnclick}></Card>)
          }
        </section>
        <section className='lg:w-[25%]'>
          <div className='lg:w-auto w-[75%] lg:ml-8  mx-auto lg:mt-0 mt-4'>
            <Cart currentCredit={currentCredit} coursesInCart={coursesInCart}></Cart>
          </div>
        </section>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </main> 
    </div>
  )
}

export default App
