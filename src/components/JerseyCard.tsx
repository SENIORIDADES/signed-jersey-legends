
import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface JerseyCardProps {
  id: string;
  name: string;
  team: string;
  league: string;
  price: number;
  originalPrice?: number;
  image: string;
  playerSignature?: string;
  rating: number;
  inStock: boolean;
  isLimited?: boolean;
  isAuthentic?: boolean;
}

const JerseyCard: React.FC<JerseyCardProps> = ({
  name,
  team,
  league,
  price,
  originalPrice,
  image,
  playerSignature,
  rating,
  inStock,
  isLimited,
  isAuthentic
}) => {
  return (
    <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl">
      {/* Status badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isLimited && (
          <Badge className="bg-red-600 hover:bg-red-700 text-white font-premium text-xs">
            EDIÇÃO LIMITADA
          </Badge>
        )}
        {isAuthentic && (
          <Badge className="bg-gold-600 hover:bg-gold-700 text-white font-premium text-xs">
            ✓ AUTÊNTICA
          </Badge>
        )}
        {originalPrice && (
          <Badge className="bg-green-600 hover:bg-green-700 text-white font-premium text-xs">
            OFERTA
          </Badge>
        )}
      </div>

      {/* Favorite button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-slate-600 hover:text-red-500 rounded-full w-10 h-10 p-0 transition-all duration-300"
      >
        <Heart className="w-4 h-4" />
      </Button>

      {/* Jersey image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-platinum-50 to-platinum-100 p-8">
        <div className="aspect-square relative">
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="text-6xl opacity-20">👕</div>
            {/* Placeholder para imagem real */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-lg"></div>
          </div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500 rounded-lg"></div>
        </div>

        {/* Player signature overlay */}
        {playerSignature && (
          <div className="absolute bottom-4 right-4 bg-black/80 text-gold-400 px-3 py-1 rounded-lg backdrop-blur-sm">
            <span className="font-signature text-lg">{playerSignature}</span>
          </div>
        )}
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Team and league */}
        <div className="space-y-1">
          <p className="text-sm font-premium text-platinum-600 uppercase tracking-wider">{league}</p>
          <h3 className="font-elegant text-xl font-semibold text-slate-900 group-hover:text-gold-600 transition-colors">
            {team}
          </h3>
          <p className="text-sm text-slate-600 font-premium">{name}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? 'text-gold-400 fill-current'
                  : 'text-platinum-300'
              }`}
            />
          ))}
          <span className="text-sm text-platinum-600 ml-2 font-premium">
            {rating.toFixed(1)} ({Math.floor(Math.random() * 50) + 10} avaliações)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-slate-900">
                R$ {price.toLocaleString('pt-BR')}
              </span>
              {originalPrice && (
                <span className="text-sm text-platinum-500 line-through font-premium">
                  R$ {originalPrice.toLocaleString('pt-BR')}
                </span>
              )}
            </div>
            {originalPrice && (
              <p className="text-xs text-green-600 font-premium">
                Economize R$ {(originalPrice - price).toLocaleString('pt-BR')}
              </p>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        <Button
          className={`w-full py-3 font-premium tracking-wide transition-all duration-300 ${
            inStock
              ? 'bg-gradient-to-r from-slate-800 to-slate-900 hover:from-gold-600 hover:to-gold-700 text-white shadow-lg hover:shadow-xl'
              : 'bg-platinum-200 text-platinum-500 cursor-not-allowed'
          }`}
          disabled={!inStock}
        >
          {inStock ? (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Adicionar ao Carrinho
            </>
          ) : (
            'Fora de Estoque'
          )}
        </Button>

        {/* Stock status */}
        {inStock && (
          <p className="text-xs text-center text-platinum-600 font-premium">
            ✓ Em estoque • Envio em 24h
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default JerseyCard;
