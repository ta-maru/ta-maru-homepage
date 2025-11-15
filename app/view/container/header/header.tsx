import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import NaviLink from "~/view/component/naviLink";

import logo from "../../share/logo.svg";
import hamburger from "../../share/hamburger.svg"
import hamburger_open from "../../share/hamburger-open.svg"

export default function Header() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className="w-full min-h-16 mb-8">
            <div className="max-w-xl h-20 mx-auto px-4 py-3 flex items-center justify-center">
                {/* Left: Logo -> Home */}
                <div className="hidden sm:flex items-center absolute left-4 top-4">
                    <Link to="/" aria-label="Home" className="flex items-center gap-2 stalker-target">
                        <div className="h-12 flex items-center justify-center rounded">
                            <img src={logo} className="w-auto h-full" />
                        </div>
                    </Link>
                </div>

                {/* Center: Desktop nav */}
                <nav className="hidden sm:flex gap-12 items-center ">
                    <NaviLink text="Profile" to="/profile" />
                    <NaviLink text="Apps" to="/apps" />
                    <NaviLink text="Photos" to="/photos" />
                {/* </nav>
                    <Link to="/profile" className="stalker-target">Profile</Link>
                    <Link to="/apps" className="stalker-target">Apps</Link>
                    <Link to="/photos" className="stalker-target">Photos</Link> */}
                </nav>

                {/* Right: Mobile hamburger */}
                <div className="sm:hidden z-100 absolute right-4 top-4">
                    <button
                        aria-label="Open menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                        className="p-2 stalker-target"
                    >
                        {!open && (<img src={hamburger} className="w-10 h-10 z-100"/>)}
                        {open && (<img src={hamburger_open} className="w-10 h-10 z-100" />)}
                    </button>
                </div>
            </div>

            {/* Mobile modal menu */}
            {open && (
                <div
                    ref={overlayRef}
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-xs"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="rounded-xl w-11/12 max-w-sm p-6 flex flex-col items-center gap-4 font-bold text-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <NaviLink text="Home" to="/" onClick={() => setOpen(false)} />
                        <NaviLink text="Profile" to="/profile" onClick={() => setOpen(false)} />
                        <NaviLink text="Apps" to="/apps" onClick={() => setOpen(false)} />
                        <NaviLink text="Photos" to="/photos" onClick={() => setOpen(false)} />
                    </div>
                </div>
            )}
        </header>
    );
}