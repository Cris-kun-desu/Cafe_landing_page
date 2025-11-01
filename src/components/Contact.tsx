import { MapPin, Clock, Phone, Instagram, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-amber-900 mb-4">Kunjungi Kami</h2>
          <p className="text-gray-600">
            Kami menunggu kedatangan Anda untuk berbagi cerita sambil menikmati kopi
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-amber-900 mb-2">Lokasi</h3>
                <p className="text-gray-600">
                  Jl. K.H. Agus Salim No.12A<br />
                  Taman Baru, Kec. Banyuwangi<br />
                  Kabupaten Banyuwangi, Jawa Timur 68416
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-amber-900 mb-2">Jam Buka</h3>
                <p className="text-gray-600">
                  Senin - Jumat: 07.00 - 22.00<br />
                  Sabtu - Minggu: 08.00 - 23.00
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-amber-900 mb-2">Kontak</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>(021) 1234-5678</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@kopicerita.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <span>@kopicerita</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
