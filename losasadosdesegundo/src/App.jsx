import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Flame, Database, Target, TrendingUp, MonitorPlay, Zap, ArrowRight, Smartphone, Activity, Code, MapPin, CheckCircle2 } from 'lucide-react';

function App() {
  const [orderState, setOrderState] = useState(0); // 0: Idle, 1: Cocinando, 2: Empacando, 3: En camino

  const simulateOrder = () => {
    setOrderState(1);
    setTimeout(() => setOrderState(2), 2000);
    setTimeout(() => setOrderState(3), 4000);
    setTimeout(() => setOrderState(0), 8000); // Reset after a while
  };

  return (
    <div className="min-h-screen bg-brand-dark bg-wood relative selection:bg-brand-orange selection:text-white pb-20">

      {/* Banner Superior Animado */}
      <div className="bg-brand-red py-2 overflow-hidden border-b border-brand-orange/30 sticky top-0 z-50">
        <motion.div
          className="flex whitespace-nowrap items-center space-x-4"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center text-white font-bold tracking-wider text-sm">
              <Truck size={16} className="mx-2" />
              ENVÍOS GRATIS A PARTIR DE $60.000
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 overflow-hidden">
        {/* Efecto humo de fondo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ff5a00 0%, transparent 60%)',
          filter: 'blur(60px)'
        }}></div>

        <div className="max-w-md mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/assets/asados.png"
            alt="Los Asados de Segundo Logo"
            className="w-48 mb-8 filter drop-shadow-[0_0_15px_rgba(255,90,0,0.5)]"
          />

          <h1 className="text-4xl font-display font-black text-white mb-2 leading-tight">
            LA VERDADERA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">PICADA CALEÑA</span>
          </h1>
          <p className="text-gray-400 mb-10 font-medium">Tradición, humo y candela.</p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative w-full aspect-square rounded-3xl p-1 bg-gradient-to-b from-brand-orange/40 to-transparent shadow-[0_0_40px_rgba(255,90,0,0.15)]"
          >
            <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10"></div>
            <img
              src="/assets/asado.png"
              alt="Picada Familiar"
              className="w-full h-full object-cover rounded-[22px]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-dark/90 backdrop-blur-sm border border-brand-orange/50 px-6 py-2 rounded-full shadow-lg">
              <span className="font-display font-bold text-xl text-white">
                $60.000 <span className="text-brand-orange text-sm ml-1 text-fire">COP</span>
              </span>
            </div>
          </motion.div>

          <button className="mt-8 w-full bg-gradient-to-r from-brand-orange to-brand-red text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 text-lg shadow-[0_0_20px_rgba(255,90,0,0.4)] hover:shadow-[0_0_30px_rgba(255,90,0,0.6)] transition-all transform hover:-translate-y-1">
            <Flame size={24} className="animate-pulse" />
            <span>PEDIR AHORA</span>
          </button>
        </div>
      </section>

      {/* Propuesta de Valor (Arquitectura Bruiser) */}
      <section className="py-20 px-6 bg-black/60 border-y border-brand-orange/20 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>

        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <Code className="text-brand-orange" size={28} />
            <h2 className="text-2xl font-display font-black">ARQUITECTURA DE CRECIMIENTO</h2>
          </div>
          <p className="text-gray-400 mb-10 text-sm leading-relaxed">
            No es solo una página web, es una máquina de ventas diseñada bajo una infraestructura de alta conversión y control total de datos.
          </p>

          <div className="space-y-6">
            <div className="bg-brand-dark border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-brand-orange/30 transition-colors">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-xl group-hover:bg-brand-orange/20 transition-colors"></div>
              <Database className="text-brand-orange mb-3" size={24} />
              <h3 className="font-bold text-lg mb-2">Infraestructura & Data</h3>
              <p className="text-gray-400 text-sm">Bases de datos robustas (NoSQL) para gestión de pedidos en tiempo real y analítica profunda del comportamiento de tus clientes.</p>
            </div>

            <div className="bg-brand-dark border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-brand-red/30 transition-colors">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-red/10 rounded-full blur-xl group-hover:bg-brand-red/20 transition-colors"></div>
              <Target className="text-brand-red mb-3" size={24} />
              <h3 className="font-bold text-lg mb-2">Marketing Tech</h3>
              <p className="text-gray-400 text-sm">Implementación de Pixel de Meta y Google Tag Manager. Retargeting avanzado para impactar de nuevo a los que no compraron la primera vez.</p>
            </div>

            <div className="bg-brand-dark border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:brand-yellow/30 transition-colors">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-yellow/10 rounded-full blur-xl group-hover:bg-brand-yellow/20 transition-colors"></div>
              <MonitorPlay className="text-brand-yellow mb-3" size={24} />
              <h3 className="font-bold text-lg mb-2">Contenido High-End</h3>
              <p className="text-gray-400 text-sm">Diseño de 1 pieza visual semanal de calidad mundial para redes sociales, optimizada para conversión directa.</p>
            </div>

            <div className="bg-brand-dark border border-white/5 p-5 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors"></div>
              <TrendingUp className="text-blue-500 mb-3" size={24} />
              <h3 className="font-bold text-lg mb-2">Estrategia & Funnels</h3>
              <p className="text-gray-400 text-sm">Optimización constante de funnels de venta (CPA, LTV). Fidelización automatizada vía WhatsApp impulsada por eventos de datos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Viva - Journey */}
      <section className="py-20 px-6 relative">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-display font-black text-center mb-2">EL JOURNEY CALEÑO</h2>
          <p className="text-gray-400 text-center mb-10 text-sm">Experiencia de usuario (UX) diseñada para dar certidumbre y hambre.</p>

          <div className="bg-black/50 border border-brand-orange/20 rounded-3xl p-6 relative overflow-hidden">

            <div className="mb-8 relative">
              {/* Mapa Simulado */}
              <div className="w-full h-40 bg-gray-900 rounded-xl overflow-hidden relative border border-white/10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaXRoIGQ9Ik0wIDEwaDQwdjFINHptMCAyMGg0MHYxSDB6TTEwIDB2NDBoLTFWMHptMjAgMHY0MGgtMVYweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <MapPin className="text-brand-red drop-shadow-[0_0_10px_rgba(204,41,0,0.8)]" size={32} />
                </div>

                {orderState === 3 && (
                  <motion.div
                    className="absolute top-1/2 left-0"
                    initial={{ x: -20, y: 10 }}
                    animate={{ x: 250, y: -20 }}
                    transition={{ duration: 4, ease: "linear" }}
                  >
                    <div className="relative">
                      <Truck className="text-brand-orange" size={24} />
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex space-x-1">
                        <motion.div animate={{ opacity: [1, 0], scale: [1, 2] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-2 h-2 bg-brand-red rounded-full blur-[1px]"></motion.div>
                        <motion.div animate={{ opacity: [1, 0], scale: [1, 1.5] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }} className="w-2 h-2 bg-brand-orange rounded-full blur-[1px]"></motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 space-y-6">
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-white/10"></div>

              <div className="relative">
                <div className={`absolute -left-6 w-5 h-5 rounded-full border-4 border-brand-dark flex items-center justify-center transition-colors ${orderState >= 1 ? 'bg-brand-orange' : 'bg-gray-700'}`}>
                   {orderState >= 1 && <Flame size={10} className="text-white" />}
                </div>
                <h4 className={`font-bold transition-colors ${orderState >= 1 ? 'text-white' : 'text-gray-500'}`}>Fuego en la parrilla</h4>
                <p className="text-xs text-gray-500">Preparando el corte perfecto.</p>
              </div>

              <div className="relative">
                <div className={`absolute -left-6 w-5 h-5 rounded-full border-4 border-brand-dark transition-colors ${orderState >= 2 ? 'bg-brand-orange' : 'bg-gray-700'}`}></div>
                <h4 className={`font-bold transition-colors ${orderState >= 2 ? 'text-white' : 'text-gray-500'}`}>Empacando sabor</h4>
                <p className="text-xs text-gray-500">Sellando al vacío para preservar jugos.</p>
              </div>

              <div className="relative">
                <div className={`absolute -left-6 w-5 h-5 rounded-full border-4 border-brand-dark transition-colors ${orderState >= 3 ? 'bg-brand-orange' : 'bg-gray-700'}`}></div>
                <h4 className={`font-bold transition-colors ${orderState >= 3 ? 'text-white' : 'text-gray-500'}`}>Repartidor en camino</h4>
                <p className="text-xs text-gray-500">La candela va llegando a tu mesa.</p>
              </div>
            </div>

            <button
              onClick={simulateOrder}
              disabled={orderState !== 0}
              className="mt-8 w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Zap size={18} className={orderState !== 0 ? "text-gray-500" : "text-brand-orange"} />
              <span>{orderState === 0 ? "Simular Tracking Exótico" : "En proceso..."}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Finanzas */}
      <section className="py-20 px-6 bg-black/80 relative">
         <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-display font-black mb-2 text-center">EL MODELO NO-BRAINER</h2>
          <p className="text-gray-400 text-sm text-center mb-10">Ingeniería financiera para recuperar tu independencia.</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-4 text-center">
              <h3 className="text-red-400 font-bold mb-1 text-sm">Apps Terceros</h3>
              <div className="text-3xl font-black text-white mb-2">20%+</div>
              <p className="text-xs text-gray-400">Comisión por venta. Secuestran tus clientes y tu data.</p>
            </div>

            <div className="bg-brand-orange/20 border border-brand-orange/50 rounded-2xl p-4 text-center fire-glow relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">TÚ ALIADO</div>
              <h3 className="text-brand-orange font-bold mb-1 text-sm">Alianza Bruiser</h3>
              <div className="text-3xl font-black text-white mb-2">4%</div>
              <p className="text-xs text-gray-300">Basado en éxito. Tú controlas la data y la audiencia.</p>
            </div>
          </div>

          <div className="bg-brand-dark/50 border border-white/5 rounded-xl p-5">
            <h4 className="font-bold mb-3 flex items-center"><CheckCircle2 size={16} className="text-brand-orange mr-2"/> Transparencia Total</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start"><span className="text-brand-red mr-2">•</span> El restaurante asume gastos operativos lógicos: pauta, influencers, hosting y pasarela de pago (2.5% a 3.8%).</li>
              <li className="flex items-start"><span className="text-brand-red mr-2">•</span> Yo pongo toda la ingeniería, diseño y estrategia.</li>
              <li className="flex items-start"><span className="text-brand-red mr-2">•</span> Ganamos juntos: solo cobro si el ecosistema genera ventas reales.</li>
            </ul>
          </div>
         </div>
      </section>

      {/* Stack Técnico */}
      <section className="py-12 px-6 text-center">
         <div className="max-w-md mx-auto">
            <h3 className="text-sm font-bold text-gray-500 mb-6 tracking-widest uppercase">Powered by Bruiser Stack</h3>
            <div className="flex justify-center items-center space-x-6 text-gray-600">
              <div className="flex flex-col items-center"><Smartphone size={24} className="mb-2" /><span className="text-xs">Mobile-First</span></div>
              <div className="flex flex-col items-center"><Activity size={24} className="mb-2" /><span className="text-xs">Edge Speed</span></div>
              <div className="flex flex-col items-center"><Code size={24} className="mb-2" /><span className="text-xs">React/Vite</span></div>
            </div>
         </div>
      </section>

      {/* Footer Fijo con CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-brand-dark/95 backdrop-blur-md border-t border-brand-orange/30 p-4 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Propuesta Exclusiva</span>
            <span className="font-bold text-white text-sm">Los Asados de Segundo</span>
          </div>
          <a
            href="https://bruiser.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors border border-white/10"
          >
            <span className="text-xs font-medium text-gray-300">Hecho por</span>
            <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">BRUISER TECH</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;