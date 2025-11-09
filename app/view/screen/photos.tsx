import type { Route } from "../../routes/+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "た。の写真" },
    { name: "description", content: "た。撮った写真のポートフォリオ" }
  ];
}

export default function Photos() {
  return (
    <>
      <h1>準備中</h1>
    </>
  );
}