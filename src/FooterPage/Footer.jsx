import Logo from '../Components/Logo'
import Divider from '../assets/FooterDivider.svg'
import MediaBar from './MediaBar'
export default function Footer () { 
    return ( 
    <div className='bg-footer-bg  text-white font-times flex flex-col p-4'>          
        <div className=' flex justify-center items-center text-center gap-x-2'>
            <div className='text-xl '>
                <Logo/>
            </div>
            <img src= {Divider} alt="divider" />
            <p className='text-light-blue text-xs w-6/12 '>
                Receive the undivided attention and care that your problems need
            </p>
        </div>
        <div className='w-5/12'>
            <MediaBar/>
        </div>
    </div>
    
    )
}