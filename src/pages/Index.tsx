import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  TrendingDown, 
  Clock, 
  BarChart3, 
  Target, 
  DollarSign,
  Bot,
  Cpu,
  BrainCircuit
} from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Eficiência Máxima",
      description: "Aumento na velocidade de processos com automação inteligente"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Redução de Custos",
      description: "Economia em custos operacionais com processos automatizados"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Operação 24/7",
      description: "Disponibilidade contínua sem pausas ou limitações humanas"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Escalabilidade",
      description: "Cresça sem limites com soluções que se adaptam ao seu volume"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisão",
      description: "Eliminação de erros humanos com IA de alta precisão"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "ROI Garantido",
      description: "Retorno sobre investimento comprovado em 6 meses"
    }
  ];

  const products = [
    {
      title: "Produto de Entrada",
      subtitle: "Bot de Entrada",
      icon: <Bot className="w-12 h-12" />,
      color: "aa-entry",
      gradient: "bg-gradient-aa-green"
    },
    {
      title: "Soluções Escaláveis", 
      subtitle: "Bot Avançado",
      icon: <Cpu className="w-12 h-12" />,
      color: "aa-advanced",
      gradient: "bg-gradient-aa-main"
    },
    {
      title: "Consultoria Personalizada",
      subtitle: "ProspectLangGraph", 
      icon: <BrainCircuit className="w-12 h-12" />,
      color: "aa-prospect",
      gradient: "bg-gradient-aa-premium"
    }
  ];

  return (
    <div className="min-h-screen bg-background aa-particle-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              className="text-8xl font-bold mb-6 text-gradient-aa-main aa-pulse-glow relative"
            >
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-3 h-3 bg-aa-blue rounded-full"
              />
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-2 -left-6 w-2 h-2 bg-aa-purple rounded-full"
              />
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 -right-8 w-4 h-4 bg-aa-green rounded-full"
              />
              AA SYNC
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            A revolução da <span className="text-gradient-aa-main">automação inteligente</span> está ao seu alcance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-aa-text-light mb-8 max-w-3xl mx-auto"
          >
            Transforme seu negócio com soluções de IA que trabalham 24/7, reduzem custos e maximizam resultados
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-aa-main hover:scale-105 transition-transform duration-300 text-xl px-8 py-6 aa-glow-blue relative overflow-hidden animate-pulse"
              >
                <span className="relative z-10">Transforme seu Negócio com IA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-aa-main">
              Transforme seu Negócio com IA
            </h2>
            <p className="text-xl text-aa-text-light">
              Descubra os benefícios que revolucionarão sua operação
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-aa-blue/20 transform-gpu">
                  <motion.div 
                    className="text-primary mb-4 group-hover:text-aa-blue transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-aa-text-muted">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents as a Service Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-6xl font-bold mb-4 text-gradient-aa-main">
              AA SYNC
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Agents as a Service
            </h2>
            <p className="text-2xl text-aa-text-light mb-8">
              Automação Inteligente para Todos os Negócios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="group cursor-pointer"
              >
                <Card className={`p-8 ${product.gradient} border-none h-full relative overflow-hidden group-hover:shadow-2xl transition-all duration-500 transform-gpu`}>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                  />
                  <motion.div 
                    className="text-white mb-6 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                    {product.title}
                  </h3>
                  <p className="text-white/90 text-lg relative z-10">
                    {product.subtitle}
                  </p>
                  <motion.div 
                    className="absolute bottom-2 right-2 text-white/30 text-sm font-mono"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI POWERED
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl text-gradient-aa-main font-semibold"
          >
            Comece pequeno, cresça grande com IA.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Index;