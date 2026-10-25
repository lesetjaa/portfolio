import React from "react";

const socialLinks = [
  {
    icon: "/assets/github-brands-solid-full.svg",
    alt: "GitHub",
    link: "https://github.com/lesetjaa",
  },
  {
    icon: "/assets/linkedin-brands-solid-full.svg",
    alt: "LinkedIn",
    link: "https://linkedin.com/in/lesetjaa",
  },
  {
    icon: "/assets/x-twitter-brands-solid-full.svg",
    alt: "X / Twitter",
    link: "https://x.com/lesetjaa_",
  },
  {
    icon: "/assets/instagram-brands-solid-full.svg",
    alt: "Instagram",
    link: "https://instagram.com/lesetjaa_",
  },
  {
    icon: "/assets/tiktok-brands-solid-full.svg",
    alt: "TikTok",
    link: "https://tiktok.com/@lesetjaa_",
  },
];

const profileImage = "/images/profile_image.webp";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative font-sans">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl gap-12 md:gap-24">
        {/* Left Section (Text) */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Coming Soon<span className="animate-blink font-bold">_</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
            Working on a new portfolio, Stay Tuned!
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-8 h-8 opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer dark:brightness-0 dark:invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full shadow-inner border border-white-200 ">
            <img
              src={profileImage}
              alt="Profile Image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 md:absolute md:bottom-8 text-gray-600 dark:text-gray-400 text-sm font-light">
        2026 lesetja.dev
      </div>
    </div>
  );
}

export default App;

// font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
