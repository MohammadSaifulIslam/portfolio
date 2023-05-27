import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Blog = () => {
    return (
        <section className='py-20 bg-secondary'>
           <div className='my-container'>
                <SectionTitle
                subTitle={'My Blogs'}
                title={'Latest Post'}
                ></SectionTitle>
           </div>
        </section>
    );
};

export default Blog;