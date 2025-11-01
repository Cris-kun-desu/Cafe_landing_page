import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coffee } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxOTMyODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Interior kafe yang nyaman"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="flex items-center gap-3 mb-6">
          <Coffee className="w-12 h-12" />
          <h1 className="text-white">Kopi & Cerita</h1>
        </div>
        <p className="text-center max-w-2xl mb-8 text-white/90">
          Tempat sempurna untuk menikmati kopi berkualitas, hidangan lezat, dan menciptakan kenangan indah bersama orang-orang terkasih.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => scrollToSection('menu')}
          >
            Lihat Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
            onClick={() => scrollToSection('contact')}
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
}
