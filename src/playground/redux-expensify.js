import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

// ADD_EXPENSE
const addExpenseAction = (
    {
        description='', 
        note='', 
        amount=0, 
        createdAt=0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// EDIT EXPENSE
const editExpenseAction = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// REMOVE EXPENSE
const removeExpenseAction = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// SET TEXT FILTER
const setTextFilterAction = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT BY AMOUNT
const sortByAmountAction = (amount = 0) => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

// SORT BY DATE
const sortByDateAction = () => ({
    type: 'SORT_BY_DATE'
});

// SET START DATE
const setStartDateAction = (startDate) => ({
    type:'SET_START_DATE',
    startDate
});

// SET END DATE
const setEndDateAction = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense) => (expense.id === action.id ? {...expense, ...action.updates} : expense));
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> (action.id !== id));
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text };
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:
            return state;
    }
};

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
    switch(sortBy){
        case 'date':
            return a.createdAt > b.createdAt ? -1 : 1;
        case 'amount':
            return a.amount > b.amount ? -1 : 1;
    }
});

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const unsubscribe = store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
    addExpenseAction({
        description: 'Rent',
        amount:100,
        createdAt: -21000
    })
);

const expenseTwo = store.dispatch(
    addExpenseAction({
        description: 'Coffee',
        amount:300,
        createdAt: -1000
    })
);

// store.dispatch(
//     removeExpenseAction({
//         id: expenseOne.expense.id
//     })
// );

// store.dispatch(
//     editExpenseAction(
//         expenseTwo.expense.id,
//         {
//             createdAt: 200,
//             amount: 500
//         }
//     )
// );

// store.dispatch(
//     setTextFilterAction('coffee')
// );

// store.dispatch(
//     setTextFilterAction()
// );

// store.dispatch(
//     sortByAmountAction()
// );

// store.dispatch(
//     sortByDateAction()
// );

// store.dispatch(
//     setStartDateAction(125)
// );

// store.dispatch(
//     setStartDateAction()
// );

// store.dispatch(
//     setEndDateAction(195)
// );

const demoState = {
    expenses: [{
        id: 'random',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};