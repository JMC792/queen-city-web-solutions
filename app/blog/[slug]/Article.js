import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import calendar from "public/icons/calendar.svg"
import person from "public/icons/person.svg"
import arrow from "public/icons/arrow.svg"

export default function Article(props){

    return(
        <Fragment>
            {/* About */}
            <article className="container py-20">
                <div className="grid">

                    <div className="flex flex-col items-center gap-y-4 py-10">
                        
                        {/* Subheading */}
                        <div className=" text-purple-700">
                            <h2 className="text-lg font-medium uppercase">
                                {props.type}
                            </h2>
                        </div>

                        {/* Title */}
                        <div className="lg:px-24">
                            <div className="font-bold leading-tight capitalize text-2xl lg:text-[2.5rem] text-center">
                            {props.name.split(':').map((line, index, array) =>
                                index === array.length - 1 ? line : <>
                                    {line}
                                    <br />
                                </>
                            )}
                            </div>
                        </div>

                        {/* Date & Author */}
                        <div className="flex justify-center gap-x-4 text-gray-500">
                            {/* Date */}
                            <div className="flex items-center gap-x-1">
                                <Image src={calendar} width={20} alt="calendar icon"/>
                                <p className="">
                                    {props.date}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-x-1">
                                <Image src={person} width={25} alt="Person Icon"/>
                                <p>
                                    {props.author}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Image */}
                    <div className="flex justify-center">
                        <Image src={props.image} alt="2 people" width={1000} height={300} className="rounded-xl" decoding="async"/>
                    </div>

                    {/* Paragraphs Wrapper */}
                    <div className="container">
                        {/* Vertical Padding */}
                        <div className="py-10 tracking-tight">
                            {/* Horizontal Padding */}
                            <div className="lg:px-10">
                                {/* Layout */}
                                <div className="grid gap-y-8">
                                    {/* Paragraph */}
                                    {Object.keys(props.content).map((key) => {
                                        return (
                                            <p key={key} className="text-md text-neutral-800 indent-5 lg:px-24">
                                                {props.content[key]}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center hover:scale-125 hover:duration-300">
                        <Link href="/blog" className="flex items-center">
                            <Image src={arrow} width={20} alt="Arrow Back"/>
                            <div className="text-purple-700">View All Posts</div>
                        </Link>
                        
                    </div>
                    
                </div>
            </article>
        </Fragment>
    )
}