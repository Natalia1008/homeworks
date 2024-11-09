document.querySelector("#button").addEventListener("click", calculateDays);

// Функция для вычисления количества дней до дня рождения
function calculateDays() {
    const birthdayInput = document.getElementById("input"); // Поле ввода даты рождения
    const result = document.getElementById("result"); // Элемент для отображения результат
    const error = document.getElementById("error");  // Элемент для отображения ошибок

// Если значение пустое, показываем сообщение об ошибке
    if (!birthdayInput.value) {
        error.style.display = "block";
        result.textContent = "";
        return;
    }
    error.style.display = "none"  // Скрываем ошибку если дата введена

    const selectDate = new Date(birthdayInput.value);  // Получаем значение из поля ввода (дату что ввел пользователь)


    const today = new Date();  // Получаем сегодняшнюю дату
    const currentYear = today.getFullYear(); // Получаем текущий год
    const birthdayThisYear = new Date(  // Переменная, которая передает текущий год, выбранный месяц и выбранный день
        currentYear,
        selectDate.getMonth(),
        selectDate.getDate()
    );

    if (birthdayThisYear < today) { // Если день рождения уже прошел в этом году, берем следующий год
        birthdayThisYear.setFullYear(currentYear + 1);
    }                                                          

    // Считаем количество дней до следующего дня рождения
    const differenceInTime = birthdayThisYear - today;

    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)
);

    result.textContent = `До вашего дня рождения осталось ${differenceInDays} ${dayWord(differenceInDays)}.`;  // Результат выводим в резальт
}

// Скрываем ошибку при изменении значения в инпуте

document.getElementById('input').addEventListener("input", () => {
    document.getElementById("error").style.display = "none"; })

// Функция для выбора правильного склонения

function dayWord(number) {
    const lastDigits = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastDigits <= 14) {
        return "дней";
    }

    if (lastDigits === 1){
        return "день"
    }
    if (lastDigits >=2 && lastDigits <= 4) {
        return "дня";
    }
        return "дней"
    }
    
