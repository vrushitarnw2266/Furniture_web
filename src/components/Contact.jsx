import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import logger from "../utils/logger";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  // Check variables on mount
  useEffect(() => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (import.meta.env.DEV) {
      logger.info("EmailJS Configuration Check (v4)", {
        hasService: !!SERVICE_ID,
        hasTemplate: !!TEMPLATE_ID,
        hasPublicKey: !!PUBLIC_KEY
      });
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        logger.warn("ACTION REQUIRED: Restart your development server (npm run dev) to load the .env file.");
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    // IMPORTANT: Replace these with your actual EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debugging: Log status
    logger.debug("Form Submission Started", { service: SERVICE_ID, template: TEMPLATE_ID });

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      logger.error("Configuration Missing during submission");
      setStatus({
        type: "error",
        message: "Configuration missing. Please restart your dev server after adding .env variables."
      });
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          logger.info("Email sent successfully");
          setStatus({
            type: "success",
            message: "Thank you! Your message has been sent successfully."
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          logger.error("EmailJS Error details:", error);
          setStatus({
            type: "error",
            message: `Error: ${error?.text || "Unknown error"}. Check your EmailJS dashboard settings.`
          });
        }
      )
      .finally(() => {
        setIsSending(false);
        // Clear status after 5 seconds
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Ready to start your next custom furniture project? We're here to help you bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Contact Information */}
          <div className="space-y-10 text-left">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-amber-400 rounded-2xl shadow-lg">
                  <Mail className="text-black h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Contact Info</h3>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <Mail className="text-amber-500" />, label: "Email Us", val: "amit.panchal@furniture.com" },
                  { icon: <Phone className="text-amber-500" />, label: "Call Us", val: "+91 98XXX XXX10" },
                  { icon: <MapPin className="text-amber-500" />, label: "Visit Us", val: "Versova, Mumbai, India" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-amber-50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
              <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="text-amber-500" size={20} />
                Business Hours
              </h4>
              <div className="space-y-2 text-slate-600 font-medium text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="text-slate-900 font-bold">09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Sunday</span>
                  <span className="text-amber-600 font-bold">By Appointment Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200">
            <div className="mb-8">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Send Message</h3>
              <p className="text-slate-500 font-medium">We'll get back to you within 24 hours.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Ex. Amit Panchal"
                    className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium text-slate-900 ${focusedField === "name" ? "border-amber-400 shadow-lg shadow-amber-400/10 ring-4 ring-amber-400/5" : "border-slate-100"
                      }`}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="amit@example.com"
                    className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium text-slate-900 ${focusedField === "email" ? "border-amber-400 shadow-lg shadow-amber-400/10 ring-4 ring-amber-400/5" : "border-slate-100"
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Interested in Modular Kitchen"
                  className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-medium text-slate-900 ${focusedField === "subject" ? "border-amber-400 shadow-lg shadow-amber-400/10 ring-4 ring-amber-400/5" : "border-slate-100"
                    }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your project..."
                  className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-5 outline-none transition-all duration-300 font-medium text-slate-900 resize-none ${focusedField === "message" ? "border-amber-400 shadow-lg shadow-amber-400/10 ring-4 ring-amber-400/5" : "border-slate-100"
                    }`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`mt-4 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-lg rounded-xl shadow-lg transition-all duration-300 transform flex items-center justify-center gap-3 group ${isSending ? "opacity-70 cursor-not-allowed scale-100" : "shadow-amber-500/50 hover:scale-[1.02] hover:shadow-amber-500/70"
                  }`}
              >
                {isSending ? (
                  <>
                    Sending...
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status.message && (
                <div className={`flex items-center gap-3 p-4 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300 ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"
                  }`}>
                  {status.type === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <p className="font-bold text-sm">{status.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;