import { useEffect, useRef } from "react";
import { MouseStalkerEngine } from "./mouseStalkerEngine";

export function MouseStalker() {
    const mouseStalkerRef = useRef<HTMLDivElement>(null);

    const mouseStalkerEngineRef = useRef<MouseStalkerEngine | null>(null);

    const UpdateMousePosition = (e: MouseEvent) => {
        const mouseStalker = mouseStalkerRef.current;
        if (!mouseStalker) return;

        let stalkerEngine = mouseStalkerEngineRef.current;
        //初めてのmousemoveイベントでマウスストーカーの位置を初期化
        if (!stalkerEngine) {
            mouseStalkerEngineRef.current = new MouseStalkerEngine({ x: e.clientX, y: e.clientY });
            stalkerEngine = mouseStalkerEngineRef.current;

            mouseStalker.style.transform = `translate(${stalkerEngine.stalkerPosition.x}px, ${stalkerEngine.stalkerPosition.y}px)`;
            mouseStalker.style.visibility = "visible";
        }

        const targetElement = document.querySelector(".stalker-target:hover");
        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const newTargetX = rect.left - 16;
            const newTargetY = rect.top + rect.height / 2;

            stalkerEngine.UpdateTargetPosition({ x: newTargetX, y: newTargetY });
        } else {
            stalkerEngine.UpdateTargetPosition({ x: e.clientX, y: e.clientY });
        }
    }

    const HandleMouseMove = () => {
        const mouseStalker = mouseStalkerRef.current;
        const mouseStalkerEngine = mouseStalkerEngineRef.current;
        if (mouseStalkerEngine && mouseStalker) {
            mouseStalkerEngine.Stalk();
            const stalkerPosition = mouseStalkerEngine.stalkerPosition;
            mouseStalker.style.transform = `translate(${stalkerPosition.x}px, ${stalkerPosition.y}px)`;
        }

        window.requestAnimationFrame(HandleMouseMove);
    };

    useEffect(() => {
        const HandleTouch = () => {
            window.removeEventListener("mousemove", UpdateMousePosition);
        }

        window.requestAnimationFrame(HandleMouseMove);
        window.addEventListener("mousemove", UpdateMousePosition);
        window.addEventListener("touchstart", HandleTouch, { once: true });

        return () => {
            window.removeEventListener("mousemove", UpdateMousePosition);
            window.removeEventListener("touchstart", HandleTouch);
        };
    }, []);

    return (
        <div
            id="mouse-stalker"
            className="absolute w-6 h-6 rounded-full -left-3 -top-3 z-0 
            bg-[var(--secoundary-color)] invisible pointer-events-none"
            ref={mouseStalkerRef}>
        </div>
    );
}