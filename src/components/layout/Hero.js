import Image from "next/image";
import Right from "../Icons/right";

export default function Hero() {
    return (
        <section className="grid">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">Fries Worth the Hype!</h1>
                <p className="my-4 text-gray-500">Step into Fry Heaven, Where Every Bite is a Perfectly Crispy, Golden Experience That Keeps You Coming Back for More!</p>

                <div className="flex gap-4 text-sm">
                    <button className="bg-primary flex items-center gap-2 text-white uppercase text-sm px-4 py-2 rounded-full">Place Order
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">Learn More
                        <Right/>
                    </button>
                </div>

            </div>




            <div className=" relative">

                {/* check on image  */}
                <Image src={'/fries8.jpg'} alt={'hotfries'}
                    layout={'fill'}
                    objectFit={'contain'}
                />

                {/* <Image 
                    src="/fries.jpg" 
                    alt="hotfries"
                    fill // This replaces the `layout="fill"`
                    style={{ objectFit: 'cover' }} // Use CSS for object-fit
                /> */}
            </div>



        </section>
    );
}
