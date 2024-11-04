const Guage = (min, max, value, unit, color) => {
  return (
		<div className="relative w-full h-6 bg-gray-700 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
        {value.toFixed(1)} {unit}
      </span>
    </div>
  )
}

export default Guage;
