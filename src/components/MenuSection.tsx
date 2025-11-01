import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const menuItems = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Espresso berkualitas tinggi dengan rasa yang kaya dan aroma yang menggugah selera',
    price: 'Rp 25.000',
    image: 'https://images.unsplash.com/photo-1624515385619-f6a54f233413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjE4ODk4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Kopi'
  },
  {
    id: 2,
    name: 'Cappuccino Art',
    description: 'Cappuccino dengan latte art yang indah, perpaduan sempurna antara espresso, susu, dan busa',
    price: 'Rp 35.000',
    image: 'https://images.unsplash.com/photo-1607278967764-548cbaa2d492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGJhcmlzdGF8ZW58MXx8fHwxNzYxOTc4OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Kopi'
  },
  {
    id: 3,
    name: 'Croissant & Pastry',
    description: 'Kue-kue segar yang dipanggang setiap hari, sempurna sebagai teman kopi Anda',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1548693563-25dc13e7b2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NjE4NTk5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Makanan'
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-amber-900 mb-4">Menu Favorit Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati pilihan kopi dan makanan terbaik yang kami sajikan dengan penuh dedikasi
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-amber-900">{item.name}</CardTitle>
                  <span className="text-amber-600">{item.price}</span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
