import logo from "./logo.svg";

export function HomeMain() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[100vh] max-h-[100vh]">
      <h1 className="text-center font-bold text-sm">た。のホームページ</h1>
      <img src={logo} className="w-[110%] sm:w-[40%] mt-4 mb-16" alt="logo" />
      <ul className="font-bold text-xl flex flex-col gap-3 w-24 text-center">
        <li className="stalker-target"><a href="/profile" className="block">Profile</a></li>
        <li className="stalker-target"><a href="/photos" className="block">Photos</a></li>
        <li className="stalker-target"><a href="/apps" className="block">Apps</a></li>
      </ul>
    </main>
  );
}
