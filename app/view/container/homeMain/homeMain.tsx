import logo from "../../share/logo.svg";
import { Link } from "react-router"; 


export function HomeMain() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen max-h-screen">
      <h1 className="text-center font-bold text-sm">た。のホームページ</h1>
      <img src={logo} className="w-[110%] sm:w-[40%] mt-4 mb-16" alt="logo" />
      <ul className="flex flex-col gap-3 font-bold text-xl">
        <Link to="/profile" className="w-24 text-center stalker-target">Profile</Link>
        <Link to="/apps" className="w-24 text-center stalker-target">Apps</Link>
        <Link to="/photos" className="w-24 text-center stalker-target">Photos</Link>
      </ul>
    </main>
  );
}
