import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15q69dl",
        "template_trei7dq",
        form.current,
        "2ut3yuau_EJ6W2z94",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black text-white overflow-hidden font-sf"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-gray-400">Let's build something amazing together.</p>
        </div>

        {/* Form Widget */}
        <div className="bg-[#1c1c1e] p-8 md:p-12 rounded-[32px] shadow-2xl border border-white/5 relative overflow-hidden">
             {/* Glossy Effect */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
             
          <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400 ml-1 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-2xl bg-[#2c2c2e] border-none text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007AFF] transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400 ml-1 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="john@example.com"
                className="w-full px-5 py-4 rounded-2xl bg-[#2c2c2e] border-none text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007AFF] transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400 ml-1 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Write your message..."
                rows="5"
                className="w-full px-5 py-4 rounded-2xl bg-[#2c2c2e] border-none text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007AFF] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#007AFF] text-white font-semibold text-lg rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#007AFF]/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
