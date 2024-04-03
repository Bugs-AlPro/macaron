'use strict'
// Создаём переменные для кнопок 
const startStepButton = document.querySelector('.steps__btn0');
const nextStepButton = document.querySelector('.steps__btn1');
const previousStepButton = document.querySelector('.steps__btn2');
const reloadButton = document.querySelector('.steps__btn3');

const costForm = document.querySelector('.fieldset-cost');
const priceForm = document.querySelector('.fieldset-price');

const startStepSection = document.querySelector('.steps--start');
const firstStepSection = document.querySelector('.steps--first');
const secondStepSection = document.querySelector('.steps--second');
const thirdStepSection = document.querySelector('.steps--third');

const products = [
  {
    name: 'flour',
    costPerGram: 0,
    recipeWeight: 0,
    recipeCost: 0
  },
  {
    name: 'sugar',
    costPerGram: 0,
    recipeWeight: 0,
    recipeCost: 0
  },
  {
    name: 'powdered-sugar',
    costPerGram: 0,
    recipeWeight: 0,
    recipeCost: 0
  },
  {
    name: 'egg',
    costPerGram: 0,
    recipeWeight: 0,
    recipeCost: 0
  },
  {
    name: 'chocolate',
    costPerGram: 0,
    recipeWeight: 0,
    recipeCost: 0
  },
  {
    name: 'cream',
    costPerGram: 0,
    recipeWeight: 0,
    recipeCost: 0
  },
  // Добавьте другие продукты здесь
];


let sumWeightFillings = 0;
let sumPriceOneGramFillings = 0;

let sumPriceShells = 0;
let sumPriceFillings = 0;

let totalPriceOneFillings = 0;
let totalPriceOneShells = 0;

let totalFinalCost = 0;


function updateProductData() {
  products.forEach(product => {
    const packageCost = parseFloat(document.getElementById(product.name.toLowerCase()).value);
    const packageWeight = parseFloat(document.getElementById(`amount-of-${product.name.toLowerCase()}`).value);

    if (!isNaN(packageCost) && !isNaN(packageWeight) && packageWeight !== 0) {
      product.costPerGram = packageCost / packageWeight;
    }

    const itemRecipeWeight = parseFloat(document.getElementById(`${product.name.toLowerCase()}-recipe`).value);

    if (!isNaN(itemRecipeWeight) && itemRecipeWeight !== 0) {
      product.recipeWeight = itemRecipeWeight;
      product.recipeCost = itemRecipeWeight * product.costPerGram;
    }
  });
}

// создаём переменные для подсчёта суммы стоимости продуктов
const inputs = document.querySelectorAll('.line__input--price');
const totalPrice = document.getElementById('total-price');

// Назначаем обработчик события input для каждого элемента input
inputs.forEach(function (input) {
  input.addEventListener('input', updateTotalPriceSum);
});

// Функция для подсчета затрат на покупку всех продуктов
function updateTotalPriceSum() {
  // Обнуляем сумму перед подсчетом
  let sum = 0;

  // Проходим по каждому элементу input и добавляем его значение к сумме
  inputs.forEach(function (input) {
    // Получаем значение из текущего input и преобразуем его в число
    const value = parseFloat(input.value);

    // Проверяем, что значение не является NaN (не число), не отрицательное и больше нуля
    if (!isNaN(value) && value >= 0) {
      // Если значение корректное (число и не отрицательное), добавляем его к сумме
      sum += value;
    } else {
      // Если значение не корректное, выводим сообщение об ошибке
      // alert('Введите корректное значение в поле ' + input.placeholder);
      // Обнуляем значение текущего input
      input.value = '';
    }
  });

  // Выводим результат в элемент с id "total-price"
  totalPrice.textContent = sum;
}

