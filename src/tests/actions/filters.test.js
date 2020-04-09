import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test(
    'should generate set start date action object',
    () => {
        const startDate = moment();
        const action = setStartDate(startDate);
        expect(action).toEqual({
            type: 'SET_START_DATE',
            startDate
        });
    }
);


test(
    'should generate set end date action object',
    () => {
        const endDate = moment();
        const action = setEndDate(endDate);
        expect(action).toEqual({
            type: 'SET_END_DATE',
            endDate
        });
    }
);

test (
    'should generate sort by amount action object',
    () => {
        const action = sortByAmount();
        expect(action).toEqual({
            type: 'SORT_BY_AMOUNT'
        });
    }
);

test (
    'should generate sort by date action object',
    () => {
        const action = sortByDate();
        expect(action).toEqual({
            type: 'SORT_BY_DATE'
        });
    }
);

test (
    'should generate set text filter action object',
    () =>{
        const text = 'Rent';
        const action = setTextFilter(text);
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text
        });
    }
);

test(
    'should generate set text filter action object with default values',
    () => {
        const action = setTextFilter();
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: ''
        });
    }
)