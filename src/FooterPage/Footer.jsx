import Logo from '../Components/Logo'
import Divider from '../assets/FooterDivider.svg'
import MediaBar from './MediaBar'
import FooterMenu from './FooterMenu'
export default function Footer () { 
    return ( 
        <div className='bg-footer-bg  text-white font-times flex flex-col p-4 md:p-10'>
    <div className=' flex flex-col rounded-t-3xl'>      
       <div className='py-5 '>
        <div className='flex justify-start items-center gap-x-2 lg:gap-x-4 py-5' >
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-5xl '>
                <Logo/>
            </div>
            <img src= {Divider} alt="divider" className='h-10' />
            <p className='text-light-blue text-xs sm:text-base md:text-lg lg:text-xl w-6/12 sm:w-5/12 md:w-60 lg:w-72 '>
                Receive the undivided attention and care your problems require
            </p>
        </div>
        <div className='w-28 sm:w-36 lg:w-48'>
            <MediaBar/>
        </div>
        </div>
        <FooterMenu/>
    </div>
    <p className='text-xs text-center lg:text-lg pt-10'>&copy; 2023 Altitud All Rights Reserved.</p>
    </div>
    )
}