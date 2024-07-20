"use client"

const Tag = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-black mr-2">
      <p className="text-base font-light px-4">{label}</p>
    </div>
  )
}

export default Tag