"use client";

import styles from "./animation.module.css"
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const LogoType = ({ width, height, letters }: { width: number; height: number; letters: boolean }) => {
	const anchorRef = useRef<SVGSVGElement>(null);
	const leftEyeRef = useRef<SVGGElement>(null);
	const rightEyeRef = useRef<SVGGElement>(null);

	// const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
	// const [moveSpeed, setMoveSpeed] = useState<number>(0);

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

			leftEye.setAttribute('transform', `rotate(${angleDeg}, 203, 92)`);
			rightEye.setAttribute('transform', `rotate(${angleDeg}, 473, 92)`);
		};

		document.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, [])

	return (
		<>
			<svg ref={anchorRef} width={width} height={height} className={cn("block", { "hidden": letters === false })} viewBox="0 0 846 144" fill="none">
				<g id="letter-k">
					<rect width="24" height="144" fill="black" />
					<path d="M56 0H80L49 72L80 144H56L25 72L56 0Z" fill="black" />
				</g>
				<g id="left-eye" ref={leftEyeRef}>
					<circle cx="203" cy="92" r="40" fill="none" />
					<circle cx="187" cy="92" r="20" fill="black" />
				</g>
				<g id="right-eye" ref={rightEyeRef}>
					<circle cx="473" cy="92" r="40" fill="none" />
					<circle cx="457" cy="92" r="20" fill="black" />
				</g>
				<path id="letter-v" d="M596 0H621L641 124L661 0H685L661 144H621L596 0Z" fill="black" />
				<path id="letter-e" d="M693 0H756V20H717V55H749V75H717V124H757V144H693V0Z" fill="black" />
				<path id="letter-h" d="M770 0H794V57H822V0H846V144H822V77H794V144H770V0Z" fill="black" />
				<rect className={styles.eyelidLeft} x="163" y="52" width="80" height="80" fill="white" />
				<rect className={styles.eyelidRight} x="433" y="52" width="80" height="80" fill="white" />
				<path id="glasses" d="M88 20C88 8.9543 96.9543 0 108 0H298C309.046 0 318 8.95431 318 20V40H358V20C358 8.95431 366.954 0 378 0H568C579.046 0 588 8.95431 588 20V28H564V25C564 22.2386 561.761 20 559 20H387C384.239 20 382 22.2386 382 25V40V60V119C382 121.761 384.239 124 387 124H559C561.761 124 564 121.761 564 119V65C564 62.2386 561.761 60 559 60H382V40H568C579.046 40 588 48.9543 588 60V124C588 135.046 579.046 144 568 144H378C366.954 144 358 135.046 358 124V60H318V124C318 135.046 309.046 144 298 144H108C96.9543 144 88 135.046 88 124V60C88 48.9543 96.9543 40 108 40H294V60H117C114.239 60 112 62.2386 112 65V119C112 121.761 114.239 124 117 124H289C291.761 124 294 121.761 294 119V60V40V25C294 22.2386 291.761 20 289 20H117C114.239 20 112 22.2386 112 25V28H88V20Z" fill="black" />
			</svg>
			<svg width={width} height={height} className={cn("hidden", { "block w-full": letters === false })} viewBox="0 0 500 144" fill="none">
				<g id="left-eye">
					<circle cx="115" cy="92" r="40" fill="none" />
					<circle cx="99" cy="92" r="20" fill="black" />
				</g>
				<g id="right-eye">
					<circle cx="385" cy="92" r="40" fill="none" />
					<circle cx="369" cy="92" r="20" fill="black" />
				</g>
				<rect className={styles.eyelidLeft} x="75" y="52" width="80" height="80" fill="white" />
				<rect className={styles.eyelidRight} x="345" y="52" width="80" height="80" fill="white" />
				<path d="M0 20C0 8.9543 8.95431 0 20 0H210C221.046 0 230 8.95431 230 20V40H270V20C270 8.95431 278.954 0 290 0H480C491.046 0 500 8.95431 500 20V28H476V25C476 22.2386 473.761 20 471 20H299C296.239 20 294 22.2386 294 25V40V60V119C294 121.761 296.239 124 299 124H471C473.761 124 476 121.761 476 119V65C476 62.2386 473.761 60 471 60H294V40H480C491.046 40 500 48.9543 500 60V124C500 135.046 491.046 144 480 144H290C278.954 144 270 135.046 270 124V60H230V124C230 135.046 221.046 144 210 144H20C8.9543 144 0 135.046 0 124V60C0 48.9543 8.9543 40 20 40H206V60H29C26.2386 60 24 62.2386 24 65V119C24 121.761 26.2386 124 29 124H201C203.761 124 206 121.761 206 119V60V40V25C206 22.2386 203.761 20 201 20H29C26.2386 20 24 22.2386 24 25V28H0V20Z" fill="black" />
			</svg>
		</>
	)
}

export default LogoType