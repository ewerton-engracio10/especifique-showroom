const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('leadForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = data.get('assunto') || 'Solicitação de atendimento técnico — Site Especifique';
  const body = [
    `Nome: ${data.get('nome') || ''}`,
    `E-mail: ${data.get('email') || ''}`,
    `Empresa: ${data.get('empresa') || ''}`,
    `Telefone: ${data.get('telefone') || ''}`,
    `Assunto: ${subject}`,
    '',
    `Mensagem: ${data.get('mensagem') || ''}`
  ].join('\n');
  window.location.href = `mailto:contato@especifiquehro.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
