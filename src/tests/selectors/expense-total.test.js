import getExpenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test (
    'should return 0 when an empty expense is passed',
    () => {
        const expectExpenseTotal = 114195;
        const expenseTotal = getExpenseTotal([]);
        expect(expenseTotal).toBe(0);
    }
);

test (
    'should return amount when a single expense is passed',
    () => {
        const expectExpenseTotal = 114195;
        const expenseTotal = getExpenseTotal([ expenses[0] ]);
        expect(expenseTotal).toBe(expenses[0].amount);
    }
);

test (
    'should sum the total expense amount correctly',
    () => {
        const expectExpenseTotal = 114195;
        const expenseTotal = getExpenseTotal(expenses);
        expect(expenseTotal).toBe(expectExpenseTotal);
    }
)