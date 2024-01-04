import background from '../assets//CardBackground.svg'
import ContactInfo from './ContactInfo'
import Form from './Form'
export default function CardBackground() {
return(
    <div  style={{ backgroundImage: `url(${background})`,  backgroundPosition: 'center' }} className="flex justify-between rounded-lg shadow-2xl mt-8 w-6/12 h-full  ">
      <div className='flex flex-col justify-between p-5'>
           <div className="items-start">
            <h1 className='text-2xl font-bold'>Get Same Day Response!</h1>
            </div>
            <div className='items-end'>
            <ContactInfo/>
            </div>
      </div>
            <div className=''>
            <Form />
            </div>
        
    </div>
  
    )
}