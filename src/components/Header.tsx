
import React from 'react';
import { ShoppingBag, Search, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
      {/* Top bar premium */}
      <div className="border-b border-gold-400/30 bg-black/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-gold-400">✨ Camisas Autênticas Importadas</span>
              <span className="text-platinum-300">Frete Grátis acima de R$ 500</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-platinum-300">📞 (11) 9999-9999</span>
              <span className="text-platinum-300">|</span>
              <span className="text-gold-400">Atendimento VIP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo com estilo de autógrafo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <h1 className="font-signature text-4xl md:text-5xl text-gold-400 transform -rotate-2">
                Champions
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-transparent opacity-60"></div>
            </div>
            <div className="text-platinum-200">
              <span className="font-elegant text-xl tracking-wider">STORE</span>
              <p className="font-premium text-xs tracking-widest opacity-80">PREMIUM COLLECTION</p>
            </div>
          </div>

          {/* Search bar premium */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-platinum-400 w-5 h-5" />
              <Input 
                placeholder="Buscar times, jogadores, coleções..."
                className="pl-10 pr-4 py-3 bg-white/10 border-platinum-400/30 text-white placeholder-platinum-400 focus:border-gold-400 focus:ring-gold-400/20 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-platinum-300 hover:text-gold-400 hover:bg-white/10 transition-all duration-300">
              <Heart className="w-5 h-5" />
              <span className="hidden lg:inline ml-2">Favoritos</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-platinum-300 hover:text-gold-400 hover:bg-white/10 transition-all duration-300">
              <User className="w-5 h-5" />
              <span className="hidden lg:inline ml-2">Conta</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-platinum-300 hover:text-gold-400 hover:bg-white/10 transition-all duration-300 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden lg:inline ml-2">Carrinho</span>
              <span className="absolute -top-2 -right-2 bg-gold-400 text-slate-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation premium */}
      <nav className="border-t border-platinum-700/30 bg-black/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-4">
            {['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Seleções'].map((league) => (
              <Button
                key={league}
                variant="ghost"
                className="font-premium text-platinum-200 hover:text-gold-400 hover:bg-white/5 transition-all duration-300 px-4 py-2 text-sm tracking-wide"
              >
                {league}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
