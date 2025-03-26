import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Keith Axline" },
    { name: "description", content: "I live in Portland, Oregon and work on technology that helps people." },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "application-name", content: "Keith Axline" },
    { rel: "theme-color", content: "#000000" },

    // Android
    { rel: "android-chrome-192x192", href: "/android-chrome-192x192.png", sizes: "192x192" },
    { rel: "android-chrome-512x512", href: "/android-chrome-512x512.png", sizes: "512x512" },

    // Apple
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "apple-mobile-web-app-title", content: "Keith Axline" },

    // Microsoft
    { rel: "msapplication-TileColor", content: "#000000" },

    // Open Graph tags
    { property: "og:title", content: "Keith Axline" },
    { property: "og:description", content: "Keith Axline - Projects, writings and more" },
    { property: "og:url", content: "https://axline.io" }, // Update with your actual URL
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://axline.io/embed_image_1200x630.png" }, // Update with your profile pic URL
    { property: "og:image:alt", content: "Keith Axline" },
    { property: "og:image:width", content: "1200" }, // Recommended size for og:image
    { property: "og:image:height", content: "630" }, // Recommended size for og:image
    { property: "og:site_name", content: "Keith Axline" },

    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" }, // "summary" for smaller image
    { name: "twitter:title", content: "Keith Axline" },
    { name: "twitter:description", content: "Keith Axline - Projects, writings and more" },
    { name: "twitter:image", content: "https://axline.io/embed_image_1200x630.png" }, // Update with your profile pic URL
    { name: "twitter:image:alt", content: "Keith Axline" },
    { name: "twitter:creator", content: "@kaxline" }, 
  ];
};

export default function Index() {
  return (
    <>
      <main>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 md:mb-3">Keith Axline</h1>
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-12 md:mb-16 lg:mb-20">Creating technology worth having</p>
          
          
          <ul className="mb-12 md:mb-16 lg:mb-20">
              <li className="border-b border-gray-100 py-4 md:py-6 hover:border-gray-400 transition-colors duration-300 text-2xl md:text-3xl lg:text-4xl">
                  <a href="https://seedprotocol.io" className="inline-block relative pr-8 transition-transform duration-300 hover:translate-x-2 focus:outline-none focus:translate-x-2 group">
                      Seed Protocol
                      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                  </a>
              </li>
              
              <li className="border-b border-gray-100 py-4 md:py-6 hover:border-gray-400 transition-colors duration-300 text-2xl md:text-3xl lg:text-4xl">
                  <a href="https://factland.org" className="inline-block relative pr-8 transition-transform duration-300 hover:translate-x-2 focus:outline-none focus:translate-x-2 group">
                      Factland
                      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                  </a>
              </li>
              
              <li className="py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl">
                  <a href="https://re-public.io" className="inline-block relative pr-8 transition-transform duration-300 hover:translate-x-2 focus:outline-none focus:translate-x-2 group">
                      Re-Public
                      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                  </a>
              </li>
          </ul>
      </main>
      
      <footer className="mt-auto text-sm text-gray-400 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <p>&copy; 2025</p>
          <div className="social-links flex space-x-6">
              <a 
                  href="https://github.com/kaxline" 
                  className="transition-colors duration-300 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="GitHub"
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                  GitHub
              </a>
              <a 
                  href="https://warpcast.com/kaxline" 
                  className="transition-colors duration-300 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="Warpcast"
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                  Warpcast
              </a>
          </div>
        </div>
        <p className="hidden">
          Photo by <a href="https://unsplash.com/@arnaudastro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">arnaud girault</a> on <a href="https://unsplash.com/photos/a-star-forming-region-in-the-sky-IjEtFjxXweE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
          
          
      
      </footer>
    </>
  );
}

