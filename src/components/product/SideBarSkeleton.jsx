const SidebarSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 animate-pulse space-y-4">
      {/* Title */}
      <div className="h-5 bg-gray-200 rounded w-3/4"></div>

      {/* Category lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
      ))}

      <div className="border-t border-slate-200 my-4"></div>

      {/* Sort section */}
      <div className="h-5 bg-gray-200 rounded w-1/2"></div>
      <div className="space-y-3 mt-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-4/5"></div>
        ))}
      </div>
    </div>
  );
};

export default SidebarSkeleton;