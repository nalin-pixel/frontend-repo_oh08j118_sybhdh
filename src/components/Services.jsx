import { motion } from 'framer-motion'
import { Layout, Leaf, Code2, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Brand & Web Design',
    desc: 'Identity systems, design language, and world‑class web UI that tells your story.'
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Modern, fast frontends with animations, CMS integrations, and best‑in‑class SEO.'
  },
  {
    icon: BarChart3,
    title: 'Conversion & Growth',
    desc: 'CRO, A/B testing, analytics and experiments that compound results over time.'
  },
  {
    icon: Leaf,
    title: 'Performance & Accessibility',
    desc: 'Lighthouse‑green performance and WCAG‑compliant experiences from day one.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="text-slate-400 mt-2 max-w-2xl">A senior team across strategy, design and engineering. We plug into your roadmap and deliver end‑to‑end.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <s.icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-white text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{s.desc}</p>
              <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition-all group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
