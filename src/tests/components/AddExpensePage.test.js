import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpenseSpy, historySpy, wrapper, expense;

beforeEach(() => {
    expense = expenses[0];
    addExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={addExpenseSpy} history={historySpy} />);
});

test(
    'should render add expense page correctly',
    () => {
        expect(wrapper).toMatchSnapshot();
    }
);

test(
    'should handle onSubmit',
    () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expense);
        expect(addExpenseSpy).toHaveBeenLastCalledWith(expense);
        expect(historySpy.push).toHaveBeenLastCalledWith('/');

    }
);