import LogoNero from "../../component/utils/logo-nero";
import Menu from "../../component/utils/Menu";
import Plan from "../../component/farm/Plan";
import Schedule from "../../component/farm/Schedule";
import Calendar from "../../component/farm/Calendar";

export default function FarmPage() {
    return (
        <>
            <div className="flex justify-center fixed w-full bottom-4 z-50 pt-2">
                <div className="bg-white rounded-xl">
                    <Menu />
                </div>
            </div>
            <div className="px-9 bg-soft">
                <div className="pt-8">
                    <LogoNero />
                </div>
            </div>
            <div className="bg-soft px-9 pt-5 pb-24">
                <h1 className="text-4xl font-bold font-poppins font-semibold mt-5">Hi Nolan,</h1>
                <div className="py-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-full">
                        <Plan />
                    </div>
                    <div className="xl:w-1/2">
                        <Schedule />
                    </div>
                </div>
                <Calendar />
            </div>
        </>
    );
}