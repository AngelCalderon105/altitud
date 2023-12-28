import cloudLogo from '../assets/cloud-logo.svg'
export default function Logo() {
    return (
        <div className='flex justify-center gap-2 w-60 p-5'>
            <div className=''>
            <img src={cloudLogo} alt="logo" className = 'w-16'/>
            </div>
            <h1 className='text-3xl flex items-center'>Altitud</h1>
            </div>
    )
}