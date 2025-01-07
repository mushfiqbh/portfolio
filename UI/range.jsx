export default function Range({ name, percent }) {
  return (
    <div className="w-full mb-4">
      <div className="text-gray-500 font-medium mb-2">{name}</div>
      <div className="w-full bg-gray-200 rounded-full h-2 relative">
        <div
          className="absolute top-[-25px] left-0 text-primary text-sm transform -translate-x-1/2"
          style={{ left: `${percent}%` }}
        >
          {percent}%
        </div>
        <div
          className="h-2 rounded-full bg-gradient-to-br from-teal-300 to-teal-400"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
