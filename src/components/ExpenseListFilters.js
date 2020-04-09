import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(()=>({
            calendarFocused
        }));
    };

    onTextChange = (e) => {
      const value = e.target.value;
      this.props.setTextFilter(value);
    };

    onSortByChange = (e) => {
      switch (e.target.value) {
        case "date":
          this.props.sortByDate();
          break;
        case "amount":
          this.props.sortByAmount();
          break;
      }
    };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortByChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="startDate"
          endDate={this.props.filters.endDate}
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={()=>false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (value) => dispatch(setTextFilter(value)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);