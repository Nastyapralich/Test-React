type LoginIconProps = {
    onClick?:()=> void
}

export const LoginIcon = (props:LoginIconProps) => {
    return (
        <div onClick={props.onClick}>
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_27_14094)">
<rect x="2" y="2" width="23" height="24" rx="5" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 7C25 4.23858 22.7614 2 20 2H7C4.23858 2 2 4.23858 2 7V21C2 23.7614 4.23858 26 7 26H20C22.7614 26 25 23.7614 25 21V7ZM4.2999 14C4.2999 8.72 8.4399 4.4 13.4999 4.4C18.5599 4.4 22.6999 8.72 22.6999 14C22.6999 19.28 18.5599 23.6 13.4999 23.6C8.4399 23.6 4.2999 19.28 4.2999 14ZM16.2599 10.16C16.2599 8.57692 15.017 7.28 13.4999 7.28C11.9828 7.28 10.7399 8.57692 10.7399 10.16C10.7399 11.7431 11.9828 13.04 13.4999 13.04C15.017 13.04 16.2599 11.7431 16.2599 10.16ZM8.67146 16.7298C7.9289 17.4153 8.2396 18.5617 8.9644 19.266C10.1522 20.4202 11.7463 21.1446 13.4999 21.1446C15.2518 21.1446 16.8446 20.4189 18.032 19.2674C18.759 18.5624 19.0707 17.4138 18.326 16.7276C17.1717 15.664 14.8514 15.0938 13.4999 15.0938C12.1475 15.0938 9.82499 15.6648 8.67146 16.7298Z" fill="#2F80ED"/>
</g>
<defs>
<filter id="filter0_d_27_14094" x="0" y="0" width="31" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.184314 0 0 0 0 0.501961 0 0 0 0 0.929412 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_14094"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_14094" result="shape"/>
</filter>
</defs>
</svg>
        </div>
    )
}