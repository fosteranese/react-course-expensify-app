import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test(
    'should setup the state object with default values',
    () => {
        const result = expensesReducer(undefined, {type: '@@INIT'});
        expect(result).toEqual([]);
    }
);

test(
    'should setup the add expense state object',
    () => {
        const action = {
            type: 'ADD_EXPENSE',
            expense: {
                id: '4',
                description: 'Test case',
                note: '',
                amount: 1600,
                createdAt: moment(0).add(6, 'days').valueOf()
            }
        };
        const result = expensesReducer(expenses, action);
        expect(result).toEqual([
            ...expenses,
            action.expense
        ])
    }
);

test(
    'should setup the edit expense state object',
    () => {
        const action = {
            type: 'EDIT_EXPENSE',
            id: expenses[2].id,
            updates: {
                description: 'Test case',
                amount: 1600
            }
        };
        const result = expensesReducer(expenses, action);
        expect(result).toEqual([
            expenses[0],
            expenses[1],
            {...expenses[2], ...action.updates}
        ]);
    }
);

test(
    'should setup the edit expense state object when expense id is not known',
    () => {
        const action = {
            type: 'EDIT_EXPENSE',
            id: '4',
            updates: {
                id: '3',
                description: 'Test case',
                note: '',
                amount: 1600,
                createdAt: moment(0).add(6, 'days').valueOf()
            }
        };
        const result = expensesReducer(expenses, action);
        expect(result).toEqual(expenses);
    }
);

test(
    'should setup remove expense state object',
    () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: expenses[2].id
        };
        const result = expensesReducer(expenses, action);
        expect(result).toEqual([
            expenses[0],
            expenses[1]
        ]);
    }
);

test(
    'should setup remove expense state object when the id is unknown',
    () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: '4'
        };
        const result = expensesReducer(expenses, action);
        expect(result).toEqual(expenses);
    }
);

test(
    'should set expense',
    () => {
        const action = {
            type: 'SET_EXPENSES',
            expenses: [expenses[1]]
        };

        const state = expensesReducer(expenses, action);
        expect(state).toEqual([
            expenses[1]
        ]);
    }
);