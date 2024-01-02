import Logo from '../Components/Logo'
import ActionButton from '../Components/ActionButton'
import NavbarItem from './NavbarItem'
export default function NavBar({navbarList}) {
    return (
        <nav className='bg-dark-blue md:bg-transparent fixed md:absolute top-0 left-0 w-full z-50 md:flex '>
            <div className='text-3xl flex justify-center items-center md:justify-start py-4 md:px-5 md:w-60'>
                <Logo textSize = "text-2xl md:text-3xl flex items-center" logoSize='w-9 md:w-14'/>
            </div>
            <div className='absolute top-3.5 left-3 w-8 md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        
            <div className=' hidden md:flex md:justify-between md:w-full'>
                <ul className='flex items-center text-lg'>
                    {navbarList.map((item,index) =>(
                    <li key = {index}> 
                        <NavbarItem itemName = {item}/>
                    </li>
                     ))}
        </ul>
        <div className='px-4 md:flex md:items-center'>
        <ActionButton text = "Let's Connect"/>
        </div>
        </div>
        </nav>
    )
}