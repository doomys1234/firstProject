// Обробка повідомлень від основного потоку
onmessage = function(event) {
    // Отримання даних з повідомлення
    const message = event.data;

    // Виконання довгих обчислень або операцій
    const result = "Hello from Worker! You sent: " + message;

    // Відправлення результату назад до основного потоку
    postMessage(result);
};
