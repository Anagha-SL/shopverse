import Sidebar from "./SideBar";

const MobileCategoryDrawer = ({ isOpen, onClose, categories }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#fffffffa] z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <div className="p-5 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">Categories</h2>
          <button onClick={onClose}>✕</button>
        </div> */}

        <div className="p-5">
          <Sidebar categories={categories} onCategorySelect={onClose} />
        </div>
      </div>
    </>
  );
};

export default MobileCategoryDrawer;
