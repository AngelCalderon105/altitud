import Logo from '../Components/Logo'
import Divider from '../assets/FooterDivider.svg'
import MediaBar from './MediaBar'
import FooterMenu from './FooterMenu'
export default function Footer () { 
    return ( 
        <div className='bg-footer-bg  text-white font-times flex flex-col p-4'>
    <div className=' flex flex-col lg:flex-row rounded-t-3xl  '>      
       <div>
        <div className=' flex justify-start items-center gap-x-2 lg:py-6 lg:gap-x-4' >
            <div className='text-3xl lg:text-5xl'>
                <Logo/>
            </div>
            <img src= {Divider} alt="divider" />
            <p className='text-light-blue text-xs w-5/12 sm:w-3/12 md:text-sm lg:text-lg lg:w-5/12'>
                Receive the undivided attention and care your problems require
            </p>
        </div>
        <div className='flex w-5/12 sm:w-2/12 lg:w-3/12'>
            <MediaBar/>
        </div>
        </div>
        <FooterMenu/>
        <div className=''>
     
      </div> 
    </div>
    <p className='text-xs justify-start lg:text-lg'>&copy; 2023 Altitud All Rights Reserved.</p>
    </div>
    )
}