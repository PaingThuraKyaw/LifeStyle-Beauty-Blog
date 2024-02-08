const Loader = () => {
  return (
    <div className="flex items-center fixed top-0 left-1/2 -translate-x-1/2 bg-black/10 w-full justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-black border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;
