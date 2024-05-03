const TOKEN = '6991711999:AAHrQjF6r-Yss5Ezm6p8j7eUEbdF5TqKpjw';
const CHAT_ID = '5639219736';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const message = 'Пользователь посетил сайт!';
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
      res.status(200).json({ message: 'Уведомление отправлено' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при отправке уведомления' });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
