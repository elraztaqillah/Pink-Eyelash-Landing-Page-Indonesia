import { Eye, Sparkles, Clock, Award, Instagram, MapPin, Phone, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Eye className="w-8 h-8 text-pink-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                Lash Artistry
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors">Layanan</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-500 transition-colors">Galeri</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Kontak</a>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Reservasi
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Salon Bulu Mata Premium di Indonesia
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Percantik
                <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent"> Tatapan </span>
                Anda
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dapatkan bulu mata impian Anda dengan teknik profesional dan produk berkualitas tinggi. Kami menghadirkan keindahan yang natural dan tahan lama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Booking Sekarang
                </button>
                <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300">
                  Lihat Harga
                </button>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600">Klien Puas</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">3+</p>
                  <p className="text-gray-600">Tahun Pengalaman</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">100%</p>
                  <p className="text-gray-600">Berkualitas</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-pink-100 to-rose-50 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Eyelash Extension"
                  className="rounded-2xl w-full h-96 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan layanan profesional untuk mewujudkan bulu mata impian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Classic Lash</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tampilan natural dan elegan dengan satu ekstensi per bulu mata alami. Sempurna untuk penggunaan sehari-hari.
              </p>
              <div className="text-pink-500 font-semibold text-lg mb-4">Mulai dari Rp 250.000</div>
              <button className="w-full bg-pink-50 text-pink-600 py-3 rounded-full font-semibold hover:bg-pink-100 transition-colors">
                Pelajari Lebih
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pink-500 relative">
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populer
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volume Lash</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tampilan dramatis dan bervolume dengan multiple ekstensi. Ideal untuk acara spesial dan tampilan glamor.
              </p>
              <div className="text-pink-500 font-semibold text-lg mb-4">Mulai dari Rp 450.000</div>
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Pelajari Lebih
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Lash</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kombinasi sempurna antara classic dan volume. Memberikan dimensi natural dengan sentuhan glamor.
              </p>
              <div className="text-pink-500 font-semibold text-lg mb-4">Mulai dari Rp 350.000</div>
              <button className="w-full bg-pink-50 text-pink-600 py-3 rounded-full font-semibold hover:bg-pink-100 transition-colors">
                Pelajari Lebih
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">Kami?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kami berkomitmen memberikan pelayanan terbaik dengan standar internasional untuk setiap klien kami.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Terapis Bersertifikat</h3>
                    <p className="text-gray-600">Tim profesional dengan sertifikasi internasional dan pengalaman bertahun-tahun.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Produk Premium</h3>
                    <p className="text-gray-600">Menggunakan produk berkualitas tinggi yang aman dan hypoallergenic.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hasil Tahan Lama</h3>
                    <p className="text-gray-600">Teknik aplikasi yang tepat memastikan hasil bertahan 4-6 minggu.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3373718/pexels-photo-3373718.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Salon Interior"
                className="rounded-2xl h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Eyelash Process"
                className="rounded-2xl h-64 object-cover shadow-lg mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Happy Client"
                className="rounded-2xl h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Professional Tools"
                className="rounded-2xl h-64 object-cover shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Galeri <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">Karya</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lihat transformasi menakjubkan dari klien-klien kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3373734/pexels-photo-3373734.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3997260/pexels-photo-3997260.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3373744/pexels-photo-3373744.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg?auto=compress&cs=tinysrgb&w=600'
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold">Lihat Detail</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-pink-500 to-rose-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Siap Mempercantik Tatapan Anda?
              </h2>
              <p className="text-xl mb-8 text-pink-50 leading-relaxed">
                Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran spesial untuk pelanggan baru.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Lokasi Kami</p>
                    <p className="text-pink-50">Jakarta Selatan, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-pink-50">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-pink-50">hello@lashartistry.id</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-pink-50">@lashartistry.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Sekarang</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder="+62 812-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pilih Layanan</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all">
                    <option>Classic Lash</option>
                    <option>Volume Lash</option>
                    <option>Hybrid Lash</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tanggal & Waktu</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Kirim Reservasi
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-bold text-white">Lash Artistry</span>
              </div>
              <p className="text-gray-400">
                Salon bulu mata premium di Indonesia dengan standar internasional.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Classic Lash</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Volume Lash</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Hybrid Lash</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Lash Removal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Promo</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Jam Operasional</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Senin - Jumat: 09:00 - 20:00</li>
                <li>Sabtu - Minggu: 10:00 - 18:00</li>
                <li className="text-pink-400 font-medium">Buka setiap hari</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Lash Artistry. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
