// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('primary-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Formulário de agendamento -> WhatsApp
const WHATSAPP_NUMBER = '5566999086365';

const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const data = form.data.value;
    const servico = form.servico.value;
    const obs = form.obs.value.trim();

    let dataFormatada = data;
    if (data) {
      const [ano, mes, dia] = data.split('-');
      dataFormatada = `${dia}/${mes}/${ano}`;
    }

    let mensagem = `Olá, Raphaella! Gostaria de agendar um horário 💅\n\n`;
    mensagem += `Nome: ${nome}\n`;
    mensagem += `Meu WhatsApp: ${telefone}\n`;
    mensagem += `Serviço: ${servico}\n`;
    mensagem += `Data desejada: ${dataFormatada}\n`;
    if (obs) mensagem += `Observações: ${obs}\n`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });
}
