import Link from "next/link";
import {Fragment} from "react";

export default function Hero({title,subtitle,button,buttonLink,image}) {

    return(
        <Fragment>

            {/* Hero Background */}
            <div className="h-screen bg-back-2 bg-cover" id="header">
                {/* Hero Container */}
                <div className="container flex justify-center">
                    {/* Horizontal Margin and Padding */}
                    <div className="pt-[13rem] md:pt-[15rem] lg:pt-[16rem]">
                        {/* Vertical Margin and Padding */}
                        <div className="lg:px-[10rem] 2xl:px-[12rem]">


                            <div className="text-center text-neutral-100 animate-slide-from-opacity">
                                {/* Text Wrapper */}
                                <div className="space-y-10">
                                    
                                    {/* Hero Title */}
                                    <div className="lg:px-12 slide-from-opacity">
                                        <div className="text-4xl lg:text-5xl 2xl:text-6xl">
                                            <div className="font-bold leading-tight">
                                                {title}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Hero Subtitle */}
                                    <div className="lg:px-24">
                                        <div className="text-lg">
                                            {subtitle}
                                        </div>
                                    </div>
                                    
                                    {/* Hero Button */}
                                    <div>
                                        <Link href="/contact" >
                                            <button type="button" className="bg-sky-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 mt-4 w-[14rem] uppercase">
                                                {button}
                                            </button>
                                        </Link>
                                    </div>
                                

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
