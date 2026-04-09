const opportunities = [
  { title: "OBF — Olimpíada Brasileira de Física", org: "Sociedade Brasileira de Física", type: "olimpiada", areas: ["física"], desc: "Competição nacional de física para estudantes do ensino médio, com seleção para a IPhO (Olimpíada Internacional).", deadline: "Data limite a definir", eligibility: "Ensino médio", link: "https://www.obf.org.br/" },
  { title: "OBI — Olimpíada Brasileira de Informática", org: "IC-UNICAMP", type: "olimpiada", areas: ["computação"], desc: "Competição de programação e raciocínio computacional para estudantes do ensino fundamental e médio.", deadline: "10/04", eligibility: "Fundamental II ao médio", link: "https://olimpiada.ic.unicamp.br/" },
  { title: "The High School Academic Research Competition (SARC)", org: "Crimson Education & Indigo", type: "pesquisa", areas: ["todas"], desc: "Competição de pesquisa com premio de 5000 reais e mentoria gratuita.", deadline: "17/04", eligibility: "Ensino médio e Ano Sabático", link: "https://www.researchcomp.org/" },
  { title: "Olimpíada Brasileira de Inovação, Ciência e Tecnologia (OBICT)", org: "---", type: "olimpiada", areas: ["todas"], desc: "Competição nacional gratuita e online, voltada para estudantes, que visa estimular o interesse por áreas científicas e tecnológicas (STEM). Com apoio de instituições como o ITA e IPT, aborda temas modernos como IA e sustentabilidade.", deadline: "12/04", eligibility: "Todas as idades, a partir do Ensino Fundamental", link: "https://www.obict.com.br/" },
  { title: "Torneio Brasileiro de Ciências (TBC)", org: "Seleta Educação", type: "olimpiada", areas: ["computação"], desc: "O torneio avalia conhecimentos de Biologia, Física, Química e Astronomia de forma prática, crítica e sem focar em memorização.", deadline: "26/08", eligibility: "Todas as idades, a partir do Ensino Fundamental", link: "https://www.seletaeducacao.com.br/tbc" },
  { title: "Olimpíada Nacional de Astronomia (ONA)", org: "---", type: "olimpiada", areas: ["todas"], desc: "Evento nacional anual realizado em escolas públicas e privadas, visando difundir o conhecimento astronômico entre alunos do ensino fundamental, médio e categoria livre.", deadline: "19/04", eligibility: "Todas as idades, a partir do Ensino Fundamental", link: "https://onaolimpiada.netlify.app/" },
  { title: "Olimpíada Brasileira de Engenharia (OBENG)", org: "Comunidade Científica Jr.", type: "olimpiada", areas: ["todas"], desc: "Olimpíada que aposta em uma proposta acessível, gratuita e totalmente on-line, conectando  matemática, física e aplicações introdutórias das engenharias ao raciocínio lógico e à resolução de problemas.", deadline: "A ser definida", eligibility: "Ensino Fundamental ou Médio", link: "https://comunidadecientificajr.com.br/obeng-olimpiada-brasileira-de-engenharia-abre-portas-para-futuros-engenheiros/" },
  { title: "Olimpíada Mandacaru de Matemática", org: "---", type: "olimpiada", areas: ["matematica"], desc: "A Olimpíada Mandacaru une a rica cultura nordestina à matemática, criando uma experiência única de aprendizado.", deadline: "10/05", eligibility: "Ensino Fundamental e Médio", link: "https://olimpiadamandacaru.com.br/" },
  { title: "Porta Aberta", org: "---", type: "programa", areas: ["todas"], desc: "Competição que oferece um prêmio de R$10.000 e Duolingo Premium por 1 ano baseado no seu desempenho acadêmico durante o ensino médio.", deadline: "20/04", eligibility: "Recém formado no Ensino Médio (2025)", link: "https://docs.google.com/forms/d/e/1FAIpQLSft8UYWTXoLXnpT9I1RQ2VyAmzK7AL7a6wxB28EqYqAqcJXUw/viewform" },
  { title: "Crimson Access Opportunity (CAO)", org: "Crimson Education", type: "bolsa", areas: ["todas", "bolsa"], desc: "Programa de bolsas para mentoria gratuita para alunos que querem estudar no exterior.", deadline: "12/04", eligibility: "Ensino médio e ano sabático", link: "https://www.crimsoneducation.org/br/about-us/our-scholarships" },
  { title: "Prêmio Jovem Cientista", org: "CNPq & Fundação Roberto Marinho", type: "olimpiada", areas: ["todas"], desc: "Revela talentos, impulsiona a pesquisa no país e investe em estudantes e jovens pesquisadores que procuram inovar na solução dos desafios da sociedade brasileira.", deadline: "31/07", eligibility: "Ensino Médio e Superior", link: "https://jovemcientista.cnpq.br/projeto/premio-jovem-cientista" },
  { title: "Competição de Redação de IA", org: "VERITAS AI", type: "olimpiada", areas: ["competicao"], desc: "Competição de redação sobre IA, avaliado por pesquisadores do MIT, Harvard, etc...", deadline: "19/04", eligibility: "Ensino médio", link: "https://www.veritasai.com/singularity-ai-essay-contest" },
  { title: "The Junior Academy (Academia Júnior)", org: "The New York Academy of Sciences (Academia de Ciências de Nova York)", type: "programa", areas: ["todas", "ciencia"], desc: "Programa de pesquisa científica gratuito para jovens que demonstram interesse em STEM e estão dispostos a desenvolverem projetos para resolverem desafios globais.", deadline: "Submissões em março/abril", eligibility: "13 a 17 anos", link: "https://www.nyas.org/learning/high-school-research-programs/the-junior-academy/" },
  // { title: "iGEM — International Genetically Engineered Machine", org: "iGEM Foundation", type: "programa", areas: ["biologia"], desc: "Competição global de biologia sintética por equipes estudantis. Inclui equipes de ensino médio e universitárias.", deadline: "Projeto encerrado em outubro", eligibility: "Ensino médio e graduação", link: "https://www.igem.org/" },
];

