import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white tracking-tight"
        >
          Ready to build something extraordinary?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-slate-400 text-lg"
        >
          Tell us about your goals. We’ll come back with a roadmap, timeline and a fixed price.
        </motion.p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-4 sm:grid-cols-2 text-left"
        >
          <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Name" />
          <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Email" />
          <input className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Company" />
          <textarea rows="4" className="sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Tell us about the project" />
          <button className="sm:col-span-2 inline-flex justify-center rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-100 transition-colors">
            Request proposal
          </button>
        </form>
      </div>
    </section>
  )
}
