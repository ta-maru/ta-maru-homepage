import AppItem from "~/view/component/appItem"

import waquImg from "./waqu-logo.svg"

export default function AppMain() {

    return (
        <main className="m-auto mt-8 mb-4 pl-8 justify-items-center pr-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <AppItem to="https://waqu.ta-maru.net/" imgSrc={waquImg} appName="Waqu" description="簡単に画像に枠をつけることができるアプリ。チェキ風・シネマ風など、テンプレートから選択可能。" />
            </div>
        </main>
    )
}