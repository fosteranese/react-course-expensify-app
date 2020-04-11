const getExpenseTotal = (expenses = []) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((sum, current) => (sum + current), 0);
};

export default getExpenseTotal;