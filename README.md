<h1 align="center">💈 Corte & Cia</h1>

<p align="center">
  Landing page responsiva para uma barbearia fictícia, construída com HTML, CSS e JavaScript puros.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-projeto%20pessoal-c9973f?style=flat-square" alt="Status do projeto">
  <img src="https://img.shields.io/badge/licença-GPL--3.0-14110f?style=flat-square" alt="Licença">
  <img src="https://img.shields.io/badge/HTML-CSS-JS-vanilla-e3b768?style=flat-square" alt="Stack">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-paleta-de-cores">Paleta</a> •
  <a href="#-como-rodar-o-projeto">Como rodar</a> •
  <a href="#-estrutura-de-pastas">Estrutura</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-licença">Licença</a>
</p>

---

## 📖 Sobre o projeto

**Corte & Cia** é um site institucional (one-page) para uma barbearia, pensado com foco em **UI/UX**, **responsividade** e **performance**. O projeto é pessoal, sem designação final — serve como estudo de front-end e como base para um site real de barbearia caso seja necessário.

A página apresenta a barbearia, a equipe, os serviços oferecidos, depoimentos de clientes, uma galeria de fotos, horário de funcionamento (com o dia atual destacado automaticamente), perguntas frequentes e informações de contato com mapa incorporado.

> 🚧 Projeto em evolução — sujeito a mudanças de conteúdo, imagens e identidade visual.

## ✨ Funcionalidades

- **Menu responsivo** com animação de hambúrguer para dispositivos móveis
- **Scroll suave** e animações de entrada com [ScrollReveal](https://scrollrevealjs.org/) (com *fallback* automático caso a biblioteca não carregue)
- **Destaque automático do dia da semana** na seção de horário de funcionamento
- **Ano do copyright atualizado automaticamente** no rodapé
- Seção de **serviços** com preços e destaque para o pacote mais pedido
- Seção de **depoimentos** de clientes
- **Galeria de fotos** do ambiente
- **FAQ** em formato acordeão (perguntas frequentes)
- **Botão flutuante do WhatsApp** para contato rápido
- **Mapa incorporado** do Google Maps
- Totalmente **responsivo**: desktop, tablet e mobile

## 🛠 Tecnologias

- **HTML5** semântico
- **CSS3** (variáveis CSS, Flexbox, Grid, media queries)
- **JavaScript** (vanilla, sem frameworks)
- [ScrollReveal](https://scrollrevealjs.org/) — animações de rolagem
- [Font Awesome](https://fontawesome.com/) — ícones
- [Google Fonts](https://fonts.google.com/) — `Playfair Display` (títulos) e `Montserrat` (texto)

## 🎨 Paleta de cores

| Cor | Hex | Uso |
|---|---|---|
| ![#14110f](https://placehold.co/14x14/14110f/14110f.png) Preto grafite | `#14110f` | Fundo principal / seções escuras |
| ![#1c1815](https://placehold.co/14x14/1c1815/1c1815.png) Marrom escuro | `#1c1815` | Fundo secundário |
| ![#c9973f](https://placehold.co/14x14/c9973f/c9973f.png) Dourado | `#c9973f` | Cor de destaque / botões / links |
| ![#e3b768](https://placehold.co/14x14/e3b768/e3b768.png) Dourado claro | `#e3b768` | Hover / gradientes |
| ![#f6efe0](https://placehold.co/14x14/f6efe0/f6efe0.png) Creme | `#f6efe0` | Fundo claro / texto sobre fundo escuro |

## 🚀 Como rodar o projeto

Este é um site estático — não há build nem dependências para instalar.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/Barbearia.git

# Entre na pasta do projeto
cd Barbearia

# Abra o index.html no navegador
```

Ou, para servir com live-reload durante o desenvolvimento, use a extensão **Live Server** do VS Code, ou rode um servidor local simples:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## 📁 Estrutura de pastas

```
Barbearia-main/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── banner/
│       ├── cortes/
│       ├── galeria/
│       ├── icone/
│       └── profissional/
├── index.html
├── LICENSE
└── README.md
```

## 📄 Licença

Este projeto está sob a licença **GPL-3.0**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Desenvolvido por **Gabriel Silva**.

<p align="center">Feito com 💈 e ☕</p>
