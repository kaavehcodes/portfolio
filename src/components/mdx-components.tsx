import * as runtime from "react/jsx-runtime"
import Image from "next/image"
import Figure from "./Figure";

interface MdxProps {
  code: string;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

const components = {
  Image,
  Figure,
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}



