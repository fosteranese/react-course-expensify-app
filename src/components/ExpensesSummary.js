import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getVisibleExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expense-total';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const sumLiteral = numeral(expenseTotal / 100).format('$0,0.00');
    const expenseLiteral = expenseCount > 1 ? 'expenses' : 'expense';
    
    return (
        <div>
            Viewing {expenseCount} {expenseLiteral} totalling {sumLiteral}
        </div>
    );
};

const mapStateToProps = ({expenses, filters}) => {
    const visibleExpenses = getVisibleExpenses(expenses, filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getExpenseTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);