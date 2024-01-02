import cloudLogo from '../assets/cloud-logo.svg'
export default function Logo({logoSize , textSize}) {
    return (
        <div className = 'flex jusitfy-center items-center gap-2  max-w-max'>
            <img src={cloudLogo} alt="logo" className = {logoSize}/>
            <h1 className={textSize}>Altitud</h1>
        </div>
    )
}