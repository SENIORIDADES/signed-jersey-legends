
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, Shield, Truck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djEwaDEwdi0xMHptMC0zNHYxMGgxMFYwem0tMzYgMHYxMGgxMFYwem0wIDM0djEwaDEwVjM0em0xOC0xOHYxMGgxMFYxNnptLTE4IDB2MTBoMTBWMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-400/30 rounded-full px-4 py-2">
                <Trophy className="w-4 h-4 text-gold-400" />
                <span className="text-gold-400 font-premium text-sm tracking-wide">COLEÇÃO EXCLUSIVA 2024</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="font-elegant">Camisas</span>
                <br />
                <span className="font-signature text-gold-400 transform -rotate-1 inline-block">Autênticas</span>
                <br />
                <span className="font-elegant">de Legends</span>
              </h1>
              
              <p className="text-xl text-platinum-300 font-premium leading-relaxed max-w-lg">
                Descubra nossa coleção premium de camisas importadas dos maiores times do mundo. 
                Cada peça é uma obra de arte que carrega a paixão e história do futebol.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white px-8 py-4 text-lg font-premium tracking-wide shadow-2xl hover:shadow-gold-500/25 transition-all duration-300">
                Explorar Coleção
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button variant="outline" className="border-platinum-400 text-platinum-300 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-premium tracking-wide transition-all duration-300">
                Ver Lançamentos
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-gold-500/10 p-2 rounded-full">
                  <Shield className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-premium text-white font-semibold">100% Autênticas</p>
                  <p className="text-sm text-platinum-400">Garantia de originalidade</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gold-500/10 p-2 rounded-full">
                  <Truck className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-premium text-white font-semibold">Entrega Express</p>
                  <p className="text-sm text-platinum-400">Receba em 24-48h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual highlight */}
          <div className="relative">
            <div className="relative z-10">
              {/* Featured jersey mockup */}
              <div className="bg-gradient-to-br from-white to-platinum-100 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl flex items-center justify-center text-white text-8xl shadow-inner">
                  👕
                </div>
                
                {/* Signature overlay */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-gold-400 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="font-signature text-2xl">Messi 10</span>
                </div>

                {/* Price tag */}
                <div className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transform -rotate-12">
                  R$ 299
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 bg-gold-400 text-slate-900 p-4 rounded-full shadow-xl animate-float">
                <Trophy className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-8 bg-platinum-200 text-slate-700 p-3 rounded-full shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <Shield className="w-5 h-5" />
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-transparent rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
