import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpenseSpy, historySpy, removeExpenseSpy, wrapper, expense;

beforeEach(() => {
  expense = expenses[0];
  editExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  removeExpenseSpy = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
    />
  );
});

test("should render edit expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit correctly", () => {
  const updates = {
    description: "Gum",
    note: "",
    amount: 19,
    createdAt: 0,
  };
  wrapper.find("ExpenseForm").prop("onSubmit")(updates);
  expect(editExpenseSpy).toHaveBeenCalledTimes(1);
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, updates);
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});

test("should handle on remove correctly", () => {
  wrapper.find("button").simulate("click");
  expect(removeExpenseSpy).toHaveBeenCalledTimes(1);
  expect(removeExpenseSpy).toHaveBeenLastCalledWith(expense.id);
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});
