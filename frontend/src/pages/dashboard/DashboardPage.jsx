import LogoNero from "../../component/utils/logo-nero";
import Hero from "../../component/dashbord/Hero";
import Excess from "../../component/dashbord/Excess";
import Review from "../../component/dashbord/Review";
import ContactUs from "../../component/dashbord/ContactUs";
import Menu from "../../component/utils/Menu";

export default function DashboardPage() {
    return (
        <>
            <div className="flex justify-center fixed w-full bottom-4 z-50 pt-2">
                <div className="bg-white rounded-xl">
                    <Menu />
                </div>
            </div>
            <div className="px-9 bg-soft">
                <div className="mb-20 pt-8">
                    <LogoNero />
                </div>
                <div className="mb-20">
                    <Hero />
                </div>
            </div>
            <div className="bg-white mb-5">
                <Excess />
            </div>
            <div className="bg-soft px-9 pt-5">
                <h1 className="font-bold text-4xl pb-4 py-5 mb-5 font-poppins font-semibold md:text-center lg:my-10">Our Client.</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
            <canvas className="bg-success -mt-20 h-32 w-full">p</canvas>
            <div className="bg-white px-9 mt-4 flex lg:justify-center">
                <ContactUs />
            </div>
            <canvas className="bg-success h-[12rem] -mt-24 w-full"></canvas>
        </>
    );
}