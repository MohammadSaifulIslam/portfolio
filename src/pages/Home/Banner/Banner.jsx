const Banner = () => {
    return (
        <section className="bg-secondary">
            <div className="my-container h-[calc(100vh-96px)]  text-left flex flex-col justify-center text-white space-y-4">
                <h4 className="text-xl text-primary font-medium">Hello, I am </h4>
                <h1 className="text-7xl font-bold">MD. Saiful Islam</h1>
                <h2 className="text-6xl font-semibold text-neutral">I love to know the unknown.</h2>
                <div className="md:w-1/2 space-y-3">
                    <p className="text-neutral">I'm a dedicated front-end web developer with a passion for crafting captivating user interfaces and delightful digital experiences.</p>
                    <p className="text-neutral">I specialize in turning designs into pixel-perfect, interactive web applications that engage users and leave a lasting impression. With a deep love for coding and a curiosity for pushing the boundaries of web development, I am dedicated to creating exceptional digital experiences.</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;