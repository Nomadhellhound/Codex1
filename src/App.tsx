import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Ship,
  Plane,
  Truck,
  Warehouse,
  ShieldCheck,
  Globe,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ChevronRight,
  Menu,
  X,
  Search,
  UserCheck,
  RefreshCw,
  BarChart3,
  Layers,
  Settings,
  Lock,
  ClipboardCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-lg bg-brand-DEFAULT flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
        <Ship className="w-5 h-5 text-navy-900" />
      </div>
      <div className="font-display font-bold text-xl tracking-tight text-slate-100">
        FCA<span className="text-brand-DEFAULT">LOG</span>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="fixed z-50 top-0 w-full border-b border-white/5 bg-navy-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#servicos" className="hover:text-brand-DEFAULT transition-colors">
              Serviços
            </a>
            <a href="#terminal" className="hover:text-brand-DEFAULT transition-colors">
              Terminal Alfandegado
            </a>
            <a href="#diferenciais" className="hover:text-brand-DEFAULT transition-colors">
              Diferenciais
            </a>
            <a href="#sobre" className="hover:text-brand-DEFAULT transition-colors">
              Sobre
            </a>
            <a href="#contato" className="btn-primary ml-4 whitespace-nowrap">
              Solicitar Cotação
            </a>
          </div>
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-md py-4 overflow-hidden"
        >
          <div className="flex flex-col gap-2 px-6 text-sm font-medium text-slate-300">
            {["Serviços", "Terminal Alfandegado", "Diferenciais", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block py-3 hover:text-brand-DEFAULT transition-colors"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-4 block py-3 px-4 rounded-xl bg-brand-DEFAULT text-navy-900 font-semibold text-center"
              onClick={() => setOpen(false)}
            >
              Solicitar Cotação
            </a>
          </div>
          </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-900/40 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-DEFAULT/20 bg-brand-DEFAULT/10 text-brand-light text-xs font-semibold tracking-wider mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-DEFAULT animate-pulse" />
          Primeiro NVOCC no Porto de Santos com Terminal Alfandegado Próprio
        </motion.div>
        <motion.h1
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          className="text-balance section-title mb-6"
        >
          Sua carga em trânsito,{" "}
          <span className="text-brand-DEFAULT">sob controle total.</span>
        </motion.h1>
        <motion.p
          initial={fadeUp.hidden}
          animate={{ ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.1 } }}
          className="section-subtitle"
        >
          Frete marítimo e aéreo, nacional e internacional. Operamos com o nosso
          próprio terminal alfandegado, IATA e JC Trans, entregando mais
          agilidade, competitividade e menos burocracia na sua cadeia de
          suprimentos.
        </motion.p>
        <motion.div
          initial={fadeUp.hidden}
          animate={{ ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.2 } }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a href="#contato" className="btn-primary w-full sm:w-auto">
            Solicitar Cotação <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#servicos" className="btn-outline w-full sm:w-auto">
            Conhecer Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "1º", label: "NVOCC no Porto de Santos com terminal próprio" },
    { value: "IATA", label: "Certificação de transporte aéreo internacional" },
    { value: "JC Trans", label: "Rede global de agentes de cargas" },
    { value: "24h", label: "Retorno de cotação para rotas principais" },
  ];
  return (
    <section className="border-y border-white/5 bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.value}
              className="glass-card p-6 text-center"
            >
              <div className="text-3xl lg:text-5xl font-bold text-brand-DEFAULT mb-1">
                {s.value}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Frete Marítimo",
      subtitle: "FCL e LCL",
      desc: "Operações de importação e exportação por via marítima com competitividade de frete e coordenação de projetos especiais.",
      badge: "Marítimo",
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Frete Aéreo",
      subtitle: "IATA",
      desc: "Transporte aéreo internacional com certificação IATA, agilidade e prazos reduzidos para cargas sensíveis ao tempo.",
      badge: "Aéreo",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Transporte Rodoviário",
      subtitle: "Porta a porta",
      desc: "Coleta e entrega rodoviária nacional, integrando portos, aeroportos e centros de distribuição com rastreamento.",
      badge: "Rodoviário",
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Terminal Alfandegado",
      subtitle: "Eudmarco",
      desc: "Próprio terminal alfandegado de containers e cargas soltas no Porto de Santos, maior controle, agilidade e menos burocracia.",
      badge: "Terminal Próprio",
    },
  ];
  return (
    <section id="servicos" className="section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Serviços FCA Log</h2>
          <p className="section-subtitle">
            Soluções completas de logística internacional para a sua cadeia de
            suprimentos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -8 }}
              className="glass-card p-6 group hover:border-brand-DEFAULT/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-DEFAULT/10 flex items-center justify-center text-brand-DEFAULT mb-4 group-hover:bg-brand-DEFAULT group-hover:text-navy-900 transition-colors">
                {s.icon}
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-semibold text-brand-light uppercase tracking-wider mb-3 block">
                {s.badge}
              </span>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-xs font-medium text-slate-500 mb-3">{s.subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <section id="terminal" className="section bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={fadeUp.hidden}
            animate={fadeUp.visible}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-DEFAULT/20 to-transparent rounded-[3rem] blur-3xl" />
            <div className="relative glass-card p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full text-brand-DEFAULT" />
                <h3 className="text-brand-DEFAULT font-semibold uppercase tracking-wider text-xs">Terminal Alfandegado</h3>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Eudmarco — seu próprio terminal no Porto de Santos</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                A FCA Log foi o primeiro NVOCC no Porto de Santos com terminal
                alfandegado próprio. Isso significa maior controle sobre os
                processos, menos etapas intermediárias, menos burocracia e
                liberação mais rápida da sua carga.
              </p>
              <ul className="space-y-3">
                {[
                  "Liberação aduaneira mais ágil",
                  "Maior segurança na operação de containers e cargas soltas",
                  "Voz de negociação direta no porto",
                  "Flexibilidade para operações sob demanda",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-brand-DEFAULT shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={fadeUp.hidden}
            animate={{ ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.15 } }}
            className="h-[420px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-slate-900 to-navy-900" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1545018114-8796a7e9abbb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <div className="glass-card p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full text-brand-DEFAULT" />
                  <span className="text-sm font-medium text-slate-100">Porto de Santos · SP · Brasil</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const diffs = [
    {
      title: "Competitividade de frete",
      desc: "Negociação direta de frete marítimo e aéreo com vozes de negociação nos principais portos e aeroportos.",
    },
    {
      title: "Alta qualidade operacional",
      desc: "Equipe especialista em logística internacional focada em qualidade e segurança em cada etapa do processo.",
    },
    {
      title: "Coordenação de Projetos Especiais",
      desc: "Operações de carga de projeto com planejamento sob medida para dimensões e prazos específicos.",
    },
    {
      title: "Certificação IATA",
      desc: "Reconhecimento internacional para transporte aéreo com padrões de qualidade e segurança.",
    },
    {
      title: "Membro JC Trans",
      desc: "Rede global de agentes de cargas que amplia o alcance e a confiabilidade das operações internacionais.",
    },
    {
      title: "Serviços personalizados sob demanda",
      desc: "Soluções customizadas para cada cliente, estratégias eficientes e foco em resultados positivos.",
    },
  ];
  return (
    <section id="diferenciais" className="section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="section-title">Por que escolher a FCA Log?</h2>
            <p className="section-subtitle">
              Um modelo inovador que proporciona maior controle nos processos de
              supply chain, mais flexibilidade, segurança e melhor desempenho
              logístico.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {diffs.map((d) => (
                <motion.div
                  key={d.title}
                  whileHover={{ y: -6 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-lg font-bold mb-2">{d.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Cotação", desc: "Envie sua demanda de frete marítimo, aéreo ou rodoviário." },
    { n: "02", title: "Reserva", desc: "Bloqueamos espaço e tratamos a documentação aduaneira." },
    { n: "03", title: "Transporte", desc: "Acompanhamos a carga da origem ao destino com rastreamento." },
    { n: "04", title: "Entrega", desc: "Liberação alfandegada e entrega porta a porta no destino." },
  ];
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Como funciona</h2>
          <p className="section-subtitle">
            Do orçamento à entrega, sua carga acompanhada com tecnologia e
            proximidade.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              whileHover={{ y: -6 }}
              className="glass-card p-8 text-center relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-DEFAULT flex items-center justify-center text-navy-900 font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                {s.n}
              </div>
              <h3 className="mt-12 text-lg font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contato" className="section">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          className="glass-card p-8 lg:p-12 rounded-[3rem]"
        >
          <h2 className="section-title mb-4">Pronto para mover sua carga?</h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Solicite uma cotação e fale diretamente com nossos especialistas em
            frete marítimo e aéreo.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const btn = e.currentTarget.querySelector("button");
              const original = btn.innerHTML;
              btn.innerHTML = "Enviado!";
              btn.classList.replace("bg-brand-DEFAULT", "bg-emerald-500");
              setTimeout(() => {
                btn.innerHTML = original;
                btn.classList.replace("bg-emerald-500", "bg-brand-DEFAULT");
                (e.currentTarget as HTMLFormElement).reset();
              }, 2000);
            }}
            className="grid md:grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Nome completo</label>
              <input
                type="text"
                required
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-DEFAULT transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">E-mail corporativo</label>
              <input
                type="email"
                required
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-DEFAULT transition-colors"
                placeholder="empresa@exemplo.com"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-300">Mensagem</label>
              <textarea
                required
                rows={3}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-DEFAULT transition-colors"
                placeholder="Qual tipo de frete, origem e destino?"
              />
            </div>
            <button type="submit" className="md:col-span-2 btn-primary">
              Enviar Solicitação
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Frete marítimo e aéreo com terminal alfandegado próprio no Porto
              de Santos. NVOCC especialista em logística internacional.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-6">Serviços</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#servicos" className="hover:text-brand-DEFAULT transition-colors">Frete Marítimo</a></li>
              <li><a href="#servicos" className="hover:text-brand-DEFAULT transition-colors">Frete Aéreo</a></li>
              <li><a href="#servicos" className="hover:text-brand-DEFAULT transition-colors">Rodoviário</a></li>
              <li><a href="#terminal" className="hover:text-brand-DEFAULT transition-colors">Terminal Alfandegado</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#sobre" className="hover:text-brand-DEFAULT transition-colors">Sobre a Empresa</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-DEFAULT transition-colors">Diferenciais</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">Ética e Transparência</a></li>
              <li><a href="#" className="hover:text-brand-DEFAULT transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-DEFAULT shrink-0" />
                <a href="mailto:contato@fcalog.com.br" className="hover:text-brand-DEFAULT transition-colors">contato@fcalog.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-DEFAULT shrink-0" />
                <a href="tel:+551330000000" className="hover:text-brand-DEFAULT transition-colors">+55 (13) 3000-0000</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-DEFAULT shrink-0" />
                <span>Porto de Santos · SP · Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          <p className="text-xs text-slate-500">
            FCA COMÉRCIO EXTERIOR E LOGÍSTICA LTDA. | 00.639.367/0003-11
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-slate-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-s flex-col relative isolate">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Terminal />
        <Diferenciais />
        <Process />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
