import Button from "@/components/button";
import text from "@/components/text";

export default function Hero(){
    return <section className="py-24">
        <div className="container">
            <div className="flex-jutify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full text-neutral-950 font-semibold">
                    ✨Launching soon...
                </div>
            </div>
            <h1 className="text-7xl font-medium text-center mt-7">Proco 
                <h2 className="text-4xl font-medium text-center mt-6">A Rental Aggreagtor App for all task, Reduces your locomotion by 100%</h2>
            </h1>
            <p className="text-center text-xl text-white/50 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, inventore.</p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 ">
                <input
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-transparent px-4"
                    />
                <Button type="submit" variant={"primary"} 
                className="whitespace-nowrap"
                >
                    Sign up
                </Button>
            </form>
        </div>
    </section>
}