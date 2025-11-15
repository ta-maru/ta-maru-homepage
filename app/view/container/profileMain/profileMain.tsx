import Paragraph from "~/view/component/paragraph";
import Splitter from "~/view/component/splitter";
import SnsLink from "./snsLink";

import cameraSnsLogo from "./camera_logo.jpg";
import devSnsLogo from "~/view/share/logo.svg";
import marshmallowLogo from "./marshmallow_logo.svg";


export function ProfileMain() {
    return (
        <main className="max-w-2xl m-auto mt-8 mb-4 pl-8 pr-8">
            {/* introduction */}
            <div className="flex gap-4 sm:flex-row flex-col items-center">
                <div className="flex-1 max-w-32">
                    <img src={cameraSnsLogo}
                        className="aspect-square rounded-full object-cover" />
                </div>
                <div className="flex-2 flex flex-col justify-center
                text-center sm:text-left">
                    <Paragraph text={"た。です。\nたまると読みます。\n"} />
                    <Paragraph text={"主に2足歩行をしています。\n写真撮ったり、アプリ作ったりもします。"} />
                </div>
            </div>

            <Splitter />

            <div className="w-full m-auto">
                {/* 撮影依頼について */}
                <div className="mt-16 mb-16">
                    <h3 className="font-bold text-xl text-center mt-4 mb-4">撮影依頼について</h3>
                    <Paragraph text={"愛知中心です。\n関西は割と行きます。"} />
                    <Paragraph text={"土日祝休みです。"} />
                    <Paragraph text={"トラブル回避のため、未成年の方の個撮は受け付けておりません。"} />
                </div>

                {/* データの取り扱い */}
                <div className="mt-16 mb-16">
                    <h3 className="font-bold text-xl text-center mt-4 mb-4">データの取り扱い</h3>
                    <Paragraph text={"現像後の写真をお使いください。"} />
                    <Paragraph text={"現像に1枚1枚時間をかけたいため、30~50枚ほどを目安にこちらで選んでお渡ししています。\nそれ以外の写真は、お渡しする撮って出し写真の中から選んでいただければ現像します。（遠慮なく！）"} />
                    <Paragraph text={"トリミングや傾き調整などは自由にして構わないです。\n元の写真から大きく雰囲気が変わるような加工は、一度相談いただけると嬉しいです。"} />
                </div>
                {/* アプリ・Webページについて */}
                <div className="mt-16 mb-16">
                    <h3 className="font-bold text-xl text-center mt-4 mb-4">アプリ・Webページについて</h3>
                    <Paragraph text="要望・お気づきの点があれば、DMやマシュマロなどでお知らせいただけると助かります。" />
                    <Paragraph text="褒めると伸びるタイプです。" />
                </div>

                {/* links */}
                <div className="mt-16 mb-16">
                    <h3 className="font-bold text-xl text-center mt-4 mb-4">SNS</h3>
                    <div className="flex gap-16 justify-center flex-wrap">
                        <SnsLink to="https://x.com/ta_maru_camera" imgSrc={cameraSnsLogo} label="X(カメラ)" />
                        <SnsLink to="https://x.com/ta_maru_net" imgSrc={devSnsLogo} label="X(開発)" />
                        <SnsLink to="https://marshmallow-qa.com/
z8n4nlo6ddukcni" imgSrc={marshmallowLogo} label="マシュマロ" />
                    </div>
                </div>
            </div>
        </main>
    );
}