import { HomePage } from './pages/HomePage.js';
import { AboutPage } from './pages/AboutPage.js';
import { SuggestPage } from './pages/SuggestPage.js';
import { LoginPage } from './pages/LoginPage.js';

const routes = {
  '/': HomePage,
  '/sobre': AboutPage,
  '/sugestao': SuggestPage,
  '/login': LoginPage,
};

export const router = {
  currentRoute: '/',
  
  init() {
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname, false);
    });
    
    document.body.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        this.navigate(href);
      }
    });
    
    this.navigate(window.location.pathname, false);
  },
  
  navigate(path, pushState = true) {
    this.currentRoute = path;
    
    if (pushState) {
      window.history.pushState({}, '', path);
    }
    
    const route = routes[path] || routes['/'];
    const mainContent = document.getElementById('main-content');
    
    if (mainContent) {
      mainContent.innerHTML = route();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
