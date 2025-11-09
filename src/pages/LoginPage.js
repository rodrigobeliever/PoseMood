import { supabase } from '../supabaseClient.js';

async function handleGoogleLogin() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) {
    console.error('Error logging in with Google:', error);
    const errorContainer = document.getElementById('error-message');
    if(errorContainer) {
      errorContainer.textContent = `Erro no login: ${error.message}`;
      errorContainer.classList.remove('hidden');
    }
  }
}

export function LoginPage() {
  setTimeout(() => {
    const loginButton = document.getElementById('google-login-btn');
    if (loginButton) {
      loginButton.addEventListener('click', handleGoogleLogin);
    }
  }, 0);

  return `
    <div class="container mx-auto px-4 py-20 max-w-md">
      <div class="card p-8 md:p-12 text-center">
        <div class="w-20 h-20 bg-gradient-to-br from-neon-blue to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg class="w-10 h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold gradient-text mb-3">Acesse sua Conta</h1>
        <p class="text-gray-400 mb-8">
          Faça login para salvar favoritos e gerenciar suas sugestões.
        </p>

        <button 
          id="google-login-btn"
          class="w-full btn-primary flex items-center justify-center space-x-3"
        >
          <svg class="w-6 h-6" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.901,36.626,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Entrar com Google</span>
        </button>

        <div id="error-message" class="hidden mt-6 text-red-400 bg-red-500/10 p-3 rounded-lg"></div>

        <p class="text-xs text-gray-500 mt-8">
          Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
        </p>
      </div>
    </div>
  `;
}
