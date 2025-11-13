import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const socials = [
    {
      name: "X",
      icon: <FaTwitter className="w-5 h-5" />,
      link: "https://x.com/AbedazimReal",
      username: "@AbedazimReal",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      link: "https://github.com/the-abed",
      username: "the-abed",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/mohammad-abed-477100386/",
      username: "Mohammad Abed",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-5 h-5" />,
      link: "mailto:abedpersonal2024@gmail.com",
      username: "abedpersonal2024@gmail.com",
    },
  ];

  return (
    <div
      className="min-h-screen py-24 px-4 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-base-100)", color: "var(--color-text-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Contact Card */}
        <div
          className="rounded-2xl overflow-hidden shadow-sm border transition-colors duration-300"
          style={{
            backgroundColor: "var(--color-base-200)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="p-8 md:p-12">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-12">
              <div className="mb-6">
                <div
                  className="w-32 h-32 rounded-full overflow-hidden border-2 shadow-sm"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <img
                    src="https://i.ibb.co/JWwJ1sX5/a-git.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
                Get In Touch
              </h1>
              <p className="text-lg max-w-2xl leading-relaxed">
                I'd love to hear from you! Connect with me through any of the following platforms.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3 max-w-2xl mx-auto">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-xl border transition-all"
                  style={{
                    backgroundColor: "var(--color-base-100)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-2 rounded-lg transition-colors"
                      style={{
                        backgroundColor: "var(--color-base-200)",
                        color: "var(--color-text-primary)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {social.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-neutral-500">{social.username}</div>
                    </div>
                  </div>
                  <FaArrowUp className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className="mt-12 text-center p-4 rounded-xl transition-colors"
          style={{
            backgroundColor: "var(--color-base-200)",
            borderColor: "var(--color-border)",
          }}
        >
          <p>Available for freelance opportunities and collaborations.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
