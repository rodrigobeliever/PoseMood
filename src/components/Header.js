export function Header(user) {
  const userMenu = user ? `
    <div class="relative">
      <button id="user-menu-button" class="flex items-center space-x-2 focus:outline-none">
        <img 
          src="${user.user_metadata.avatar_url}" 
          alt="${user.user_metadata.full_name || 'Avatar do usuário'}"
          class="w-10 h-10 rounded-full border-2 border-neon-blue"
        />
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        id="user-menu-dropdown" 
        class="hidden absolute right-0 mt-2 w-56 bg-dark-card rounded-lg shadow-lg border border-gray-700 py-2 z-50"
      >
        <div class="px-4 py-2 border-b border-gray-700">
          <p class="text-sm text-light-gray font-semibold truncate">${user.user_metadata.full_name || 'Usuário'}</p>
          <p class="text-xs text-gray-400 truncate">${user.email}</p>
        </div>
        <a 
          href="#" 
          data-action="logout" 
          class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-neon-blue hover:text-dark transition-colors"
        >
          Sair
        </a>
      </div>
    </div>
  ` : `
    <a href="/login" data-link class="btn-primary text-sm px-4 py-2">Login</a>
  `;

  return `
    <header class="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="/" data-link class="flex items-center space-x-3 group">
            <div class="w-10 h-10 bg-gradient-to-br from-neon-blue to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="text-2xl font-bold gradient-text hidden sm:block">Pose Mood</span>
          </a>
          
          <div class="flex items-center space-x-6">
            <a href="/" data-link class="text-light-gray hover:text-neon-blue transition-colors font-medium">Início</a>
            <a href="/sobre" data-link class="text-light-gray hover:text-neon-blue transition-colors font-medium">Sobre</a>
            <a href="/sugestao" data-link class="text-light-gray hover:text-neon-blue transition-colors font-medium">Enviar Sugestão</a>
            ${userMenu}
          </div>
        </div>
      </nav>
    </header>
  `;
}
