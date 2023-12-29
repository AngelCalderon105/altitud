import MenuSection from "./MenuSection"
export default function FooterMenu() {

    return (
        <div className="flex justify-center flex-wrap">
        <div className="grid grid-cols-2 col-span-2 gap-10 text-sm py-5 sm:grid-cols-4 lg:gap-x-20">
        <MenuSection menuList = {["Contact","Altitud.io@gmail.com","714-489-3285","Orange County, CA"]}/>
        <MenuSection menuList = {["Services", "Web Design", "Maintenance","Photo Shoot","SEO Optimization"]}/>
        <MenuSection menuList = {["Legal", "Privacy Policy", "Terms of Service"]}/>
        <MenuSection menuList = {["Company", "Pricing", "About","Contact Us"]}/>
        </div>
        </div>
    )
}