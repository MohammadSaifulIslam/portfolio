import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BlogCard from './BlogCard/BlogCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (

   <Element name='blog'> 
         <section id='blog' className='py-20 bg-secondary'>
            <div className='my-container'>
                <SectionTitle
                    subTitle={'My Blogs'}
                    title={'Latest Post'}
                ></SectionTitle>
                <div className='mt-20'>
                    {
                        blogs.slice(3, 4).map(blogData => <div
                            key={blogData.id}
                            className='grid md:grid-cols-2 gap-10'
                        >
                            <img src={blogData.image} alt="blog image" className='rounded-xl h-96 w-full object-cover' />
                            <div className='text-white my-auto'>
                                <h2 className='text-2xl font-semibold'>{blogData.title}</h2>
                                <div className="flex justify-between mt-10 mb-5 text-white">
                                    <p>April 10, 2023</p>
                                    <p>min {blogData.readingMinutes}</p>
                                </div>
                                <p className='text-neutral'>{blogData.blog.slice(0, 415)}.</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className='mt-10 text-white grid md:grid-cols-3 gap-5'>
                    {
                        blogs.slice(0, 3).map(blogData => <BlogCard
                            key={blogData.id}
                            blogData={blogData}
                        ></BlogCard>)
                    }
                </div>
            </div>
        </section>
   </Element>

    );
};

export default Blog;