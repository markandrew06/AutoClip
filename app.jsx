import { motion } from "framer-motion";

const floatingItems = [
  { emoji: "✨", x: "10%", y: "15%", delay: 0 },
  { emoji: "🎬", x: "85%", y: "10%", delay: 1 },
  { emoji: "📈", x: "8%", y: "70%", delay: 2 },
  { emoji: "🤖", x: "90%", y: "65%", delay: 0.5 },
  { emoji: "🔥", x: "50%", y: "8%", delay: 1.5 },
  { emoji: "🎯", x: "55%", y: "82%", delay: 2.5 },
];

const GradientHeading = ({ children, className = "" }) => (
  <h2
    className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent tracking-tight ${className}`}
  >
    {children}
  </h2>
);

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 pointer-events-none" />
    <div className="relative">{children}</div>
  </div>
);

export default function AutoClipWebsite() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_35%)]" />

      {/* Floating Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingItems.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl md:text-6xl opacity-10"
            style={{ left: item.x, top: item.y }}
            animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
          >
            {item.emoji}
          </motion.div>
        ))}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0], y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            AutoClip
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            {['Features', 'How It Works', 'Pricing', 'Contact'].map((item, idx) => (
              <a
                key={item}
                href={["#features", "#process", "#pricing", "#contact"][idx]}
                className="hover:text-white transition duration-300 hover:scale-110"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-cyan-300 text-sm mb-6 shadow-lg shadow-cyan-400/10">
              🚀 AI-Powered Clipping Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Turn Your Best Moments Into
              <span className="block">Viral Shorts</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-8 max-w-xl">
              AI-powered clipping agency for streamers and creators. We turn your best moments into viral short-form content.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50"
              >
                Start Clipping Today
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 rounded-2xl font-semibold border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:scale-105 transition duration-300 shadow-lg shadow-black/20"
              >
                View Pricing
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              {[
                ['10M+', 'Views Generated'],
                ['500+', 'Creators Served'],
                ['24h', 'Delivery Time'],
              ].map(([value, label]) => (
                <motion.div key={label} whileHover={{ scale: 1.08, y: -4 }}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <GlassCard className="p-8">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 text-7xl font-black shadow-2xl shadow-cyan-500/20">
                ▶
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {['🎯 Hook', '📝 Captions', '🔥 Viral'].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl p-3 text-center text-sm bg-white/5 backdrop-blur-xl border border-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <GradientHeading>Why Choose AutoClip?</GradientHeading>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
          We combine AI automation with professional editing to create content designed for reach and engagement.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ['🤖', 'AI Highlight Detection', 'Our AI finds the most exciting, funny, and impactful moments automatically.'],
            ['🎬', 'Professional Editing', 'Dynamic captions, zoom effects, emojis, and sound design included.'],
            ['📈', 'Optimized for Virality', 'Every clip is crafted to maximize watch time and social engagement.'],
          ].map(([icon, title, text]) => (
            <motion.div key={title} whileHover={{ y: -10, scale: 1.03 }} transition={{ duration: 0.3 }}>
              <GlassCard className="p-8 hover:border-cyan-400/20 hover:shadow-cyan-400/10 transition-all duration-300">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-slate-400 leading-7">{text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative z-10 py-28 bg-white/5 border-y border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <GradientHeading>How It Works</GradientHeading>
          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {[
              ['1', 'Upload Content', 'Send your streams, podcasts, or videos.'],
              ['2', 'AI Finds Highlights', 'We identify the strongest moments.'],
              ['3', 'Editors Polish', 'Captions and visual effects are added.'],
              ['4', 'Go Viral', 'Receive ready-to-post short-form clips.'],
            ].map(([num, title, desc]) => (
              <motion.div key={num} className="text-center" whileHover={{ scale: 1.06, y: -4 }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 flex items-center justify-center text-2xl font-black mb-5 shadow-xl shadow-cyan-400/25">
                  {num}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <GradientHeading>Loved by Creators</GradientHeading>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            'AutoClip helped me grow from 2k to 50k followers in three months.',
            'The clips are clean, fast, and consistently perform well.',
            'I focus on creating while AutoClip handles the editing.',
          ].map((quote, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }}>
              <GlassCard className="p-8 hover:shadow-cyan-400/10 transition-all duration-300">
                <p className="text-slate-300 italic leading-7">"{quote}"</p>
                <div className="mt-4 text-cyan-400 font-semibold">Creator #{i + 1}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 py-28 bg-white/5 border-y border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <GradientHeading>Simple Pricing</GradientHeading>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              ['Free Starter', '$0/mo', '3 clips per month'],
              ['Starter', '$29/mo', '10 clips per month'],
              ['Growth', '$79/mo', '30 clips per month'],
              ['Scale', '$149/mo', 'Unlimited clipping support'],
            ].map(([name, price, desc], idx) => {
              const featured = idx === 2;
              return (
                <motion.div key={name} whileHover={{ y: -10, scale: 1.03 }}>
                  <GlassCard
                    className={`p-8 h-full ${
                      featured
                        ? 'border-cyan-400/30 shadow-cyan-400/20 ring-1 ring-cyan-400/20'
                        : ''
                    }`}
                  >
                    {featured && (
                      <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{name}</h3>
                    <div className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                      {price}
                    </div>
                    <p className="text-slate-400">{desc}</p>
                    <button className="mt-6 w-full py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40">
                      Choose Plan
                    </button>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6 py-28">
        <GlassCard className="p-10 md:p-12">
          <GradientHeading className="text-center">Ready to Grow?</GradientHeading>
          <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
            Tell us about your content and we'll build a custom clipping workflow for you.
          </p>
          <form className="grid gap-4">
            {["Your Name", "Email Address"].map((placeholder, idx) => (
              <input
                key={idx}
                type={idx === 1 ? 'email' : 'text'}
                placeholder={placeholder}
                className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 outline-none backdrop-blur-xl transition duration-300 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:shadow-lg focus:shadow-cyan-400/10"
              />
            ))}
            <textarea
              rows="4"
              placeholder="Tell us about your channel"
              className="bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3 outline-none backdrop-blur-xl transition duration-300 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:shadow-lg focus:shadow-cyan-400/10"
            />
            <button
              type="submit"
              className="mt-2 py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:scale-[1.02] transition duration-300 shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50"
            >
              Book a Free Consultation
            </button>
          </form>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-slate-500">
        © 2026 AutoClip. AI-powered clipping for streamers and creators.
      </footer>
    </div>
  );
}
