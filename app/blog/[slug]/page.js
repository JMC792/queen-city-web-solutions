import { Fragment } from "react";
import Hero3 from "./Hero3.js";
import en from "dictionaries/en.json"
import Article from "./Article.js";
import about4 from "public/images/arianeMacias.jpg"
import { getBlogBySlug } from "lib/api";

export const metadata = {
    title: "Post",
    description: '...',
}

export default function Page({params}){

    const blogPost = getBlogBySlug({params});

    if (!blogPost) {
    return <div>Blog post not found</div>;
    }

    return(
        <Fragment>
            <Hero3
                heroTitle={en.blog.post.hero.title}
                slug= {params.slug}
                heroSubtitle={en.blog.post.hero.subtitle}
            />
            <Article 
                slug={blogPost.slug}
                type={blogPost.type}
                name={blogPost.name}
                sentence={blogPost.sentence}
                date={blogPost.date}
                author={blogPost.author}
                title={blogPost.title}
                content={blogPost.content}
                image={blogPost.image}
            />
        </Fragment>
    )
}