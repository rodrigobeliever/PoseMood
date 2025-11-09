export function SuggestPage() {
  setTimeout(() => {
    initializeSuggestForm();
  }, 0);
  
  return `
    <div class="container mx-auto px-4 py-12 max-w-3xl">
      <div class="card p-8 md:p-12">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-neon-blue to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg class="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 class="text-4xl font-bold gradient-text mb-3">Envie Sua Sugestão</h1>
          <p class="text-gray-400">Ajude-nos a crescer com suas ideias criativas!</p>
        </div>

        <form id="suggestion-form" class="space-y-6">
          <div>
            <label for="name" class="block text-light-gray font-medium mb-2">
              Seu Nome
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              class="input-field"
              placeholder="Como devemos te chamar?"
            />
          </div>

          <div>
            <label for="email" class="block text-light-gray font-medium mb-2">
              E-mail (opcional)
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              class="input-field"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label for="category" class="block text-light-gray font-medium mb-2">
              Categoria Sugerida
            </label>
            <select 
              id="category" 
              name="category" 
              required
              class="input-field"
            >
              <option value="">Selecione uma categoria para sua ideia</option>
              <option value="ensaio-feminino">Ensaio Fotográfico - Feminino</option>
              <option value="ensaio-masculino">Ensaio Fotográfico - Masculino</option>
              <option value="retrato-feminino">Retratos Cinematográficos - Feminino</option>
              <option value="retrato-masculino">Retratos Cinematográficos - Masculino</option>
              <option value="nova">Sugerir Nova Categoria</option>
            </select>
          </div>

          <div>
            <label for="theme" class="block text-light-gray font-medium mb-2">
              Tema ou Ideia
            </label>
            <input 
              type="text" 
              id="theme" 
              name="theme" 
              required
              class="input-field"
              placeholder="Ex: Homem de negócios em uma cidade chuvosa"
            />
          </div>

          <div>
            <label for="description" class="block text-light-gray font-medium mb-2">
              Descrição Detalhada
            </label>
            <textarea 
              id="description" 
              name="description" 
              rows="5"
              required
              class="input-field resize-none"
              placeholder="Descreva sua ideia com mais detalhes. Quanto mais específico, melhor!"
            ></textarea>
          </div>

          <div>
            <label for="prompt-idea" class="block text-light-gray font-medium mb-2">
              Sugestão de Prompt (opcional)
            </label>
            <textarea 
              id="prompt-idea" 
              name="prompt-idea" 
              rows="3"
              class="input-field resize-none"
              placeholder="Se você já tem uma ideia de prompt, compartilhe aqui!"
            ></textarea>
          </div>

          <div class="bg-dark-lighter rounded-lg p-4">
            <div class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-sm text-gray-400">
                Suas sugestões nos ajudam a expandir nossa coleção e criar conteúdo que a comunidade deseja ver. 
                Agradecemos muito sua contribuição!
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              type="submit" 
              class="btn-primary flex-1 flex items-center justify-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Enviar Sugestão</span>
            </button>
            <a 
              href="/" 
              data-link
              class="btn-secondary flex-1 text-center"
            >
              Voltar à Galeria
            </a>
          </div>
        </form>

        <div id="success-message" class="hidden mt-8 bg-green-500/10 border border-green-500/50 rounded-lg p-6 text-center">
          <svg class="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-2xl font-bold text-green-500 mb-2">Sugestão Enviada!</h3>
          <p class="text-gray-300 mb-4">Obrigado por contribuir com o Pose Mood. Vamos analisar sua sugestão em breve!</p>
          <button onclick="location.reload()" class="btn-primary">
            Enviar Outra Sugestão
          </button>
        </div>
      </div>
    </div>
  `;
}

function initializeSuggestForm() {
  const form = document.getElementById('suggestion-form');
  const successMessage = document.getElementById('success-message');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Sugestão enviada:', data);
      
      form.classList.add('hidden');
      successMessage.classList.remove('hidden');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
