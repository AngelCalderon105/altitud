import MenuLink from "./MenuLink"
import MenuTitle from "./MenuTitle"
export default function MenuSection({menuList}) {

    return (
        <ul>
            {menuList.map((item,index) => (
                <li key = {index} className="py-1 ">
                    {index === 0 ? <MenuTitle sectionTitle = {item}/> :
                   <MenuLink directoryLink = {item}/>}
                   
                </li>
            ))}
        </ul>
        )
}