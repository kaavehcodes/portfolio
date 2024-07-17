"use client"

const Tag = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex items-center rounded-full border">
      <p className="text-base">{label}</p>
    </div>
  )
}

export default Tag