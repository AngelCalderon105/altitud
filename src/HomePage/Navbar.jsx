import Logo from '../Components/Logo'
import ActionButton from '../Components/ActionButton'
import NavbarItem from './NavbarItem'
export default function NavBar({navbarList}) {
    return (
        <nav className='bg-dark-blue fixed top-0 left-0 w-full z-50'>
            <div className='flex justify-center items-center md:px-5 '>
                <Logo/>
            </div>
            <div className='absolute top-3.5 left-4 w-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        
            <div className=' hidden sm:flex sm:justify-between sm:w-full'>
                <ul className='flex items-center text-lg'>
                    {navbarList.map((item,index) =>(
                    <li key = {index}> 
                        <NavbarItem itemName = {item}/>
                    </li>
        ))}
        </ul>
        <div className='px-4'>
        <ActionButton text = "Let's Connect"/>
        </div>
        </div>
        </nav>
    )
}