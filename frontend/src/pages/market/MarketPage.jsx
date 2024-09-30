import LogoNero from "../../component/utils/logo-nero";
import Menu from "../../component/utils/Menu";

export default function MarketPage() {
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
        </>
    );
}