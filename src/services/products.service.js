"use strict";

import apiProducts from "../../api.json";

export default {
  query,
};

async function query(filterBy = {}) {
  var products = await apiProducts.data;
  if (filterBy?.date) {
    products = _getFilteredProducts(products, filterBy.date);
  }
  return products;
}

function _getFilteredProducts(products, selectedDate) {
  const nowDate = new Date();
  const dueDate = new Date(selectedDate);
  const filteredProducts = products.filter((product) => {
    return (
      _isMakeDays(product.times.makeDays, dueDate, nowDate) &&
      _availableDay(product.times.available_days_of_week, dueDate) &&
      _notExcludedDay(product.times.excludeDates, dueDate)
    );
  });
  return filteredProducts;
}

function _isMakeDays(makeDays, dueDate, nowDate) {
  if (makeDays === 0) return true;
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = dueDate.getTime() - nowDate.getTime();
  const diffInDays = Math.ceil(diffInTime / oneDay);
  return diffInDays > makeDays;
}

function _availableDay(availableDays, dueDate) {
  const dayOfTheWeek = dueDate.getDay() + 1;
  return availableDays.indexOf(dayOfTheWeek) !== -1;
}

function _notExcludedDay(excludeDatesIncludeIds, dueDate) {
  const excludeDates = excludeDatesIncludeIds.map((excludeDate) => {
    return new Date(excludeDate.date);
  });
  for (const excludeDate of excludeDates) {
    if (
      excludeDate.getMonth() === dueDate.getMonth() &&
      excludeDate.getYear() === dueDate.getYear() &&
      excludeDate.getDate() === dueDate.getDate()
    ) {
      return false;
    }
  }
  return true;
}
