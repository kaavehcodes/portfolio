"use client";

import { useRef, useState, useEffect } from "react";

const LogoType = () => {
    const anchorRef = useRef<SVGSVGElement>(null);
    const leftEyeRef = useRef<SVGGElement>(null);
    const rightEyeRef = useRef<SVGGElement>(null);

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [moveSpeed, setMoveSpeed] = useState<number>(0);

    useEffect(() => {
        const anchor = anchorRef.current;
        const leftEye = leftEyeRef.current;
        const rightEye = rightEyeRef.current;

        const calculateAngle = (cx: number, cy: number, ex: number, ey: number): number => {
            const dy = ey - cy;
            const dx = ex - cx;
            const rad = Math.atan2(dy, dx);
            const deg = rad * 180 / Math.PI;
            return deg;
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (!anchor || !leftEye || !rightEye) return;

            const boundRect = anchor.getBoundingClientRect();
            const anchorX = boundRect.left + boundRect.width / 2;
            const anchorY = boundRect.top + boundRect.height / 2;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const angleDeg = calculateAngle(mouseX, mouseY, anchorX, anchorY);

            leftEye.setAttribute('transform', `rotate(${90 + angleDeg}, 203, 92)`);
            rightEye.setAttribute('transform', `rotate(${90 + angleDeg}, 473, 92)`);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    return (


        <svg ref={anchorRef} width="846" height="144" viewBox="0 0 846 144" fill="none">
            <rect width="24" height="144" fill="black" />
            <path d="M56 0H80L49 72L80 144H56L25 72L56 0Z" fill="black" />
            <path d="M596 0H621L641 124L661 0H685L661 144H621L596 0Z" fill="black" />
            <path d="M693 0H756V20H717V55H749V75H717V124H757V144H693V0Z" fill="black" />
            <path d="M770 0H794V57H822V0H846V144H822V77H794V144H770V0Z" fill="black" />
            <g id="left-eye" ref={leftEyeRef}>
                <circle cx="203" cy="92" r="40" fill="red" />
                <circle cx="187" cy="92" r="20" fill="black" />
            </g>
            <g id="right-eye" ref={rightEyeRef}>
                <circle cx="473" cy="92" r="40" fill="red" />
                <circle cx="457" cy="92" r="20" fill="black" />
            </g>
            <path d="M88 20C88 8.9543 96.9543 0 108 0H298C309.046 0 318 8.95431 318 20V40H358V20C358 8.95431 366.954 0 378 0H568C579.046 0 588 8.95431 588 20V28H564V25C564 22.2386 561.761 20 559 20H387C384.239 20 382 22.2386 382 25V40V60V119C382 121.761 384.239 124 387 124H559C561.761 124 564 121.761 564 119V65C564 62.2386 561.761 60 559 60H382V40H568C579.046 40 588 48.9543 588 60V124C588 135.046 579.046 144 568 144H378C366.954 144 358 135.046 358 124V60H318V124C318 135.046 309.046 144 298 144H108C96.9543 144 88 135.046 88 124V60C88 48.9543 96.9543 40 108 40H294V60H117C114.239 60 112 62.2386 112 65V119C112 121.761 114.239 124 117 124H289C291.761 124 294 121.761 294 119V60V40V25C294 22.2386 291.761 20 289 20H117C114.239 20 112 22.2386 112 25V28H88V20Z" fill="black" />
        </svg>

    )
}

export default LogoType