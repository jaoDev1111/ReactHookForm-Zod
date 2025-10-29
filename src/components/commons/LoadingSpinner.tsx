export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm">Carregando...</p>
    </div>
  )
}
