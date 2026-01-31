const API_KEY = "86462ae0e5414c6cab53dac802a5fd24";
const container = document.getElementById("news-container");

function showLoading() {
  container.innerHTML = "<p class='loading'>Loading news... ⏳</p>";
}

function showArticles(articles) {
  container.innerHTML = "";

  articles.forEach(article => {
    const div = document.createElement("div");
    div.className = "article";

    div.innerHTML = `
      <h2>
        <a href="${article.url}" target="_blank">
          ${article.title}
        </a>
      </h2>
      <p>
        ${article.source.name} • 
        ${new Date(article.publishedAt).toDateString()}
      </p>
    `;

    container.appendChild(div);
  });
}

function fetchNews(url) {
  showLoading();

  fetch(url)
    .then(response => response.json())
    .then(data => {
      showArticles(data.articles);
    })
    .catch(error => {
      container.innerHTML = "<p>Error loading news 😢</p>";
      console.error(error);
    });
}

/* NEWS CATEGORIES */

function loadApple() {
  fetchNews(
    "https://newsapi.org/v2/everything?q=apple&from=2026-01-30&to=2026-01-30&sortBy=popularity&apiKey=" + API_KEY
  );
}

function loadTesla() {
  fetchNews(
    "https://newsapi.org/v2/everything?q=tesla&from=2025-12-31&sortBy=publishedAt&apiKey=" + API_KEY
  );
}

function loadBusiness() {
  fetchNews(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + API_KEY
  );
}

function loadTech() {
  fetchNews(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" + API_KEY
  );
}

function loadWSJ() {
  fetchNews(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=" + API_KEY
  );
}
