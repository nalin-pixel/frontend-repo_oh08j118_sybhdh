import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Award‑winning web design studio
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
            We craft standout digital experiences
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl">
            From strategy to launch, we partner with ambitious brands to design, build, and scale beautiful websites that convert.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-100 transition-colors">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
