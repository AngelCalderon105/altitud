import LinkedInSvg from '../assets/LinkedIn.svg'
import Tiktok from '../assets/Tiktok.svg'
import Twitter from '../assets/Twitter.svg'
import Instagram from '../assets/Instagram.svg'
import MediaIcon from './MediaIcon'
export default function MediaBar() {

    return (
     <div className='flex items-center gap-x-2'>
     <MediaIcon icon ={LinkedInSvg}/>
     <MediaIcon icon ={Tiktok}/>
     <MediaIcon icon ={Twitter}/>
     <MediaIcon icon ={Instagram}/>
     </div>   
    )
}