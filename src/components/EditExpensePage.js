import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {

  editExpense = (updates) => {
    this.props.editExpense(this.props.expense.id, updates);
    this.props.history.push("/");
  };

  removeExpense = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.editExpense} />
        <button onClick={this.removeExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense({id})),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
