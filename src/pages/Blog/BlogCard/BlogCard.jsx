const BlogCard = ({blogData}) => {
    const {image,readingMinutes,title } = blogData
    return (
        <div className="">
            <img src={image} alt="blog image" className="w-full h-56 object-cover rounded-md" />
            <div>
                <div className="flex justify-between mt-5 text-neutral">
                <p>April 10, 2023</p>
                <p>min {readingMinutes}</p>
                </div>
                <h3 className="text-xl font-semibold mt-5">{title}</h3>
            </div>
        </div>
    );
};

export default BlogCard;