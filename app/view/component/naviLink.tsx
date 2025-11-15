import { Link } from "react-router";

interface NaviLinkProps {
    text: string;
    to: string;
    onClick?: () => void;
}

export default function NaviLink({ text, to, onClick }: NaviLinkProps) {
    return (
        <Link to={to} onClick={onClick} className="stalker-target font-bold text-lg z-1">{text}</Link>
    )
}