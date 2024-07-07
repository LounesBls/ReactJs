

export default function NewsLetter () {
    return (
        <section className="container mx-auto px-4 mt-10">
            <div className="h-48 bg-[#17bf9e] py-4 flex flex-col justify-center items-center gap-2 rounded-lg">
                <h2 className="font-bold text-2xl text-white capitalize text-center">subscribe our newsletter</h2>
                
                <div className="w-9/12 my-4 mx-auto bg-white text-center rounded-full">
                    <input type="text" placeholder="let us a letter" className="w-32 sm:w-7/12 me-2 py-1 px-4 border-2 border-teal-50 rounded-full focus:outline-none " />
                    <button type="submit" className="w-24 sm:w-32 bg-teal-500 capitalize hover:text-white px-4 py-1 rounded-full" >subscribe</button>
                </div>    
            </div>
        </section>
    );
};