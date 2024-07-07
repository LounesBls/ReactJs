import featureData from "./featueData";

const Features = () => {
    return (
        <section className="container mx-auto px-4 my-10">
            <div className="features flex justify-around items-start flex-wrap md:flex-nowrap gap-6">
            {
                featureData.map((feat, index) => 
                    <div className="single_feature text-center" key={index}>
                        <h2 className="w-full flex justify-center items-start">{feat.svg}</h2>
                        <h4 className="capitalize font-semibold pt-2 pb-1">{feat.title}</h4>
                        <p className="opacity-70 text-balance leading-8">
                            {feat.description}
                        </p>
                </div>
                )
            }
            </div>
        </section>
    );
};

export default Features;