// ТЗ '_'
// 1. Отправка Расписаний только нашего отделения но всех курсов и изменений Расписания
// 2. Отправка нового расписания в пт(если не выложили в вс) в 20 часов


// Бот
const TelegramBot = require('node-telegram-bot-api');
// Парсер
const axios = require('axios');
const cheerio = require('cheerio');
const os = require('os')

// Бот
const token = '6532177956:AAHkkDWQ0FDlqIhvgLnSSyOMp-K5U-uqGE4';
const bot = new TelegramBot(token, { polling: true });

// start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = `おはよう, ${msg['chat']['first_name']}! \nЯ - Джеймс, бот, который будет присылать тебе файлы в формате PDF с расписанием. Просто используй команду для вывода расписания и все!`;
  bot.sendMessage(chatId, message);
});


// 1 курс
bot.onText(/\/command1/, (msg) => {
    
    const chatId = msg.chat.id;
    const message = '';
    bot.sendMessage(chatId, message);
  });


// 2 курс
bot.onText(/\/command2/, (msg) => {
    const chatId = msg.chat.id;
    const message = ``;
    bot.sendMessage(chatId, message);
  });


// 3 курс
bot.onText(/\/command3/, (msg) => {
    const chatId = msg.chat.id;
    const message = ``;
    bot.sendMessage(chatId, message);
  });


// 4-5 курс
bot.onText(/\/command4_5/, (msg) => {
    const chatId = msg.chat.id;
    const message = ``;
    bot.sendMessage(chatId, message);
  });


// Парсер

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

// Функция для парсинга HTML-кода и извлечения данных
function parseHTML(html) {
    const $ = cheerio.load(html);
    
    // Извлечение данных из определенного класса
    const elements = $('.kris-doclist ');  // замените "your-class-name" на имя класса, которое вам нужно
  
    // Пример: Извлечение текста из элементов
    const data = elements.map((index, element) => $(element).text()).get();
    
    return data;
  }