// Функция для вычисления общей стоимости ингредиентов
function calculateTotalShellsIngredientsCost() {
  // Используем метод reduce() для суммирования стоимости каждого продукта по рецепту
  return products
    .filter(product => ['flour', 'sugar', 'powdered-sugar', 'egg'].includes(product.name)) // Выбираем нужные ингредиенты
    .reduce((total, product) => total + product.recipeCost, 0);
}
// Функция для вычисления общего веса ингредиентов крышечек
function calculateTotalShellsIngredientsWeight() {
  // Используем метод reduce() для суммирования веса ингредиентов крышечек
  const shellsIngredientsWeight = products
    .filter(product => ['flour', 'sugar', 'powdered-sugar'].includes(product.name)) // Выбираем нужные ингредиенты
    .reduce((total, product) => total + product.recipeWeight, 0); // Суммируем их вес
  return shellsIngredientsWeight + 110; // Добавляем вес яичного белка
}
// Функция для вычисления стоимости одной штуки крышечки
function calculatePricePerShell(totalCost, quantityShells) {
  return totalCost / quantityShells;
}
// Функция для вычисления общей себестоимости крышечек
function calculateShellsCost() {
  const quantityShells = parseFloat(document.getElementById('shells').value);

  if (!isNaN(quantityShells)) {
    const totalIngredientsCost = calculateTotalShellsIngredientsCost();
    totalPriceOneShells = calculatePricePerShell(totalIngredientsCost, quantityShells);
    totalFinalCost = totalPriceOneShells * 2;
    sumPriceShells = totalIngredientsCost;
  } else {
    alert("Ошибка: данных не определены или некорректны.");
  }
}

// Функция для получения значения из элемента ввода и преобразования его в число
function getValueAndParseFloat(elementId) {
  return parseFloat(document.getElementById(elementId).value);
}

// Функция для вычисления стоимости начинки
function calculateFillingsCost() {
  const quantityFillings = getValueAndParseFloat('fillings');
  const chocolateRecipe = products.find(product => product.name === 'chocolate').recipeCost;
  const creamRecipe = products.find(product => product.name === 'cream').recipeCost;

  if (!isNaN(quantityFillings)) {
    const sumWeightFillings = products.find(product => product.name === 'chocolate').recipeWeight +
      products.find(product => product.name === 'cream').recipeWeight;
    sumPriceFillings = chocolateRecipe + creamRecipe;
    sumPriceOneGramFillings = sumPriceFillings / sumWeightFillings;
    totalPriceOneFillings = sumPriceOneGramFillings * quantityFillings;
    totalFinalCost += totalPriceOneFillings;
    // console.log("Цена начинки: общая сумма, общий вес, цена за штуку", sumPriceFillings, sumWeightFillings, totalPriceOneFillings);
  } else {
    alert("Ошибка: данных не определены или некорректны.");
  }
}

// Функция для вычисления общего веса ингредиентов крышечек
function calculateTotalFillingsIngredientsWeight() {
  // Используем метод reduce() для суммирования веса ингредиентов крышечек
  const fillingsIngredientsWeight = products
    .filter(product => ['chocolate', 'cream'].includes(product.name)) // Выбираем нужные ингредиенты
    .reduce((total, product) => total + product.recipeWeight, 0); // Суммируем их вес
  return fillingsIngredientsWeight; // Добавляем вес яичного белка
}

// Функция для обновления отображения данных на странице
function updateDisplay(elementId, value) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = value.toFixed(2);
  }
}

// Функция для обновления данных о рецептах на странице
function updateRecipeDisplay(elementId, value) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = value;
  }
}

// Функция для обновления данных о стоимости рецепта на странице
function updateRecipeCostDisplay(elementId, value) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = value.toFixed(2);
  }
}

