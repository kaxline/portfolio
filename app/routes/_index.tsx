import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Keith Axline" },
    { name: "description", content: "Keith Axline" },
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
      
      <footer className="mt-auto text-sm text-gray-400 flex items-center justify-between">
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
      </footer>
    </>
  );
}

