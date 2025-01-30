import { trackingExpense } from "./src/expenses.js";

const main = () => {
  const input = Deno.args;
  return trackingExpense(input);
};

console.log(main());
