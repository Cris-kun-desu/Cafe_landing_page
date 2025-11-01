import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Award, Users } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-amber-900 mb-6">Tentang Kami</h2>
            <p className="text-gray-700 mb-6">
              Sejak tahun 2018, Kopi & Cerita telah menjadi rumah kedua bagi para pecinta kopi. Kami berkomitmen untuk menyajikan pengalaman kopi terbaik dengan biji kopi pilihan dari berbagai penjuru Indonesia.
            </p>
            <p className="text-gray-700 mb-8">
              Setiap cangkir kopi kami dibuat dengan penuh cinta dan keahlian oleh barista berpengalaman. Kami percaya bahwa kopi bukan hanya minuman, tetapi sebuah pengalaman yang menghubungkan orang-orang.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-gray-600">Dibuat dengan Cinta</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-gray-600">Kualitas Terbaik</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-gray-600">Komunitas</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607278967764-548cbaa2d492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGJhcmlzdGF8ZW58MXx8fHwxNzYxOTc4OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Barista membuat latte art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
