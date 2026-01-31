const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const apiKey = "86462ae0e5414c6cab53dac802a5fd24";
  const query = event.queryStringParameters.q || "apple";  // Default to Apple if no query is provided

  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.articles),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
};
