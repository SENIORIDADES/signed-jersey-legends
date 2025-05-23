
import React from 'react';
import JerseyCard from './JerseyCard';

const FeaturedProducts = () => {
  const featuredJerseys = [
    {
      id: '1',
      name: 'Camisa Titular 2024/25',
      team: 'Paris Saint-Germain',
      league: 'Ligue 1',
      price: 349,
      originalPrice: 429,
      image: '/placeholder-jersey.jpg',
      playerSignature: 'Mbappé 7',
      rating: 4.9,
      inStock: true,
      isLimited: true,
      isAuthentic: true
    },
    {
      id: '2',
      name: 'Camisa Titular 2024/25',
      team: 'Manchester City',
      league: 'Premier League',
      price: 299,
      image: '/placeholder-jersey.jpg',
      playerSignature: 'Haaland 9',
      rating: 4.8,
      inStock: true,
      isAuthentic: true
    },
    {
      id: '3',
      name: 'Camisa Titular 2024/25',
      team: 'Real Madrid',
      league: 'La Liga',
      price: 389,
      originalPrice: 450,
      image: '/placeholder-jersey.jpg',
      playerSignature: 'Bellingham 5',
      rating: 4.9,
      inStock: true,
      isLimited: true,
      isAuthentic: true
    },
    {
      id: '4',
      name: 'Camisa Away 2024/25',
      team: 'FC Barcelona',
      league: 'La Liga',
      price: 329,
      image: '/placeholder-jersey.jpg',
      playerSignature: 'Pedri 8',
      rating: 4.7,
      inStock: true,
      isAuthentic: true
    },
    {
      id: '5',
      name: 'Camisa Titular 2024/25',
      team: 'Bayern München',
      league: 'Bundesliga',
      price: 319,
      image: '/placeholder-jersey.jpg',
      playerSignature: 'Kane 9',
      rating: 4.8,
      inStock: false,
      isAuthentic: true
    },
    {
      id: '6',
      name: 'Camisa Third 2024/25',
      team: 'Liverpool FC',
      league: 'Premier League',
      price: 289,
      originalPrice: 350,
      image: '/placeholder-jersey.jpg',
      playerSignature: 'Salah 11',
      rating: 4.9,
      inStock: true,
      isAuthentic: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-platinum-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-100 border border-gold-200 rounded-full px-6 py-2 mb-6">
            <span className="text-gold-700 font-premium text-sm tracking-wide uppercase">Coleção Premium</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="font-elegant text-slate-900">Camisas em</span>
            <br />
            <span className="font-signature text-gold-600 transform -rotate-1 inline-block text-5xl lg:text-6xl">Destaque</span>
          </h2>
          
          <p className="text-xl text-platinum-600 font-premium max-w-2xl mx-auto leading-relaxed">
            Descubra nossa seleção exclusiva das camisas mais cobiçadas do momento. 
            Cada peça representa a excelência e tradição dos maiores clubes do mundo.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredJerseys.map((jersey) => (
            <div key={jersey.id} className="transform hover:-translate-y-2 transition-transform duration-300">
              <JerseyCard {...jersey} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-slate-800 to-slate-900 hover:from-gold-600 hover:to-gold-700 text-white px-12 py-4 rounded-full font-premium text-lg tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl">
            Ver Toda Coleção
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
