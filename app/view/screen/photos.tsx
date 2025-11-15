import type { Route } from "./+types/home";

import GettingReady from "./gettingReady";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "た。の写真" },
    { name: "description", content: "た。撮った写真のポートフォリオ" }
  ];
}

export default function Photos() {
  return (
    <>
      <GettingReady />
    </>
  );
}