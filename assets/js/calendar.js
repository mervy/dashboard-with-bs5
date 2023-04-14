//Classe do calendário
class Calendar {
    constructor() {
        this.currentDate = new Date();
    }

    getMonthName() {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const monthIndex = this.currentDate.getMonth();
        return months[monthIndex];
    }

    getYear() {
        return this.currentDate.getFullYear();
    }

    getNumDays() {
        const monthIndex = this.currentDate.getMonth();
        const year = this.currentDate.getFullYear();
        const numDays = new Date(year, monthIndex + 1, 0).getDate();
        return numDays;
    }

    render() {
        const monthName = this.getMonthName();
        const year = this.getYear();
        const numDays = this.getNumDays();

        let calendarHtml = `
<div class="calendar fs-4 col-5 text-center mx-auto">
<div class="calendar-header mb-3">
  <button class="prev-year btn btn-danger px-4">&lt;&lt;</button>
  <button class="prev-month btn btn-danger px-4">&lt;</button>
  <span>${monthName} ${year}</span>
  <button class="next-month btn btn-danger px-4">&gt;</button>
  <button class="next-year btn btn-danger px-4">&gt;&gt;</button>
</div>
<table class="table table-striped">
 <thead class="table-dark">
    <tr>
      <th>Dom</th>
      <th>Seg</th>
      <th>Ter</th>
      <th>Qua</th>
      <th>Qui</th>
      <th>Sex</th>
      <th>Sab</th>
    </tr>
  </thead>
  <tbody>
`;

        let dayOfMonth = 1;
        let dayOfWeek = new Date(year, this.currentDate.getMonth(), dayOfMonth).getDay();
        let isFirstRow = true;

        while (dayOfMonth <= numDays) {
            if (isFirstRow) {
                calendarHtml += '<tr>';
                for (let i = 0; i < dayOfWeek; i++) {
                    calendarHtml += '<td></td>';
                }
                isFirstRow = false;
            } else if (dayOfWeek === 0) {
                calendarHtml += '<tr>';
            }

            calendarHtml += `<td>${dayOfMonth}</td>`;

            if (dayOfWeek === 6) {
                calendarHtml += '</tr>';
                isFirstRow = false;
            }

            dayOfMonth++;
            dayOfWeek = new Date(year, this.currentDate.getMonth(), dayOfMonth).getDay();
        }

        calendarHtml += `
  </tbody>
</table>
</div>
`;

        return calendarHtml;
    }

    bindEvents() {
        const prevYearButton = document.querySelector('.prev-year');
        const prevMonthButton = document.querySelector('.prev-month');
        const nextMonthButton = document.querySelector('.next-month');
        const nextYearButton = document.querySelector('.next-year');

        prevYearButton.addEventListener('click', () => {
            this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
            this.refresh();
        });

        prevMonthButton.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.refresh();
        });

        nextMonthButton.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.refresh();
        });

        nextYearButton.addEventListener('click', () => {
            this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
            this.refresh();
        });
    }

    refresh() {
        const calendarHtml = this.render();
        const calendarContainer = document.querySelector('#calendar-container');
        calendarContainer.innerHTML = calendarHtml;
        this.bindEvents();
    }
}
const calendar = new Calendar();
calendar.refresh();