"use client";

import Image from "next/image";
import Link from "next/link";
import IconArrowRight from "./icons/IconArrowRight";

const Tableau = ({ title, description, slug, image }: { title: string; description?: string; slug: string; image: string }) => {
	return (
		<div className="w-screen lg:w-max m-8">
			<Link href={`/${slug}`}>
				<figure className="">
					<Image src={`/images/works/${image}_cover.png`} width={500} height={500} className="w-full" alt="" />
				</figure>
				<div className="grid grid-cols-3 gap-0">
					<div className="col-span-2 p-4">
						<h3 className="text-2xl lg:text-3xl font-light uppercase">{title}</h3>
						<p className="text-lg font-thin lowercase">{description}</p>
					</div>
					<div className="col-span-1 flex items-center justify-center">
						<IconArrowRight width={48} height={48} />
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Tableau