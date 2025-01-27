export default function TimeValue({children, value}) {
    return (
        <div className="flex gap-2 items-center font-bold bg-pink-50 p-4 px-6 shadow-md shadow-pink-600/50"><div className="text-pink-600">{value}</div> {children}</div>
    )
}