import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import BookShelf from './components/bookshelf.js'
import Search from './components/search.js'


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
    handleOnShelfChange(book,shelf){
        BooksAPI.update(book,shelf)
            .then(()=> {
                book.shelf= shelf;
                this.setState(state =>({
                    books: state.books.filter(item => item.id !== book.id).concat([book])
                }))
        })
    }
  render() {
  console.log(this.state.books)
    return (
      <div className="app">
            
 <Route path="/search" render={({history}) =>
    
           (
        <Search
            onShelfChange ={(book,shelf) => {this.handleOnShelfChange(book,shelf)}}
            shelfedBooks={this.state.books}/>
    )
                               }
            
         />
      
           <Route exact path="/" render={({history}) =>
    (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                
                <BookShelf
                    title="Curently reading"
                    books={
                        this.state.books.filter(item => item.shelf === 'currentlyReading')
                    }
                    onShelfChange= {
                        (book,shelf) => {this.handleOnShelfChange(book,shelf)}
                                         }
                              
                    />
                
                    
                <BookShelf
                    title="Want To Read"
                     books={
                        this.state.books.filter(item => item.shelf === 'wantToRead')}
                     onShelfChange= {
                        (book,shelf) => {this.handleOnShelfChange(book,shelf)}
                                         }
                                         
                    />
            
               
                
                    
                <BookShelf
                    title="Read"
                     books={
                        this.state.books.filter(item => item.shelf === 'read')
                    }
                     onShelfChange= {
                        (book,shelf) => {this.handleOnShelfChange(book,shelf)}
                                         }
                    />
                  
                
                
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
    
              )} />   
      </div>
               
    )
               
  }
               
}

export default BooksApp
