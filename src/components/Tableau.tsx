"use client";

import Image from "next/image";
import Link from "next/link";
import IconArrowRight from "./icons/IconArrowRight";

const Tableau = ({ title, description, slug }: { title: string; description?: string; slug: string }) => {
	return (
		<div className="w-max m-8">
			<Link href={`/${slug}`}>
				<figure>
					<Image src="/images/works_wv-tableau-preview.png" width={500} height={500} alt="" />
				</figure>
				<div className="grid grid-cols-3 gap-0">
					<div className="col-span-2 py-4">
						<h3 className="text-2xl font-light uppercase">{title}</h3>
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