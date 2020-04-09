import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import moment from 'moment';

test(
    'should setup remove expense action object',
    () => {
        const action = removeExpense({
            id: '123abc'
        });

        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        });
    }
);


test(
    'should setup edit expense action object',
    () => {
        const now = moment();
        const action = editExpense(
            '123abc',
            {
                description: 'Test',
                amount: '100',
                note: 'New note value',
                createdAt: now
            }
        );

        expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id: '123abc',
            updates: {
                description: 'Test',
                amount: '100',
                note: 'New note value',
                createdAt: now
            }
        });
    }
);

test(
    'should setup add expense action object',
    () => {
        const expense = {
            'description': 'Add Test',
            'amount': '200',
            'note': 'Add expense test',
            createdAt: moment()
        };
        const action = addExpense(expense);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expense,
                id: expect.any(String)
            }
        });
    }
);


test(
    'should setup add expense action object with default values',
    () => {
        const action = addExpense();
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        });
    }
);