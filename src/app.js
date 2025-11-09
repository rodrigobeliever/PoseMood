import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { supabase } from './supabaseClient.js';
import { router } from './router.js';

let currentUser = null;

function renderAppLayout() {
  const app = document.getElementById('app');
  if (app.innerHTML === '') {
    app.innerHTML = `
      <div class="min-h-screen flex flex-col">
        <div id="header-container"></div>
        <main id="main-content" class="flex-grow">
          <!-- O conteúdo será injetado aqui pelo router -->
        </main>
        ${Footer()}
      </div>
    `;
  }
}

function renderHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = Header(currentUser);
    attachHeaderListeners();
  }
}

function attachHeaderListeners() {
  const logoutButton = document.querySelector('[data-action="logout"]');
  if (logoutButton) {
    logoutButton.addEventListener('click', async (e) => {
      e.preventDefault();
      await supabase.auth.signOut();
    });
  }

  const userMenuButton = document.getElementById('user-menu-button');
  const userMenuDropdown = document.getElementById('user-menu-dropdown');

  if (userMenuButton && userMenuDropdown) {
    userMenuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      userMenuDropdown.classList.toggle('hidden');
    });
  }
  
  document.addEventListener('click', (e) => {
    if (userMenuDropdown && !userMenuDropdown.classList.contains('hidden')) {
      if (!userMenuButton.contains(e.target) && !userMenuDropdown.contains(e.target)) {
        userMenuDropdown.classList.add('hidden');
      }
    }
  });
}

export function initializeApp() {
  renderAppLayout();
  renderHeader();
  router.init();

  supabase.auth.onAuthStateChange((event, session) => {
    currentUser = session?.user ?? null;
    renderHeader();

    if (event === 'SIGNED_IN' && window.location.pathname === '/login') {
      router.navigate('/');
    }
    
    if (event === 'SIGNED_OUT' && window.location.pathname === '/sugestao') {
      // Opcional: redirecionar se o usuário sair de uma página protegida
      // router.navigate('/login'); 
    }
  });
}
