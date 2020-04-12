import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';


test(
    'should render expense summary correclty',
    () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={10} expenseTotal={1500} />);
        expect(wrapper).toMatchSnapshot();
    }
);

test(
    'should return the correct filter message with multiple expenses',
    () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={10} expenseTotal={1150085} />);
        expect(wrapper.text()).toBe("Viewing 10 expenses totalling $11,500.85");
    }
);

test(
    'should return the correct filter message with 1 expense',
    () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={123500} />);
        wrapper.setProps({
            filters: {
                ...filters,
                text: 'Rent'
            }
        });
        expect(wrapper.text()).toBe("Viewing 1 expense totalling $1,235.00");
    }
);

test(
    'should return the correct filter message with 0 expense',
    () => {
        const wrapper = shallow(<ExpensesSummary expenseCount={0} expenseTotal={0} />);
        wrapper.setProps({
            filters: {
                ...filters,
                text: 'nothing'
            }
        });
        expect(wrapper.text()).toBe("Viewing 0 expense totalling $0.00");
    }
);