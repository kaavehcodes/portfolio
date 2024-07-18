import * as runtime from "react/jsx-runtime"

import { cn } from "@/lib/utils";

import MDXHeader from "./mdx/MDXHeader";
import MDXFigure from "./mdx/MDXFigure";

interface MdxProps {
  code: string;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  h1: ({ ...props }) => (
    <h1
      className={cn(
        "mt-4 scroll-m-20 text-6xl font-bold tracking-tight"
      )}
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className={cn(
        "mt-12 scroll-m-20 text-4xl font-medium tracking-tight first:mt-0"
      )}
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      className={cn("text-xl font-light leading-7 mb-8 [&:not(:first-child)]:mt-4")}
      {...props}
    />
  ),
  MDXHeader,
  MDXFigure,
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}



