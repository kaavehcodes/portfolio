"use client";

import styles from "./animation.module.css"

const Logo = ({ width, height }: { width: number; height: number }) => {
	return (
		<svg width={width} height={height} className="w-full" viewBox="0 0 500 144" fill="none">
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
	)
}

export default Logo