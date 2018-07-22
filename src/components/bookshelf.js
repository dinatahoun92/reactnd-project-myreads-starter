import React from 'react'
import Book from './book.js'

class BookShelf extends React.Component {
  render() {
       console.log(this.props);
    return (
       
                    <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                            
                            this.props.books.length > 0 && this.props.books.map((item) =>
                            (
                            
                                <Book key={item.id} book={item}/>
                               
                                   
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