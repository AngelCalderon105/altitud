import MenuSection from "./MenuSection"
export default function FooterMenu() {

    return (
        <div className=" xl:w-10/12">
        <div className="flex flex-row flex-wrap justify-start gap-10 lg:justify-between  ">
        <MenuSection menuList = {["Contact","Altitud.io@gmail.com","714-489-3285","Orange County, CA"]}/>
        <MenuSection menuList = {["Services", "Web Design", "Maintenance","Photo Shoot","SEO Optimization"]}/>
        <MenuSection menuList = {["Legal", "Privacy Policy", "Terms of Service"]}/>
        <MenuSection menuList = {["Company", "Pricing", "About","Contact Us"]}/>
        </div>
        </div>
    )
}