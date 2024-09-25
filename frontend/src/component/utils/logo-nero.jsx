import logo from "../../assets/images/logo.png";

export default function LogoNero() {
    return (
        <>
            <div className="w-full">
                <img
                    src={logo}
                    alt="logo"
                    className="bg-soft hidden" width={150}
                />
                <img
                    src={logo}
                    alt="logo"
                    className="bg-soft" width={100}
                />
            </div>
        </>
    );
}