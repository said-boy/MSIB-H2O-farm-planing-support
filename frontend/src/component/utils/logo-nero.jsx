import logo from "../../assets/images/logo.png";

export default function LogoNero() {
    return (
        <div className="sticky top-0 w-full bg-soft">
            <img
                src={logo}
                alt="logo"
                className="bg-soft -top-16 -left-8" width={200}
            />
        </div>
    );
}