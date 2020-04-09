import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const state = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test(
    'should setup default filter values',
    () => {
        const action ={
            type: '@@INIT'
        };
        const result = filtersReducer(undefined, action);
        expect(result).toEqual(state);
    }
)

test(
    'should generate set text filter state object',
    () => {
        const action = {
            type: 'SET_TEXT_FILTER',
            text: 'Rent'
        };

        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            text: action.text
        });
    }
);

test(
    'should generate sort by amount state object',
    () => {
        const action = {
            type: 'SORT_BY_AMOUNT',
            sortBy: 'amount'
        };
        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            sortBy: action.sortBy
        });
    }
)

test(
    'should generate sort by date state object',
    () => {
        const action = {
            type: 'SORT_BY_DATE',
            sortBy: 'date'
        };
        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            sortBy: action.sortBy
        });
    }
);

test(
    'should generate set start date state object',
    () => {
        const action = {
            type: 'SET_START_DATE',
            startDate: moment()
        };
        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            startDate: action.startDate
        });
    }
);

test(
    'should generate set end date state object',
    () => {
        const action = {
            type: 'SET_END_DATE',
            endDate: moment()
        };
        const result = filtersReducer(state, action);
        expect(result).toEqual({
            ...state,
            endDate: action.endDate
        });
    }
);