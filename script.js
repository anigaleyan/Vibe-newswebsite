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

function fetchNews(query) {
  showLoading();

  // Replace the NewsAPI URL with the Netlify function endpoint
  fetch(`/api/getNews?q=${query}`)
    .then(response => response.json())
    .then(data => {
      showArticles(data);
    })
    .catch(error => {
      container.innerHTML = "<p>Error loading news 😢</p>";
      console.error(error);
    });
}

/* NEWS CATEGORIES */

function loadApple() {
  fetchNews("apple");
}

function loadTesla() {
  fetchNews("tesla");
}

function loadBusiness() {
  fetchNews("business");
}

function loadTech() {
  fetchNews("techcrunch");
}

function loadWSJ() {
  fetchNews("wsj");
}
