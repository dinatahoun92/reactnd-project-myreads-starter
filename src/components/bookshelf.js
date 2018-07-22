import React from 'react'
import Book from './book.js'

class BookShelf extends React.Component {
    
       onShelfChange(book,shelf){
           this.props.onShelfChange(book,shelf)
       }
  render() {
    
     
    return (
       
                    <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                            
                            this.props.books.length > 0 && this.props.books.map((item) =>
                            (
                            
                                <Book key={item.id} book={item} onShelfChangeCategory={(book,shelf)=>{this.onShelfChange(book,shelf)}}/>
                               
                                   
                            )
                        )
                      }
                    </ol>
                  </div>
                </div>
    

              </div>
        )
  }
}
export default BookShelf; 