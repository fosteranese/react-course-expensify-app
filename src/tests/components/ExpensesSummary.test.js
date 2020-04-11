import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<ExpensesSummary expenses={expenses} filters={filters} />);
});

test(
    'should render expense summary correclty',
    () => {
        expect(wrapper).toMatchSnapshot();
    }
);

test(
    'should return the correct filter message with more than one expenses',
    () => {
        expect(wrapper.text()).toBe("Viewing 3 expenses totalling $1,141.95");
    }
);

test(
    'should return the correct filter message with 1 expense',
    () => {
        wrapper.setProps({
            filters: {
                ...filters,
                text: 'Rent'
            }
        });
        expect(wrapper.text()).toBe("Viewing 1 expense totalling $1,095.00");
    }
);

test(
    'should return the correct filter message with 0 expense',
    () => {
        wrapper.setProps({
            filters: {
                ...filters,
                text: 'nothing'
            }
        });
        expect(wrapper.text()).toBe("Viewing 0 expense totalling $0.00");
    }
);