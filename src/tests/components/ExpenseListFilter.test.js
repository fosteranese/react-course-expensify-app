import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let wrapper, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters} 
        setTextFilter={setTextFilter} 
        sortByAmount={sortByAmount} 
        sortByDate={sortByDate} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
    />);
});

test(
    'should render ExpenseListFilters correctly',
    () => {
        expect(wrapper).toMatchSnapshot();
    }
);

test(
    'should render ExpenselistFiters with alt filters correctly',
    () => {
        wrapper.setProps({
            filters: altFilters
        });
        expect(wrapper).toMatchSnapshot();
    }
)

test(
    'should handle setTextFilter correctly',
    () => {
        const value = 'Gas';
        wrapper.find('input').at(0).simulate('change', {
            target: {value}
        });
        expect(setTextFilter).toHaveBeenLastCalledWith(value);
    }
);

test(
    'should handle sortByAmount correctly',
    () => {
        const value = 'amount';
        wrapper.find('select').simulate('change', {
            target: { value }
        });
        expect(sortByAmount).toHaveBeenCalledTimes(1);
    }
);

test(
    'should handle sortByDate correctly',
    () => {
        const value = 'date';
        wrapper.find('select').simulate('change', {
            target: { value }
        });
        expect(sortByDate).toHaveBeenCalledTimes(1);
    }
);

test(
    'should handle setStartDate and setEndDate correctly',
    () => {
        const {startDate, endDate} = filters;
        wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate});
        expect(setStartDate).toHaveBeenLastCalledWith(startDate);
        expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    }
);

test(
    'should handle onFocusChange correctly',
    () => {
        const focused = 'endDate';
        wrapper.find(DateRangePicker).prop('onFocusChange')(focused);
        expect(wrapper.state('calendarFocused')).toBe(focused);
    }
);