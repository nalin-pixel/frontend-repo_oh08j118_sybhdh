import { motion } from 'framer-motion'
import { Monitor, Gauge, Wand2, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'AetherOS',
    desc: 'A next‑gen SaaS website with interactive 3D visuals and conversion‑focused flows.',
    tag: 'SaaS',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'NovaCommerce',
    desc: 'High‑performance eCommerce storefront with headless CMS and lightning‑fast UX.',
    tag: 'eCommerce',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Ion Landing',
    desc: 'Product launch microsite with motion design and playful interactions.',
    tag: 'Launch',
    image: 'https://images.unsplash.com/photo-1510924014959-7e1849088bfe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJb24lMjBMYW5kaW5nfGVufDB8MHx8fDE3NjM0NzMzMjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Selected work</h2>
            <p className="text-slate-400 mt-2 max-w-xl">A peek at recent projects where strategy, design and engineering merged to create measurable impact.</p>
          </div>
          <div className="hidden md:flex gap-3 text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Monitor className="h-4 w-4" /> Web</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Wand2 className="h-4 w-4" /> Motion</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Gauge className="h-4 w-4" /> Performance</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Rocket className="h-4 w-4" /> Launch</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-fuchsia-300/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> {p.tag}
                </div>
                <h3 className="mt-2 text-white text-lg font-medium">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
