import React from "react";
// import contactData from "../ChatContent";
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const iconMap = {
    EnvelopeIcon: EnvelopeIcon,
    PhoneIcon: PhoneIcon,
    GlobeAltIcon: GlobeAltIcon,
};

const Footer = () => {
    return (
        <div className='fixed-footer navbar fixed-bottom navbar-light bg-light'>
            <div className="row container-fluid">
                <div className="inline row">
                    <div className="w-6 h-6 text-gray-500 size-6 inline mr-2 col-md-3" alt="">
                        <a href="" className="text-blue-500 hover:underline"></a>
                    </div>
                    <div className="w-6 h-6 text-gray-500 size-6 inline mr-2 col-md-3" alt="">
                        <a href="mailto:saiprathimaparsa@gmail.com" className="text-blue-500 hover:underline">saiprathimaparsa@gmail.com</a>
                    </div>
                    <div className="w-6 h-6 text-gray-500 size-6 inline mr-2 col-md-3" alt="">
                        <a href="tel:+16477640248" className="text-blue-500 hover:underline">+1 647-764-0248</a>
                    </div>
                    <div className="w-6 h-6 text-gray-500 size-6 inline mr-2 col-md-3" alt="">
                        <svg class="w-8 h-8 text-gray-800 hover:text-black" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49C3.77 14.91 3.33 13.6 3.33 13.6c-.36-.92-.88-1.17-.88-1.17-.72-.49.06-.48.06-.48.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.92 1.23 3.24 0 4.65-2.8 5.67-5.47 5.97.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <a href="" className="text-blue-500 hover:underline">Github</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;