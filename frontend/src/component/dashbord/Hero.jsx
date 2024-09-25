import background from "../../assets/images/bg-signin.jpg";
import { Button } from "@nextui-org/react";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-10 bg-soft">
                <img src={background} alt="" className="w-full md:hidden rounded-xl -mt-10" />
                <div className="relative md:w-1/2 md:-mt-11">
                    <h1 className="text-4xl font-bold font-poppins font-semibold">Neró Farm.</h1>
                    <canvas className="absolute bg-greendark w-full rounded-full h-1/2 mt-10 blur-3xl" style={{ opacity: 0.12 }}></canvas>
                    <p className="pt-7 text-justify font-poppins font-light">Neró Farm diambil dari kata Nero(Air) dan Farm(Berkebun) yang bisa diartikan secara lengkap yaitu perkebunan yang cara pertumbuhannya  lebih banyak menggunakan media air atau Hidroponik.
                        Maksud dari Situs Web Nero Farm adalah Situs berbasis Web yang menyajikan informasi mengenai Hidroponik dan Jual tanaman Hidroponik.</p>
                    <Button color="success" className="text-white mt-14 lg:mt-36 p-7 px-20 font-bold text-lg w-full drop-shadow-[0_4px_12px_rgba(255,221,40,0.2)]">
                        Let's go farm
                    </Button>
                </div>
                <div className="hidden md:w-1/2 md:flex overflow-hidden w-full rounded-xl -mt-10">
                    <img src={background} alt="" className="object-cover w-full h-full" />
                </div>
            </div>

            <div className="bg-soft flex flex-col text-center justify-center items-center pt-20">
                <h1 className="self-start font-bold text-4xl md:self-center mb-5 font-poppins font-semibold">Our Services</h1>
                <p className="md:text-center lg:mx-0 lg:pb-3 text-justify font-poppins font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis molestiae, nam voluptas nesciunt illo laborum fuga</p>
                <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap my-5 gap-4 w-full mb-16">
                    <div className="flex items-center gap-2 p-4 bg-white rounded-xl drop-shadow-md">
                        <div className="w-1/2 h-16 w-20 rounded-xl overflow-hidden flex">
                            <img src={background} alt="" className="object-cover w-full h-full" />
                        </div>
                        <p className="w-2/3 p-2 text-center font-poppins font-bold tracking-widest">Lorem
                        </p>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-white rounded-xl drop-shadow-md">
                        <div className="w-1/2 h-16 w-20 rounded-xl overflow-hidden flex">
                            <img src={background} alt="" className="object-cover w-full h-full" />
                        </div>
                        <p className="w-2/3 p-2 text-center font-poppins font-bold tracking-widest">Lorem
                        </p>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-white rounded-xl drop-shadow-md">
                        <div className="w-1/2 h-16 w-20 rounded-xl overflow-hidden flex">
                            <img src={background} alt="" className="object-cover w-full h-full" />
                        </div>
                        <p className="w-2/3 p-2 text-center font-poppins font-bold tracking-widest">Lorem
                        </p>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-white rounded-xl drop-shadow-md">
                        <div className="w-1/2 h-16 w-20 rounded-xl overflow-hidden flex">
                            <img src={background} alt="" className="object-cover w-full h-full" />
                        </div>
                        <p className="w-2/3 p-2 text-center font-poppins font-bold tracking-widest">Lorem
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}