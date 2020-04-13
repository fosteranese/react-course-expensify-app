import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from "../../actions/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import expenses from "../fixtures/expenses";
import configureStore from "../../store/configure-store";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeAll((done) => {
  done();
});

beforeEach((done) => {
  const expensesData = expenses.reduce(
    (expenseObj, { id, description, amount, note, createdAt }) => {
      expenseObj[id] = {
        description,
        amount,
        note,
        createdAt,
      };
      return expenseObj;
    },
    {}
  );
  database
    .ref("expenses")
    .set(expensesData)
    .then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense({
    id: "123abc",
  });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should remove expense from database and store", (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });
      return database.ref(`expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(null);
      done();
    });
});

test("should setup edit expense action object", () => {
  const now = moment();
  const action = editExpense("123abc", {
    description: "Test",
    amount: "100",
    note: "New note value",
    createdAt: now,
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      description: "Test",
      amount: "100",
      note: "New note value",
      createdAt: now,
    },
  });
});

test("should edit expense in database and store", (done) => {
  const store = createMockStore({});
  const id = expenses[0].id;
  const updates = {
    description: "Testing Bill",
    note: "Am also just taking notes.thats all",
    amount: 1005,
    createdAt: 340000,
  };

  store
    .dispatch(startEditExpense(id, updates))
    .then((done) => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates,
      });

      return database.ref(`expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(updates);
      done();
    });
});

test("should setup add expense action object", () => {
  const expense = {
    description: "Add Test",
    amount: "200",
    note: "Add expense test",
    createdAt: moment(),
  };
  const action = addExpense(expenses[1]);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[1],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore({});
  const expeneseDefaults = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expeneseDefaults,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expeneseDefaults);
      done();
    });
});

test("should setup set expenses action object", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should set expenses correctly", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses: expenses,
    });
    done();
  });
});
