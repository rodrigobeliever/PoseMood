import { router } from './src/router.js';
import { initializeApp } from './src/app.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  router.init();
});
