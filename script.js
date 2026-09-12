const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = 'Solicitação de atendimento técnico — Especifique';
    const body = [
      `Nome: ${data.get('nome') || ''}`,
      `E-mail: ${data.get('email') || ''}`,
      `Empresa: ${data.get('empresa') || ''}`,
      `Telefone: ${data.get('telefone') || ''}`,
      `Tipo de obra/projeto: ${data.get('tipo') || ''}`,
      `Solução de interesse: ${data.get('solucao') || ''}`,
      '',
      `Mensagem: ${data.get('mensagem') || ''}`,
    ].join('\n');
    window.location.href = `mailto:contato@especifiquehro.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
