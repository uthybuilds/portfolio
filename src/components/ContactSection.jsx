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
        "2ut3yuau_EJ6W2z94"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1600&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8">
        {/* Form */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Send a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
                className="w-full px-4 py-3 rounded-md bg-black/40 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-400" />
              <p>
                <span className="block text-yellow-400 font-semibold">
                  Phone
                </span>
                (+234) 703 773 0858
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" />
              <p>
                <span className="block text-yellow-400 font-semibold">
                  Email
                </span>
                uthmanajanaku@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-400" />
              <p>
                <span className="block text-yellow-400 font-semibold">
                  Address
                </span>
                Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-blue-400" />
              <p>
                <span className="block text-yellow-400 font-semibold">
                  Availability
                </span>
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
