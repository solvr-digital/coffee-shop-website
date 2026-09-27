import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Sparkles, Check, Coffee } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1 = details, 2 = success
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
    guests: '2 Guests',
    seating: 'Main Salon',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const times = ['08:00 AM', '09:30 AM', '10:30 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '07:30 PM'];
  const guestOptions = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5-6 Guests', 'Private Salon (7+)'];
  const seatingZones = [
    { id: 'Main Salon', desc: 'Warm oak tables, soft lighting & art collection' },
    { id: 'Botanical Terrace', desc: 'Sunlit glasshouse surrounded by lush botanicals' },
    { id: 'Barista Atelier', desc: 'Front-row marble counter overlooking the pour' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 800);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#18130F] text-cream-100 border border-gold-500/30 rounded-none shadow-2xl p-6 sm:p-10 my-8 z-10 overflow-hidden"
          >
            {/* Ambient gold glow decoration */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-cream-300/60 hover:text-gold-400 transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            {step === 1 ? (
              <div>
                {/* Header */}
                <div className="text-center mb-8">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-gold-500 block mb-2 font-medium">
                    Aurelia Melbourne · Table Booking
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-cream-50 font-normal tracking-wide">
                    Reserve Your Experience
                  </h3>
                  <p className="text-cream-300/70 text-xs sm:text-sm mt-2 max-w-md mx-auto">
                    Allow us to curate your morning ritual or afternoon respite in our Market Street sanctuary.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-2 flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold-500" /> Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-espresso-900/90 border border-gold-500/20 px-4 py-3 text-sm text-cream-100 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-2 flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-gold-500" /> Preferred Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-espresso-900/90 border border-gold-500/20 px-4 py-3 text-sm text-cream-100 focus:outline-none focus:border-gold-500 transition-colors"
                      >
                        {times.map((t) => (
                          <option key={t} value={t} className="bg-espresso-900 text-cream-100">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Party Size */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-2 flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-gold-500" /> Party Size
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {guestOptions.map((g) => (
                        <button
                          type="button"
                          key={g}
                          onClick={() => setFormData({ ...formData, guests: g })}
                          className={`px-2 py-2.5 text-xs text-center border transition-all ${
                            formData.guests === g
                              ? 'border-gold-500 bg-gold-500/15 text-gold-300 font-medium'
                              : 'border-white/10 hover:border-gold-500/40 text-cream-300/70'
                          }`}
                        >
                          {g.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-cream-300/80 mb-2 flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Preferred Seating
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {seatingZones.map((zone) => (
                        <div
                          key={zone.id}
                          onClick={() => setFormData({ ...formData, seating: zone.id })}
                          className={`cursor-pointer p-3 border text-left transition-all ${
                            formData.seating === zone.id
                              ? 'border-gold-500 bg-gold-500/10'
                              : 'border-white/10 hover:border-gold-500/30'
                          }`}
                        >
                          <div className="text-xs font-serif font-medium text-cream-50">{zone.id}</div>
                          <div className="text-[10px] text-cream-300/60 mt-1 leading-snug">{zone.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-espresso-900/90 border border-gold-500/20 px-4 py-3 text-sm text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-espresso-900/90 border border-gold-500/20 px-4 py-3 text-sm text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Dietary notes or special celebration (optional)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-espresso-900/90 border border-gold-500/20 px-4 py-3 text-sm text-cream-100 placeholder-cream-300/40 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-gold-500 text-espresso-950 hover:bg-gold-400 font-medium py-4 px-6 text-xs uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-pulse">Securing Table...</span>
                    ) : (
                      <>
                        <span>Confirm Reservation</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success confirmation state */
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-500/15 border border-gold-500 flex items-center justify-center text-gold-400">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold-500 block mb-2 font-medium">
                  Reservation Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-cream-50 font-normal tracking-wide mb-3">
                  We look forward to welcoming you, {formData.name || 'Guest'}.
                </h3>
                <p className="text-cream-300/80 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  A confirmation email with calendar invitation has been sent to <span className="text-gold-400">{formData.email}</span>.
                </p>

                {/* Summary ticket */}
                <div className="bg-espresso-900/80 border border-gold-500/30 p-5 max-w-md mx-auto text-left mb-8 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-cream-300/60">Booking Reference</span>
                    <span className="font-mono text-gold-400 font-bold">AUR-2026-{(Math.random() * 9000 + 1000).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-cream-300/60">Date & Time</span>
                    <span className="text-cream-100">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-cream-300/60">Party Size</span>
                    <span className="text-cream-100">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream-300/60">Seating Area</span>
                    <span className="text-cream-100">{formData.seating}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="bg-transparent border border-gold-500/50 hover:bg-gold-500 hover:text-espresso-950 text-gold-400 py-3 px-8 text-xs uppercase tracking-[0.2em] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
