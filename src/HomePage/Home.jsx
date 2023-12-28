import Navbar from './Navbar'
import Header from './Header'
import SubHeader from '../Components/SubHeader'
import rocketSvg from '../assets/rocket-launch.svg'
import ActionButton from '../Components/ActionButton'

export default function Home() {
    return (
        <div className = 'min-h-screen mx-5'>
        <Navbar navbarList = {["Home","Contact Us"]}/>
        <div className='grid grid-cols-2 grid-rows-2'>
            <Header />
            <div className='row-span-2  '>
                <img src={rocketSvg} alt="" className='w-full '/>
            </div>
            <div>
            <SubHeader text = {"Our team specializes in creating effective and engaging websites that will resonate with your audience"} />
            
            <ActionButton text = "Contact Us"/>
            </div>

           
            </div>
        </div>
    )
}