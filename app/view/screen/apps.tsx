import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "アプリ一覧" },
    { name: "description", content: "た。の作ったアプリ" }
  ];
}

export default function Apps() {
  return (
    <>
      <h1>準備中</h1>
    </>
  );
}