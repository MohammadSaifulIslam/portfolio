const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-white text-center uppercase relative">
            <h2 className="sub-title text-6xl md:text-[110px]">{subTitle}</h2>
            <h4 className="absolute text-3xl md:text-[54px] font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h4>
        </div>
    );
};

export default SectionTitle;