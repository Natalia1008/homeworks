function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = quantity * price;
    const formatResult = result.toLocaleString('ru-RU');
    alert(`Стоимость покупки: ${formatResult} рублей.`);
}


