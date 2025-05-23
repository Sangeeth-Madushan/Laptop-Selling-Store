export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-4 p-4">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 text-lg font-medium">Loading product details...</p>
    </div>
  );
}