let currentFilter = 'all';

function renderOpps(list) {
  const grid = document.getElementById('opp-grid');
  grid.innerHTML = list.map(o => `
    <div class="opp-card">
      <div class="opp-card-header">
        <span class="opp-title">${o.title}</span>
        <span class="opp-type type-${o.type}">${typeLabel(o.type)}</span>
      </div>
      <div class="opp-org">Org: ${o.org}</div>
      <div class="opp-desc">${o.desc}</div>
      <div class="opp-link"><a href="${o.link}" target="_blank" rel="noopener noreferrer">Saiba mais aqui</a></div>
      <div class="opp-meta">
        <span>Data Limite: ${o.deadline}</span> <br>
        <span>Eligibilidade: ${o.eligibility}</span>
      </div>
    </div>
  `).join('');
}

renderOpps(opportunities);

function typeLabel(t) {
  return {
    pesquisa: 'Pesquisa',
    olimpiada: 'Olimpíada',
    programa: 'Programa',
    bolsa: 'Bolsa',
    conferencia: 'Competição',
  }
  [t] || t;
}

function filterOpps() {
  const q = document.getElementById('opp-search').value.toLowerCase();
  const filtered = opportunities.filter(o => {
    const matchType = currentFilter === 'all' || o.type === currentFilter;
    const matchSearch = !q || o.title.toLowerCase().includes(q) || o.org.toLowerCase().includes(q) || o.desc.toLowerCase().includes(q);
    return matchType && matchSearch;
  });
  renderOpps(filtered);
}

function setFilter(btn, type) {
  currentFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterOpps();

  if(!currentFilter){
    const grid = document.getElementById('opp-grid');
    grid.innerHTML = `
    <p>Sem oportunidades nessa categoria no momento.</p>`
  }
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function subscribeNewsletter() {
  const name = document.getElementById('nl-name').value.trim();
  const email = document.getElementById('nl-email').value.trim();
  if (!name || !email) {
    alert('Por favor, preencha seu nome e e-mail.');
    return;
  }
  if (!email.includes('@')) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }
  document.getElementById('form-content').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
}