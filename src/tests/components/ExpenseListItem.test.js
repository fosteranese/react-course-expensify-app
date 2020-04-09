import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test(
    'should generate an expense list item component',
    () => {
        const wrapper = new shallow(<ExpenseListItem {...expenses[0]} />);
        expect(wrapper).toMatchSnapshot();
    }
);