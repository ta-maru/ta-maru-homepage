import type { Route } from "./+types/home";
import AppMain from "../container/appMain/appMain";
import Header from "../container/header/header";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "アプリ一覧" },
    { name: "description", content: "た。の作ったアプリ" }
  ];
}

export default function Apps() {
  return (
    <>
      <AppMain />
    </>
  );
}