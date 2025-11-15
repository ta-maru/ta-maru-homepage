import type { Route } from "./+types/home";
import { HomeMain } from "../container/homeMain/homeMain";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "た。のホームページ" },
    { name: "description", content: "た。（たまる）といいます。写真撮ったり、アプリ作ったり。" },
  ];
}

export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  );
}
