import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expense-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenses = getVisibleExpenses(props.expenses, props.filters);
    const total = expenses.length;
    const sum = getExpenseTotal(expenses) / 100;
    const sumLiteral = numeral(sum).format('$0,0.00');
    const expenseLiteral = total > 1 ? 'expenses' : 'expense';
    
    return `Viewing ${total} ${expenseLiteral} totalling ${sumLiteral}`;
};

const mapStateToProps = ({expenses, filters}) => ({
    expenses,
    filters
});

export default connect(mapStateToProps)(ExpensesSummary);