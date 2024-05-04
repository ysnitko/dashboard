import axios from 'axios';

export default async function handler(req: any, res: any) {
  // Ваш код здесь для обработки визита, например, сохранение информации о визите в базу данных.

  // Отправка сообщения в Telegram
  try {
    await axios.post(
      `https://api.telegram.org/${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: 'Кто-то посетил ваш сайт!',
      }
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке сообщения в Telegram:');
    res.status(500).json({
      success: false,
      error: 'Ошибка при отправке сообщения в Telegram',
    });
  }
}
