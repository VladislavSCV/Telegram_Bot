const axios = require('axios');
const cheerio = require('cheerio');
// Функция для получения HTML-кода страницы
async function fetchHTML(url) {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error(`Ошибка при получении HTML: ${error}`);
      return null;
    }
  }

var html = fetchHTML('https://collegetsaritsyno.mskobr.ru/uchashimsya/raspisanie-kanikuly')
