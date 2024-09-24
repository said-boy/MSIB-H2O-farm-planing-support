import Signin from "../../component/auth/SignIn";
import background from "../../assets/images/bg-signin.jpg";
import logo from "../../assets/images/logo.png";

export default function SigninPage() {
  return (
    <div
      className="w-100 h-screen"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "scaleX(-1)",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          transform: "scaleX(-1)",
        }}
        className="fixed -top-24 -right-10" width={300}
      />
      <div
        className="flex justify-center items-center h-screen pe-10"
        style={{
          transform: "scaleX(-1)",
        }}
      >
        <Signin />
      </div>
    </div>
  );
}
