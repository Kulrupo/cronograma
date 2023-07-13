// Função para criar o calendário
function createCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const calendarTable = document.getElementById('calendar');
  const monthYearHeader = document.getElementById('month-year');
  monthYearHeader.textContent = getMonthName(month) + ' ' + year;

  let date = 1;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const tbody = document.createElement('tbody');

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        const cell = document.createElement('td');
        row.appendChild(cell);
      } else if (date > lastDay.getDate()) {
        break;
      } else {
        const cell = document.createElement('td');
        cell.textContent = date;

        if (
          year === currentYear &&
          month === currentMonth &&
          date === currentDate.getDate()
        ) {
          cell.classList.add('today');
        }

        // Check if the date should be highlighted
        if (
          (month === 6 && [24].includes(date)) || // July
          (month === 7 && [3, 13, 23].includes(date)) || // August
          (month === 8 && [2, 12, 22].includes(date)) || // September
          (month === 9 && [2, 12, 22].includes(date)) || // October
          (month === 10 && [1, 11, 21].includes(date)) // November
        ) {
          cell.classList.add('highlighted');
        }

        row.appendChild(cell);
        date++;
      }
    }
    tbody.appendChild(row);
  }

  calendarTable.replaceChild(tbody, calendarTable.getElementsByTagName('tbody')[0]);
}

// ...


// ...



// Função para obter o nome do mês
function getMonthName(month) {
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  return monthNames[month];
}

// Função para atualizar o calendário com um novo mês
function updateCalendar(year, month) {
  createCalendar(year, month); // Cria o novo calendário
}

// Obtém a data atual
const currentDate = new Date();
let startYear = currentDate.getFullYear();
let startMonth = currentDate.getMonth();

// Cria o calendário para o mês atual
createCalendar(startYear, startMonth);

// Botões de navegação entre os meses
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Eventos de clique nos botões
prevButton.addEventListener('click', function () {
  startMonth--; // Reduz o mês
  if (startMonth < 0) {
    startMonth = 11;
    startYear--;
  }
  updateCalendar(startYear, startMonth);
});

nextButton.addEventListener('click', function () {
  startMonth++; // Aumenta o mês
  if (startMonth > 11) {
    startMonth = 0;
    startYear++;
  }
  updateCalendar(startYear, startMonth);
});
