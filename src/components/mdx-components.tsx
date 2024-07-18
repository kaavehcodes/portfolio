import * as runtime from "react/jsx-runtime"

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
  MDXHeader,
  MDXFigure,
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}



