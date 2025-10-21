export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-blue-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-gray-600">Built with ❤️ for Mumbai</p>
          <p className="text-sm text-gray-500">Mumbai Mitra - Your City Companion</p>
          <p className="text-xs text-gray-400 mt-4">
            Data updated regularly. For emergency services, dial 100 (Police) or 101 (Fire)
          </p>
        </div>
      </div>
    </footer>
  );
}