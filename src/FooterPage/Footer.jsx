import Logo from '../Components/Logo'
import Divider from '../assets/FooterDivider.svg'
import MediaBar from './MediaBar'
import FooterMenu from './FooterMenu'
export default function Footer () { 
    return ( 
        <div className='bg-footer-bg  text-white font-times flex flex-col p-4 sm:p-8 lg:pl-20 md:pt-10 rounded-t-3xl'>
    <div className=' flex flex-col justify-between lg:flex-row '>      
       <div className='flex flex-col'>
        <div className='flex justify-start items-center gap-x-2 lg:gap-x-4 pb-5' >
            <div className='text-2xl sm:text-3xl '>
                <Logo/>
            </div>
            <img src= {Divider} alt="divider" className='h-10 lg:w-2 lg:h-14' />
            <p className='text-light-blue text-xs sm:text-sm  w-6/12 sm:w-4/12 md:w-3/12 lg:w-6/12 '>
            Receive the undivided attention and care that your problems need
            </p>
        </div>
        <div className='w-28 sm:w-36 lg:w-40 pb-5'>
            <MediaBar/>
        </div>
        </div>
        <div className='w-full'>
        <FooterMenu/>
        </div>
    </div>
    <p className='text-xs text-center lg:text-left lg:text-lg pt-10'>&copy; 2023 Altitud All Rights Reserved.</p>
    </div>
    )
}