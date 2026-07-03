# 🌤️ Weather App

Aplicação web para consulta de previsão do tempo por cidade, construída com **React** e **Vite**, estilizada com **Tailwind CSS**.

## 🔗 Demo

🔴 **[Acesse o projeto ao vivo](https://thiagotsepe.github.io/weather-app/)**

## ✨ Funcionalidades

- Busca de clima por nome de cidade
- Exibição de temperatura, condição climática e ícones ilustrativos
- Interface responsiva e minimalista

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [HGWeather](https://hgbrasil.com/weather)

## 🚀 Rodando o projeto localmente

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# Clone o repositório
git clone https://github.com/thiagotsepe/weather-app.git

# Entre na pasta do projeto
cd weather-app

# Instale as dependências
npm install
```

### Configurando a API Key

Este projeto consome uma API externa de clima, que exige uma chave de acesso.

1. Crie uma conta gratuita em [HGBrasil] e gere sua chave.
2. Na raiz do projeto, crie um arquivo `.env`:

```env
VITE_WEATHER_API_KEY=sua_chave_aqui
```

> ⚠️ O arquivo `.env` já está no `.gitignore` e não deve ser commitado.

```bash
# Rode o projeto em modo desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## 📦 Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📁 Estrutura do projeto

```
weather-app/
├── public/
│   └── icons-weather/     # Ícones ilustrativos de condições climáticas
├── src/
│   ├── components/
│   │   └── SearchBar.jsx  # Componente de busca de cidade
│   ├── hooks/
│   │   └── useWeatherData.js  # Hook de consumo da API
│   └── App.jsx
├── .env                    # Variáveis de ambiente (não versionado)
└── vite.config.js
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como referência.

## 👤 Autor

**Thiago Sepe** — [GitHub](https://github.com/thiagotsepe)