// Функция для обновления всего отображения итоговой стоимости
function updateTotalCostDisplay() {
  updateDisplay('total-price-one-shells', totalPriceOneShells);
  updateDisplay('total-price-one-shells-2', totalPriceOneShells);
  updateDisplay('total-price-one-shells-3', totalPriceOneShells);
  updateDisplay('total-price-one-fillings', totalPriceOneFillings);
  updateDisplay('total-price-one-fillings-2', totalPriceOneFillings);
  updateDisplay('calculate-total-cost', totalFinalCost);
  updateDisplay('sum-price-shells', sumPriceShells);
  updateDisplay('sum-price-shells-2', sumPriceShells);
  updateDisplay('sum-price-fillings', sumPriceFillings);
  updateDisplay('sum-price-fillings-2', sumPriceFillings);
  updateDisplay('shells-2', parseFloat(document.getElementById('shells').value));
  updateDisplay('fillings-2', parseFloat(document.getElementById('fillings').value));

  updateRecipeDisplay('flour-recipe-2', parseFloat(document.getElementById('flour-recipe').value));
  updateRecipeDisplay('sugar-recipe-2', parseFloat(document.getElementById('sugar-recipe').value));
  updateRecipeDisplay('powdered-sugar-recipe-2', parseFloat(document.getElementById('powdered-sugar-recipe').value));
  updateRecipeDisplay('chocolate-recipe-2', parseFloat(document.getElementById('chocolate-recipe').value));
  updateRecipeDisplay('cream-recipe-2', parseFloat(document.getElementById('cream-recipe').value));

  updateDisplay('sum-weight-shells', calculateTotalShellsIngredientsWeight());
  updateDisplay('sum-weight-fillings', calculateTotalFillingsIngredientsWeight());
  updateDisplay('sum-weight-fillings-2', calculateTotalFillingsIngredientsWeight());


  updateRecipeCostDisplay('flour-recipe-cost', products.find(product => product.name === 'flour').recipeCost);
  updateRecipeCostDisplay('sugar-recipe-cost', products.find(product => product.name === 'sugar').recipeCost);
  updateRecipeCostDisplay('powdered-sugar-recipe-cost', products.find(product => product.name === 'powdered-sugar').recipeCost);
  updateRecipeCostDisplay('egg-recipe-cost', products.find(product => product.name === 'egg').recipeCost);
  updateRecipeCostDisplay('chocolate-recipe-cost', products.find(product => product.name === 'chocolate').recipeCost);
  updateRecipeCostDisplay('cream-recipe-cost', products.find(product => product.name === 'cream').recipeCost);

  updateDisplay('sum-price-one-gram-fillings', sumPriceOneGramFillings);
}

// Обработчики событий для кнопок
startStepButton.addEventListener('click', startNextStep);
nextStepButton.addEventListener('click', handleNextStep);
previousStepButton.addEventListener('click', handlePreviousStep);
reloadButton.addEventListener('click', handleReload);

// Функция для обработки нажатия кнопки "Старт"
function startNextStep() {
  enableForm(costForm);
  disableButtons(currencySigns);
  deactivateSection(startStepSection);
  activateSection(firstStepSection);
  goToNextSection(firstStepSection);
  markButtonAsDone(startStepButton);
  disableButton(startStepButton);
  activateButton(nextStepButton);

  togglePreviousSiblingClass(startStepButton, 'steps__body--activ');
  // setTimeout(() => togglePreviousSiblingClass(nextStepButton, 'steps__body--activ'), 100);
  togglePreviousSiblingClass(nextStepButton, 'steps__body--activ');

  setCurrency();

}
// Функция для обработки нажатия кнопки "Шаг первый"
function handleNextStep() {
  disableForm(costForm);
  enableForm(priceForm);

  deactivateSection(firstStepSection);
  activateSection(secondStepSection);
  goToNextSection(secondStepSection);
  markButtonAsDone(nextStepButton);
  disableButton(nextStepButton);
  activateButton(previousStepButton);

  togglePreviousSiblingClass(nextStepButton, 'steps__body--activ');
  // setTimeout(() => togglePreviousSiblingClass(previousStepButton, 'steps__body--activ'), 100);
  togglePreviousSiblingClass(previousStepButton, 'steps__body--activ');

}

