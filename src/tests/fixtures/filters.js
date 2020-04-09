import moment from 'moment';

export const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export const altFilters = {
    text: 'Rent',
    sortBy: 'amount',
    startDate: moment(),
    endDate: moment().add('4', 'months')
};