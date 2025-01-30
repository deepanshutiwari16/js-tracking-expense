const totalExpense = (total, element) => {
  const money = Number(element).toFixed(2);

  return total + Number(money);
};

export const trackingExpense = (expense) => {
  return expense.reduce(totalExpense, 0);
};