// Функция для обработки нажатия кнопки "Шаг второй"
function handlePreviousStep() {
  disableForm(priceForm);

  deactivateSection(secondStepSection);
  activateSection(thirdStepSection);
  goToNextSection(thirdStepSection);
  markButtonAsDone(previousStepButton);
  disableButton(previousStepButton);
  activateButton(reloadButton);

  togglePreviousSiblingClass(previousStepButton, 'steps__body--activ');
  // setTimeout(() => togglePreviousSiblingClass(reloadButton, 'steps__body--activ'), 100);
  togglePreviousSiblingClass(reloadButton, 'steps__body--activ');

  updateProductData();
  calculateShellsCost();
  calculateFillingsCost();
  updateTotalCostDisplay();
}

// Функция для обработки нажатия кнопки "Шаг третий Сброс"
function handleReload() {
  location.reload();

  // deactivateSection(thirdStepSection);
  // activateSection(startStepSection);

  // markResetButtonAsDone(reloadButton);
  // reloadNameStartButton(startStepButton);
  // reloadNameStapsButton(nextStepButton);
  // reloadNameStapsButton(previousStepButton);
  // disableButton(reloadButton);
  // activateButton(startStepButton);

  // togglePreviousSiblingClass(reloadButton, 'steps__body--activ');
  // // setTimeout(() => togglePreviousSiblingClass(startStepButton, 'steps__body--activ'), 100);
  // togglePreviousSiblingClass(startStepButton, 'steps__body--activ');

  // resetCurrency();
  resetPageToTop();
}

// Вспомогательные функции
function disableForm(form) {
  form.setAttribute("disabled", "disabled");
}

function enableForm(form) {
  form.removeAttribute("disabled");
}

function deactivateSection(section) {
  section.classList.remove('steps--activ');
  section.classList.add('steps--done');
}

function activateSection(section) {
  section.classList.add('steps--activ');
}

function markButtonAsDone(button) {
  button.classList.replace('steps__btn--activ', 'steps__btn--done');
  if (button.value.includes("Далее")) {
    button.setAttribute("value", "Готово");
  } else if (button.value.includes("Next")) {
    button.setAttribute("value", "Done");
  }
}
function markResetButtonAsDone(button) {
  button.classList.replace('steps__btn--activ', 'steps__btn--done');
}

function reloadNameStartButton(button) {
  button.setAttribute("value", "Начать");
}
function reloadNameStapsButton(button) {
  button.setAttribute("value", "Далее");
}

function activateButton(button) {
  button.classList.replace('steps__btn--done', 'steps__btn--activ');
  button.removeAttribute("disabled");
}

function disableButton(button) {
  button.setAttribute("disabled", "disabled");
}

function disableButtons(buttons) {
  for (let item of buttons) {
    item.setAttribute("disabled", "disabled");
  }
}

function goToNextSection(nextSection) {
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

function togglePreviousSiblingClass(element, className) {
  const previousElement = element.previousElementSibling;
  if (previousElement) {
    previousElement.classList.toggle(className);
  }
}

const currencySigns = document.querySelectorAll('.price-settings__btn');
const currencySpans = document.querySelectorAll('.selected-currency');
let selectedCurrency = '$';

for (let item of currencySigns) {
  item.addEventListener('click', () => {
    // Удаляем класс активности у всех кнопок
    currencySigns.forEach(button => {
      button.classList.remove('price-settings__btn--activ');
    });
    // Добавляем класс активности только нажатой кнопке
    item.classList.add('price-settings__btn--activ');
    selectedCurrency = item.textContent; // Присваиваем значение текста кнопки
  });
}

function setCurrency() {
  for (let item of currencySpans) {
    item.textContent = selectedCurrency;
  }
}

function resetCurrency() {
  selectedCurrency = '$';
  for (let item of currencySigns) {
    if (item.textContent === selectedCurrency) {
      item.classList.add('price-settings__btn--activ');
    } else {
      item.classList.remove('price-settings__btn--activ');
    }
  }

}

function resetPageToTop() {
  window.scrollTo(0, 0);
}