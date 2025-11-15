import { Link } from "react-router";

import Paragraph from "~/view/component/paragraph";


interface SnsLinkProps {
    to: string;
    imgSrc: string;
    label: string;
}

export default function SnsLink({ imgSrc, to: linkUrl, label }: SnsLinkProps) {
    return (
        <>
            <Link to={linkUrl} 
            className="flex flex-col items-center">
                <div className="rounded-full max-w-16 shadow-md/20 mb-2 p-2 aspect-square stalker-target">
                    <img src={imgSrc} alt={label} 
                    className="aspect-square rounded-full w-full object-contain fill-black inset-shadow-sm/20 bg-white" />
                </div>
                <Paragraph text={label} className="text-xs" />
            </Link>
        </>
    )
}