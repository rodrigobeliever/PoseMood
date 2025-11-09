export function AboutPage() {
  return `
    <div class="container mx-auto px-4 py-12 max-w-4xl">
      <div class="card p-8 md:p-12">
        <div class="text-center mb-12">
          <div class="w-32 h-32 bg-gradient-to-br from-neon-blue to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg class="w-16 h-16 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 class="text-4xl font-bold gradient-text mb-4">Sobre o Pose Mood</h1>
          <p class="text-xl text-gray-400">Explorando o Potencial Criativo da IA</p>
        </div>

        <div class="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 class="text-2xl font-bold text-light-gray mb-4">Nossa Missão</h2>
            <p class="leading-relaxed">
              O <span class="text-neon-blue font-semibold">Pose Mood</span> nasceu da paixão por explorar as fronteiras da criatividade através da inteligência artificial. 
              Nossa missão é democratizar o acesso às técnicas de geração de imagens por IA, compartilhando não apenas os resultados visuais impressionantes, 
              mas também os prompts e metodologias que os tornaram possíveis.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-light-gray mb-4">O Criador</h2>
            <div class="bg-dark-lighter rounded-xl p-6">
              <h3 class="text-xl font-semibold text-neon-blue mb-3">Rodrigo Zodorka</h3>
              <p class="leading-relaxed mb-4">
                Entusiasta de tecnologia e arte digital, Rodrigo dedica-se a explorar o vasto potencial das ferramentas de IA generativa. 
                Com experiência em design digital e uma curiosidade insaciável por novas tecnologias, ele criou o Pose Mood como um espaço 
                para compartilhar descobertas, inspirar outros criadores e construir uma comunidade em torno da arte gerada por IA.
              </p>
              <div class="flex flex-wrap gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-hover transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-hover transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-light-gray mb-4">O que Oferecemos</h2>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong class="text-light-gray">Galeria Inspiradora:</strong> Centenas de imagens geradas por IA organizadas por categorias
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong class="text-light-gray">Prompts Completos:</strong> Acesso aos prompts detalhados usados para criar cada imagem
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong class="text-light-gray">Compartilhamento Fácil:</strong> Ferramentas para compartilhar suas descobertas nas redes sociais
                </div>
              </li>
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-neon-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong class="text-light-gray">Comunidade Criativa:</strong> Espaço para sugerir novos temas e participar do crescimento do projeto
                </div>
              </li>
            </ul>
          </section>

          <section class="bg-gradient-to-r from-neon-blue/10 to-blue-500/10 rounded-xl p-6 border border-neon-blue/20">
            <h2 class="text-2xl font-bold text-light-gray mb-4">Junte-se à Comunidade</h2>
            <p class="leading-relaxed mb-6">
              O Pose Mood é mais do que uma galeria - é uma comunidade de entusiastas, artistas e curiosos explorando as possibilidades 
              da IA generativa. Seja você um iniciante ou um expert, há sempre algo novo para descobrir e compartilhar.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="/sugestao" data-link class="btn-primary text-center">
                Enviar Sugestão
              </a>
              <a href="/" data-link class="btn-secondary text-center">
                Explorar Galeria
              </a>
            </div>
          </section>

          <section class="text-center pt-8 border-t border-gray-700">
            <p class="text-gray-400 text-sm">
              Tem dúvidas ou quer colaborar? Entre em contato através das redes sociais ou envie uma sugestão!
            </p>
          </section>
        </div>
      </div>
    </div>
  `;
}
