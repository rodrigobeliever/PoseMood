import { categories, mockImages } from '../data/mockData.js';
import { ImageCard } from '../components/ImageCard.js';
import { Modal } from '../components/Modal.js';

let currentCategory = 'all';
let searchQuery = '';

export function HomePage() {
  setTimeout(() => {
    initializeHomePage();
  }, 0);
  
  return `
    <div class="w-full">
      <section class="text-center py-20 md:py-28">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Galeria <span class="gradient-text">Pose Mood</span>
          </h1>
          <p class="text-xl text-gray-300">
            Explore prompts e inspire-se com criações de IA.
          </p>
        </div>
      </section>

      <section class="container mx-auto px-4 sticky top-[73px] z-30 bg-dark py-4 mb-8 border-b border-gray-800">
        <div class="max-w-4xl mx-auto">
          <div class="relative mb-6">
            <input 
              type="text" 
              id="search-input"
              placeholder="Pesquisar por prompts, estilos, etc..."
              class="input-field pl-12 pr-4 py-3"
            />
            <svg class="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3" id="categories-grid">
            <button data-category="all" class="category-btn active">
              Todas
            </button>
            ${categories.map(cat => `
              <button data-category="${cat.id}" class="category-btn">
                ${cat.name}
              </button>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold">Imagens</h2>
          <div class="text-gray-400" id="image-count"></div>
        </div>
        
        <div class="masonry-grid" id="gallery">
        </div>
        
        <div id="no-results" class="hidden text-center py-20">
          <svg class="w-20 h-20 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-2xl font-bold text-gray-400 mb-2">Nenhum resultado encontrado</h3>
          <p class="text-gray-500">Tente outra palavra-chave ou categoria</p>
        </div>
      </section>

      <div id="image-modal"></div>
    </div>
  `;
}

function initializeHomePage() {
  renderGallery();
  
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderGallery();
    });
  });
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderGallery();
    });
  }
}

function renderGallery() {
  const gallery = document.getElementById('gallery');
  const noResults = document.getElementById('no-results');
  const imageCount = document.getElementById('image-count');
  
  let filteredImages = mockImages;
  
  if (currentCategory !== 'all') {
    filteredImages = filteredImages.filter(img => img.category === currentCategory);
  }
  
  if (searchQuery) {
    filteredImages = filteredImages.filter(img => 
      img.title.toLowerCase().includes(searchQuery) ||
      img.prompt.toLowerCase().includes(searchQuery) ||
      img.description.toLowerCase().includes(searchQuery)
    );
  }
  
  if (!gallery || !noResults || !imageCount) return;

  if (filteredImages.length === 0) {
    gallery.classList.add('hidden');
    noResults.classList.remove('hidden');
    imageCount.textContent = '0 imagens';
    return;
  }
  
  gallery.classList.remove('hidden');
  noResults.classList.add('hidden');
  imageCount.textContent = `${filteredImages.length} ${filteredImages.length === 1 ? 'imagem' : 'imagens'}`;
  
  gallery.innerHTML = filteredImages.map(image => ImageCard(image)).join('');
  
  const imageCards = document.querySelectorAll('[data-image-id]');
  imageCards.forEach(card => {
    card.addEventListener('click', () => {
      const imageId = parseInt(card.dataset.imageId);
      const image = mockImages.find(img => img.id === imageId);
      if (image) {
          openModal(image);
      }
    });
  });
}

function openModal(image) {
  const modalContainer = document.getElementById('image-modal');
  if (!modalContainer) return;

  modalContainer.innerHTML = Modal(image);
  
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close-modal');
  const copyBtn = document.getElementById('copy-prompt');
  const copyLinkBtn = document.getElementById('copy-link');
  
  if (!modal || !closeBtn || !copyBtn || !copyLinkBtn) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    modalContainer.innerHTML = '';
  };
  
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(image.fullPrompt);
    const originalHTML = copyBtn.innerHTML;
    copyBtn.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      Copiado!
    `;
    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
    }, 2000);
  });
  
  copyLinkBtn.addEventListener('click', () => {
    const link = `${window.location.origin}/?image=${image.id}`;
    navigator.clipboard.writeText(link);
    const originalHTML = copyLinkBtn.innerHTML;
    copyLinkBtn.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      Copiado!
    `;
    setTimeout(() => {
      copyLinkBtn.innerHTML = originalHTML;
    }, 2000);
  });
  
  const shareButtons = document.querySelectorAll('[data-share]');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const platform = btn.dataset.share;
      const text = `Confira esta incrível imagem IA do Pose Mood: ${image.title}`;
      const url = `${window.location.origin}/?image=${image.id}`;
      
      let shareUrl = '';
      switch(platform) {
        case 'tiktok':
          alert('Compartilhamento direto no TikTok não é suportado. Copie o link e cole no seu vídeo!');
          navigator.clipboard.writeText(url);
          return;
        case 'instagram':
          alert('Para compartilhar no Instagram, copie o link e cole em sua história ou bio!');
          navigator.clipboard.writeText(url);
          return;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
          break;
        case 'threads':
          shareUrl = `https://threads.net/intent/post?text=${encodeURIComponent(text + ' ' + url)}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });
}
