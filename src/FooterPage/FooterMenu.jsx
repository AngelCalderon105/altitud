import MenuSection from "./MenuSection"
export default function FooterMenu() {

    return (
        <div className=" xl:w-11/12">
        <div className="flex flex-row flex-wrap justify-between gap-10 lg:justify-around">
        <MenuSection menuList = {["Contact","Altitud.io@gmail.com","714-489-3285","Orange County, CA"]}/>
        <MenuSection menuList = {["Services", "Web Design", "Maintenance","Photo Shoot","SEO Optimization"]}/>
        <MenuSection menuList = {["Legal", "Privacy Policy", "Terms of Service"]}/>
        <MenuSection menuList = {["Company", "Pricing", "About","Contact Us"]}/>
        </div>
        </div>
    )
}