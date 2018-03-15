import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBook, deleteBook } from "../actions";

class showBooks extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBook(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteBook(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { book } = this.props;

    if (!book) {
      return <div>Loading...</div>;
    }

    return (
      <div className="bookInfo">        
        <button
          className="btn btn-danger"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Book
        </button>        
        <Link className="btn btn-primary" to="/">          
        Back To Books</Link>
        <div>
        <h3>{book.title}</h3>
        <h6>By: {book.author} Genre:{book.genre}</h6>
        <div> price : {book.price} <br/>  published: {book.publicationDate} </div>
        <br/>        
        <h4>Description:</h4>
        <p>{book.description}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ books }, ownProps) {
  return { book: books[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchBook, deleteBook })(showBooks);
