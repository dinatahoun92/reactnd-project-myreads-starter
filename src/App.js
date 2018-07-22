import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import BookShelf from './components/bookshelf.js'


class BooksApp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            books:[]
        }
    }
 
  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })
  }
  render() {
  console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                
                <BookShelf
                    title="Curently reading"
                    books={this.state.books.filter(item => item.shelf === 'CurrentlyReading')}
                    />
                
                    
                <BookShelf
                    title="Want To Read"
                    books={this.state.books.filter(item => item.shelf === 'wantToRead')}
                    />
                
                    
                <BookShelf
                    title="Read"
                    books={this.state.books.filter(item => item.shelf === 'read')}
                    />
                
                
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
