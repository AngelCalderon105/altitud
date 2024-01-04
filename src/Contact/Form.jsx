export default function Form() {
    return(
   
       <form action=""  className="  bg-white rounded-xl m-5 pr-8">
        <ul className="text-black flex flex-col w-full justify-around pr-10 pl-10">
            <li className="flex flex-col py-1 border-2">
                <label htmlFor="customerName">Full Name</label>
                <input type="text" className=" bg-lightest-blue" placeholder="Your Name" id="customerName"/>
            </li>
            <li className="flex flex-col py-1">
                <label htmlFor="customerEmail">Your Email</label>
                <input type="text" className="bg-lightest-blue" placeholder="Your Name" id="customerEmail"/>
            </li>
            <li className="flex flex-col py-1">
                <label htmlFor="Timeline">Timeline for Project</label>
               <select multiple  id="Timeline" className="bg-lightest-blue">
               <option value="option1">1 month</option>
               <option value="option2">1-2 months</option>
               <option value="option3">2-4 months</option>
               <option value="option4">4-6 months</option>
               </select>
            </li>
            <li className="flex flex-col py-1">
                <label htmlFor="customerDescription">Description</label>
                <input type="text" className="bg-lightest-blue p-5" placeholder="Tell us about your website." id="customerDescription"/>
            </li>
        </ul>
        <div className="flex justify-center">
        <button className="bg-purple-blue rounded-md p-1.5 m-2">Submit</button>
        </div>
       </form>
   
    )
}