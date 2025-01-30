import { Cash } from "./src/cash.js";

const main = (allExpense) => {
  // const allExpense = Deno.readTextFileSync("./Data/money.txt").split("\n");

  const expenses = allExpense.reduce((object, expense) => {
    const money = Cash.parse(expense);

    return money.add(object);
  }, new Cash(0, 0));

  return expenses.toString();
};

console.log(main([12.5, 3.45, 1.75, 2.3]));
