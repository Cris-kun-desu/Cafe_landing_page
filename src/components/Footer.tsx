import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6" />
              <span className="text-white">Kopi & Cerita</span>
            </div>
            <p className="text-amber-100 text-sm">
              Tempat sempurna untuk menikmati kopi berkualitas dan menciptakan kenangan indah.
            </p>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Menu</h3>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Kopi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Makanan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Minuman Non-Kopi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dessert</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Tentang</h3>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-8 text-center text-amber-100 text-sm">
          <p>&copy; 2025 Kopi & Cerita. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
