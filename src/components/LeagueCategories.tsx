
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LeagueCategories = () => {
  const leagues = [
    {
      name: 'Premier League',
      country: 'Inglaterra',
      teams: 20,
      signature: 'The Best League',
      gradient: 'from-purple-600 to-blue-600',
      icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
    },
    {
      name: 'La Liga',
      country: 'Espanha',
      teams: 18,
      signature: 'El Clásico',
      gradient: 'from-red-600 to-yellow-500',
      icon: '🇪🇸'
    },
    {
      name: 'Serie A',
      country: 'Itália',
      teams: 16,
      signature: 'Calcio Storico',
      gradient: 'from-green-600 to-red-600',
      icon: '🇮🇹'
    },
    {
      name: 'Bundesliga',
      country: 'Alemanha',
      teams: 14,
      signature: 'Die Mannschaft',
      gradient: 'from-black to-red-600',
      icon: '🇩🇪'
    },
    {
      name: 'Ligue 1',
      country: 'França',
      teams: 12,
      signature: 'Allez les Bleus',
      gradient: 'from-blue-600 to-red-600',
      icon: '🇫🇷'
    },
    {
      name: 'Seleções',
      country: 'Mundial',
      teams: 24,
      signature: 'World Champions',
      gradient: 'from-gold-500 to-yellow-600',
      icon: '🏆'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMjBjMC0xMS4wNS04Ljk1LTIwLTIwLTIwczIwIDguOTUgMjAgMjBjMC0xMS4wNSA4Ljk1LTIwIDIwLTIwczIwIDguOTUgMjAgMjBjMCAxMS4wNS04Ljk1IDIwLTIwIDIwcy0yMC04Ljk1LTIwLTIweiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-400/30 rounded-full px-6 py-2 mb-6">
            <span className="text-gold-400 font-premium text-sm tracking-wide uppercase">Ligas Principais</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="font-elegant">Explore por</span>
            <br />
            <span className="font-signature text-gold-400 transform -rotate-1 inline-block text-5xl lg:text-6xl">Competição</span>
          </h2>
          
          <p className="text-xl text-platinum-300 font-premium max-w-2xl mx-auto leading-relaxed">
            Navegue pelas principais ligas e competições do mundo. 
            Cada categoria oferece camisas exclusivas dos melhores times.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leagues.map((league, index) => (
            <Card 
              key={league.name}
              className="group relative overflow-hidden bg-transparent border-platinum-700/50 hover:border-gold-400/50 transition-all duration-500 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${league.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}></div>
              
              <CardContent className="relative z-10 p-8 text-white">
                <div className="space-y-6">
                  {/* League icon and flag */}
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{league.icon}</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-premium">{league.teams} Times</span>
                    </div>
                  </div>

                  {/* League info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-elegant">{league.name}</h3>
                    <p className="text-white/80 font-premium">{league.country}</p>
                  </div>

                  {/* Signature */}
                  <div className="pt-4 border-t border-white/20">
                    <p className="font-signature text-xl text-gold-200 transform -rotate-1">
                      "{league.signature}"
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <span className="text-white text-sm">Ver Camisas →</span>
                    </div>
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-30 group-hover:animate-shimmer transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-platinum-300 font-premium">
              Não encontrou sua liga favorita?
            </p>
            <button className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white px-8 py-3 rounded-full font-premium tracking-wide transition-all duration-300 shadow-xl">
              Ver Todas as Ligas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeagueCategories;
