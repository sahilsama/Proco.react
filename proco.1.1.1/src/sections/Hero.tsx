import Button from "@/components/button";
// import text from "@/components/text";

export default function Hero(){
    return <section className="py-24">
        <div className="container">
        <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full text-neutral-950 font-semibold">
                    📌Launching soon 
                </div>
                </div>
            <h1 className="text-7xl font-medium text-center mt-7">Proco 
                <p className="text-4xl font-medium text-center mt-6"></p>
            </h1>
            </div>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Everyone Don&apos;t Miss Opportunity. A Rental Aggreagtor App for all task, Reduces your locomotion by 100%
            </p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                <input
                    type="email "
                    placeholder="Enter your email"
                    className="bg-transparent px-4 md:flex-1"
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="whitespace-nowrap"
                    size="sm"
                >
                    Sign Up
                </Button>
            </form>
        
    </section>
}