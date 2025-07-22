'use client';

import { motion } from 'framer-motion';
import { Play, Music, Calendar, Mail, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 blur-backdrop"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              YuvaTunes
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-[#00ff88] transition-colors">About</Link>
              <Link href="#services" className="hover:text-[#00ff88] transition-colors">Services</Link>
              <Link href="#gallery" className="hover:text-[#00ff88] transition-colors">Gallery</Link>
              <Link href="#contact" className="hover:text-[#00ff88] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="gradient-text">YUVA</span>
                <br />
                <span className="text-white">TUNES</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Hyper-Modern DJ Experience • Professional Audio • Unforgettable Events
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black px-8 py-4 rounded-full font-semibold text-lg pulse-glow"
              >
                <Play className="w-5 h-5" />
                <span>Book Now</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 float-animation"
          style={{ animationDelay: '0s' }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 float-animation"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-20 float-animation"
          style={{ animationDelay: '1s' }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-8 gradient-text">About YuvaTunes</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Professional DJ services bringing the perfect blend of cutting-edge technology and musical artistry. 
              From intimate gatherings to large-scale events, we create atmospheric experiences that move people.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="glass-effect p-6 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Music className="w-12 h-12 mx-auto mb-4 text-[#00ff88]" />
                <h3 className="text-xl font-semibold mb-2">Professional Mixing</h3>
                <p className="text-gray-400">State-of-the-art equipment and seamless transitions</p>
              </motion.div>
              
              <motion.div 
                className="glass-effect p-6 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Play className="w-12 h-12 mx-auto mb-4 text-[#00ff88]" />
                <h3 className="text-xl font-semibold mb-2">Live Performance</h3>
                <p className="text-gray-400">Dynamic sets tailored to your event&apos;s energy</p>
              </motion.div>
              
              <motion.div 
                className="glass-effect p-6 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="w-12 h-12 mx-auto mb-4 text-[#00ff88]" />
                <h3 className="text-xl font-semibold mb-2">Event Planning</h3>
                <p className="text-gray-400">Complete audio-visual production services</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold gradient-text mb-4">Services</h2>
            <p className="text-xl text-gray-300">Professional DJ services for every occasion</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Weddings', desc: 'Create magical moments for your special day' },
              { title: 'Corporate Events', desc: 'Professional atmosphere for business functions' },
              { title: 'Private Parties', desc: 'Customized playlists for intimate celebrations' },
              { title: 'Club Nights', desc: 'High-energy sets for nightlife venues' },
              { title: 'Festival Performances', desc: 'Large-scale outdoor event entertainment' },
              { title: 'Audio Production', desc: 'Complete sound system setup and management' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="glass-effect p-8 rounded-xl hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#00ff88]">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold gradient-text mb-4">Gallery</h2>
            <p className="text-xl text-gray-300">Behind the decks moments</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for images */}
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="aspect-square bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl glass-effect flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
              >
                <div className="text-center">
                  <Music className="w-12 h-12 mx-auto mb-2 text-[#00ff88]" />
                  <p className="text-gray-300">DJ Setup {item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold gradient-text mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12">Ready to make your event unforgettable?</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <motion.div 
                  className="glass-effect p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-8 h-8 mb-4 text-[#00ff88]" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">yuvatunes@email.com</p>
                </motion.div>
                
                <motion.div 
                  className="glass-effect p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-8 h-8 mb-4 text-[#00ff88]" />
                  <h3 className="text-xl font-semibold mb-2">Booking</h3>
                  <p className="text-gray-300">Available for events nationwide</p>
                </motion.div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Follow the Music</h3>
                <div className="flex justify-center space-x-6">
                  <motion.a 
                    href="#" 
                    className="glass-effect p-4 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Instagram className="w-6 h-6 text-[#00ff88]" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="glass-effect p-4 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Facebook className="w-6 h-6 text-[#00ff88]" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="glass-effect p-4 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Music className="w-6 h-6 text-[#00ff88]" />
                  </motion.a>
                </div>
              </div>
            </div>

            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black px-12 py-4 rounded-full font-semibold text-lg pulse-glow"
              >
                Book YuvaTunes Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 YuvaTunes. Professional DJ Services.</p>
        </div>
      </footer>
    </div>
  );
}