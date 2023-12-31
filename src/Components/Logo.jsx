import cloudLogo from '../assets/cloud-logo.svg'
export default function Logo() {
    return (
        <div className=' py-4 flex gap-2 md:w-60 md:px-5'>
            <div className=''>
            <img src={cloudLogo} alt="logo" className = 'w-9 md:w-14'/>
            </div>
            <h1 className='text-2xl md:text-3xl flex items-center'>Altitud</h1>
            </div>
    )
}