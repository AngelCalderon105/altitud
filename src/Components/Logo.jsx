import cloudLogo from '../assets/cloud-logo.svg'
export default function Logo() {
    return (
        <div className=' py-3 flex gap-2 md:w-60 md:p-5'>
            <div className=''>
            <img src={cloudLogo} alt="logo" className = 'w-9 sm:w-16'/>
            </div>
            <h1 className='text-2xl sm:text-3xl flex items-center'>Altitud</h1>
            </div>
    )
}