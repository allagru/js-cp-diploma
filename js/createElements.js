export function createElement(tagName, className, parent) {
    const element = document.createElement(tagName);
    element.className = className;
    parent.append(element);
    return element;
}

export function createDateElementHTML(date) {
    const day = date.getDate();
    const weekday = date.toLocaleString('ru-Ru', {
        weekday: 'short',
    });

    return `
      <span class="page-nav__day-week">${weekday}</span>
      <span class="page-nav__day-number">${day}</span>
    `;
}

export function createDateElementDataAttributes(elemnt, year, month, day) {
    elemnt.dataset.year = year;
    elemnt.dataset.month = month;
    elemnt.dataset.day = day;
}