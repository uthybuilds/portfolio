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
      className="relative py-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1600&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/90" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8">
        {/* Form */}
        <div className="bg-transparent border border-white/10 p-10 rounded-none shadow-none">
          <h2 className="text-4xl font-bold mb-10 text-left font-serif italic text-white">
            Get in Touch
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c25e48] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c25e48] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Write your message..."
                rows="5"
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c25e48] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-medium tracking-wide text-sm uppercase hover:bg-gray-200 transition-all cursor-pointer mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-12 pl-0 lg:pl-10 pt-10 lg:pt-0">
          <div className="space-y-2">
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Email
            </p>
            <p className="text-2xl font-serif text-white">
              uthmanajanaku@gmail.com
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Phone
            </p>
            <p className="text-2xl font-serif text-white">
              (+234) 703 773 0858
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Based In
            </p>
            <p className="text-2xl font-serif text-white">Lagos, Nigeria</p>
          </div>

          <div className="pt-10 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
