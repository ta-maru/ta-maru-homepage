import { Link } from "react-router";
import Paragraph from "./paragraph";

interface AppItemProps {
    to: string;
    imgSrc: string;
    appName: string;
    description: string;
}

export default function AppItem({ to, imgSrc, appName, description: text }: AppItemProps) {
    return (
        <>
            <Link to={to} 
            className="block bg-[#D34D00]
            min-w-48 max-w-72 min-h-12 rounded-xl 
            group">
                <div className="bg-white
                w-full h-full rounded-xl 
                pl-4 pr-4 pt-4 pb-4
                sm:group-hover:-translate-4 transition-transform duration-200 stalker-target
                shadow-xl">
                    <div className="bg-gray-300 w-full h-48 
                    p-4 mb-4">
                        <img src={imgSrc} className="w-full h-full object-contain" />
                    </div>
                    <Paragraph text={appName} className="text-center font-bold" />
                    <Paragraph text={text} />
                </div>
            </Link>
        </>
    )
}