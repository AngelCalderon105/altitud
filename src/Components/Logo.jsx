import cloudLogo from '../assets/cloud-logo.svg'
export default function Logo() {
    return (
        <div className = 'flex jusitfy-center items-center gap-2  max-w-max'>
            <img src={cloudLogo} alt="logo" className = 'w-10 '/>
            <h1>Altitud</h1>
        </div>
    )
}