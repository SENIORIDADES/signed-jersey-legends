
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Newsletter section */}
      <div className="border-b border-platinum-700/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold">
                <span className="font-elegant">Seja um</span>
                <span className="font-signature text-gold-400 ml-3 transform -rotate-1 inline-block">VIP</span>
              </h3>
              <p className="text-xl text-platinum-300 font-premium max-w-2xl mx-auto">
                Receba em primeira mão os lançamentos exclusivos e ofertas especiais da Champions Store
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input 
                  placeholder="Seu melhor e-mail"
                  className="bg-white/10 border-platinum-400/30 text-white placeholder-platinum-400 focus:border-gold-400 focus:ring-gold-400/20"
                />
                <Button className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 px-8 whitespace-nowrap">
                  Inscrever
                </Button>
              </div>
              <p className="text-sm text-platinum-400 mt-2 font-premium">
                ✓ Ofertas exclusivas ✓ Lançamentos antecipados ✓ Sem spam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h4 className="font-signature text-3xl text-gold-400">Champions</h4>
              <div className="text-platinum-200">
                <span className="font-elegant text-lg">STORE</span>
              </div>
            </div>
            
            <p className="text-platinum-300 font-premium leading-relaxed">
              A Champions Store é referência em camisas importadas de alta qualidade. 
              Trabalhamos apenas com fornecedores certificados para garantir a autenticidade de cada peça.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-platinum-300">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="font-premium">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-platinum-300">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="font-premium">contato@championsstore.com</span>
              </div>
              <div className="flex items-center space-x-3 text-platinum-300">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span className="font-premium">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h5 className="text-xl font-bold font-elegant text-white">Links Rápidos</h5>
            <div className="space-y-3">
              {['Todas as Camisas', 'Lançamentos', 'Ofertas', 'Times Populares', 'Seleções', 'Infantil'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-platinum-300 hover:text-gold-400 transition-colors font-premium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h5 className="text-xl font-bold font-elegant text-white">Categorias</h5>
            <div className="space-y-3">
              {['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Champions League'].map((category) => (
                <a 
                  key={category}
                  href="#" 
                  className="block text-platinum-300 hover:text-gold-400 transition-colors font-premium"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Customer service */}
          <div className="space-y-6">
            <h5 className="text-xl font-bold font-elegant text-white">Atendimento</h5>
            <div className="space-y-3">
              {['Central de Ajuda', 'Rastrear Pedido', 'Política de Troca', 'Guia de Tamanhos', 'Garantia', 'Fale Conosco'].map((service) => (
                <a 
                  key={service}
                  href="#" 
                  className="block text-platinum-300 hover:text-gold-400 transition-colors font-premium"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="border-t border-platinum-700/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-platinum-300 font-premium">
                Siga-nos nas redes sociais para novidades e conteúdo exclusivo
              </p>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' }
              ].map(({ icon: Icon, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="sm"
                  className="bg-white/10 hover:bg-gold-500/20 text-platinum-300 hover:text-gold-400 rounded-full w-12 h-12 p-0 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-platinum-700/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-platinum-400">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <span className="font-premium">© 2024 Champions Store. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-gold-400 transition-colors font-premium">Termos de Uso</a>
              <a href="#" className="hover:text-gold-400 transition-colors font-premium">Privacidade</a>
              <a href="#" className="hover:text-gold-400 transition-colors font-premium">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
