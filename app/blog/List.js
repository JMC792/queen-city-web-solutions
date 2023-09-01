import { Fragment } from "react";
import Post from "./Post";
import Link from "next/link";
import Image from "next/image";

export default function Blog(props) {
    return (
    <Fragment>
        <div className="bg-neutral-50">
        <div className="container py-20 xl:px-[10rem] 2xl:px-[15rem]" id="team">
            <div className="grid gap-y-5">
            {/* Blog Posts */}
            <div className="pt-12">
                <div className="grid gap-y-10 lg:grid-cols-3 gap-x-8">
                    {Object.keys(props.blogData).map((key) => {
                        const blog = props.blogData[key];
                        return (
                            <div key={props.key}>
                                <Link href={`/blog/${blog.slug}`}>
                                    <div className="cursor-pointer">
                                        <Image 
                                            src={blog.image} 
                                            alt={blog.alt} 
                                            height={3000} 
                                            width={400} 
                                            className="rounded-xl hover:duration-300 hover:scale-105"
                                        />
                                        <div className="pt-4 grid gap-y-1 text-neutral-900">
                                            <div className="text-md font-medium uppercase">{blog.type}</div>
                                            <div className="text-xl font-bold capitalize">{blog.name}</div>
                                            <div className="">{blog.date}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>
        </div>
        </div>
    </Fragment>
    );
}
