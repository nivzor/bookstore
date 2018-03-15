import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createBook } from "../actions";

class newBooks extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderFieldOptions(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <select className="form-control" {...field.input}>
          <option value="Science fiction">Science fiction</option>
          <option value="Satire">Satire</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Horror">Horror</option>
        </select>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createBook(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Book's Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Book's Description"
          name="description"
          component={this.renderField}
        />
        <Field
          label="Book's Author"
          name="author"
          component={this.renderField}
        />
        <Field
          label="Book's Genre"
          name="genre"
          component={this.renderFieldOptions}
        />
        <Field
          label="Book's Price"
          name="price"
          component={this.renderField}
        />
        <Field
          label="Book's Publication Date"
          name="publicationDate"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.author) {
    errors.categories = "Enter an author";
  }
  if (!values.description) {
    errors.content = "Enter a description please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "newBooksForm"
})(connect(null, { createBook })(newBooks));
