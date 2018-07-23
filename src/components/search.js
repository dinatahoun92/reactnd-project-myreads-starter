import React from 'react'
import * as BooksAPI from './../BooksAPI'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Book from './book.js'


class Search extends React.Component {
    state={
        books:[]
    };
   onShelfChange(book,shelf){
           this.props.onShelfChange(book,shelf)
       }
fetchBooks(query){
    if(!!query){
        BooksAPI.search(query).then(data =>{
            if(!!data.error){
                this.setState({
                    books:[]
                });
            }else{
                let checkForshelfs = data.map(book=>{
                    for(var i = 0; i< this.props.shelfedBooks.length; i++){
                        if(this.props.shelfedBooks[i].id ===book.id){
                            book.shelf= this.props.shelfedBooks[i].shelf;
                        }
                    }
                    return book;
                })
                this.setState({
                    books:checkForshelfs
                })
            }
        })
    }
}
render() {
  console.log(this.state.books)
    return (
                 <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
              <div className="search-books-input-wrapper">
               
                <input type="text" placeholder="Search by title or author"
                    onChange = {(event) => this.fetchBooks(event.target.value)}
                    />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                    this.state.books.length!==0 && this.state.books.map((book,index) =>(
                         <Book key={index} book={book} onShelfChange={(book,shelf)=>{this.onShelfChange(book,shelf)}}/>
                    )
                                                                        )
                }
                  </ol>
            </div>
          </div>
        )
}
}


export default Search; 