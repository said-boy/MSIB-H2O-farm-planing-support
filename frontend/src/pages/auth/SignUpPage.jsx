import SignUp from "../../component/auth/SignUp";
import background from "../../assets/images/bg-signin.jpg";
import logo from "../../assets/images/logo.png";

export default function SignUpPage() {
  return (
    <div
      className="w-100 h-screen"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={logo}
        alt="logo"
        className="fixed -top-24 -left-10" width={300}
      />
      <div
        className="flex justify-center items-center h-screen pe-10"
        style={{
        }}
      >
        <SignUp />
      </div>
    </div>
  );
}
