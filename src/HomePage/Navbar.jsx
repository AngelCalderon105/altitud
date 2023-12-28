import Logo from '../Components/Logo'
import ActionButton from '../Components/ActionButton'
import NavbarItem from './NavbarItem'
export default function NavBar({navbarList}) {
    return (
        <nav className='flex items-center'>
        <Logo/>
        <div className='flex justify-between w-full'>
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