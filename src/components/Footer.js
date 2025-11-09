export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="bg-dark-lighter border-t border-gray-800 mt-20">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold gradient-text mb-4">Pose Mood</h3>
            <p class="text-gray-400 text-sm">Explorando o potencial criativo da IA através de imagens inspiradoras e prompts compartilhados.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-light-gray mb-4">Links Rápidos</h4>
            <ul class="space-y-2">
              <li><a href="/" data-link class="text-gray-400 hover:text-neon-blue transition-colors">Início</a></li>
              <li><a href="/sobre" data-link class="text-gray-400 hover:text-neon-blue transition-colors">Sobre</a></li>
              <li><a href="/sugestao" data-link class="text-gray-400 hover:text-neon-blue transition-colors">Enviar Sugestão</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-light-gray mb-4">Redes Sociais</h4>
            <div class="flex space-x-4">
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-dark-card hover:bg-neon-blue hover:text-dark rounded-lg flex items-center justify-center transition-all transform hover:scale-110" aria-label="TikTok">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-dark-card hover:bg-neon-blue hover:text-dark rounded-lg flex items-center justify-center transition-all transform hover:scale-110" aria-label="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-dark-card hover:bg-neon-blue hover:text-dark rounded-lg flex items-center justify-center transition-all transform hover:scale-110" aria-label="X (Twitter)">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-dark-card hover:bg-neon-blue hover:text-dark rounded-lg flex items-center justify-center transition-all transform hover:scale-110" aria-label="Threads">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.598.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126 1.974a11.907 11.907 0 0 0-2.586-.123c-1.084.063-1.898.39-2.423.972-.45.5-.661 1.11-.632 1.819.027.641.325 1.189.888 1.637.563.447 1.31.662 2.221.614 1.207-.064 2.05-.514 2.579-1.376.464-.756.684-1.75.663-2.963v-.01c-.004-.147-.01-.296-.023-.444-.025-.288-.073-.55-.145-.79-.277-.925-.944-1.605-1.983-2.023-.988-.397-2.114-.603-3.349-.614-2.307.02-4.168.618-5.53 1.775-1.36 1.156-2.06 2.78-2.08 4.828.02 2.05.72 3.675 2.08 4.83 1.362 1.157 3.223 1.756 5.53 1.776 1.84-.02 3.415-.413 4.685-1.168 1.27-.754 2.188-1.875 2.73-3.334.31-.835.48-1.762.505-2.763l2.025.054c-.03 1.187-.245 2.315-.64 3.357-.677 1.784-1.853 3.192-3.498 4.186-1.645.993-3.595 1.504-5.807 1.528h-.007Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400 text-sm">
            © ${currentYear} Pose Mood - Rodrigo Zodorka. Todos os direitos reservados.
          </p>
          <p class="text-gray-500 text-xs mt-2">
            As imagens geradas por IA são propriedade de seus respectivos criadores. Uso educacional e inspiracional.
          </p>
        </div>
      </div>
    </footer>
  `;
}
