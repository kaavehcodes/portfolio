"use client";

import Image from "next/image";
import { FC, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const skillTagVariants = cva(`w-fit rounded-full mr-2 mb-2`, {
    variants: {
        variant: {
            default: "border-2 border-timberwolf bg-white",
            black: "bg-black",
        },
        size: {
            mobile: "",
            desktop: "px-4 py-2"
        },
        defaultVariants: {
            size: "desktop",
            variant: "default"
        }
    }
});

type SkillTagVariants = "default" | "black" | "icon"

const SkillTag = ({ variant, image, text }: { variant: SkillTagVariants; image?: string; text: string }) => {
    return (
        <div className={cn("w-fit border-2 border-timberwolf rounded-full px-4 py-1 mr-2 mb-2", {
            "bg-black text-white": variant === "black",
        })}>
            <div className="flex flex-row items-center justify-between">
                {variant === "icon" &&
                    <figure className="w-6 h-6 flex flex-col items-center justify-center mr-2">
                        <Image src={`/images/${image}`} width={16} height={16} alt="" />
                    </figure>}
                <p className="text-lg font-light">{text}</p>
            </div>
        </div>
    )
}

export default SkillTag