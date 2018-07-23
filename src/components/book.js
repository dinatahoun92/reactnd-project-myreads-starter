import React from 'react'

class Book extends React.Component {
        handleShelfChange(value){
        this.props.onShelfChange(this.props.book,value)
    }
  render() {
  let thumbnail;

      if(!!this.props.book.imageLinks){
          thumbnail =`url(${this.props.book.imageLinks.thumbnail})`
      }else{
          thumbnail= `url('https://placeholdit.co//i/128x193?&bg=555&fc=fff&text=Book Cover')`
      }
    return (
         <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:thumbnail}}></div>
                            <div className="book-shelf-changer">
                              <select value="{this.props.book.shelf}"
                                  onChange={(event) => this.handleShelfChange(event.target.value)}
                                  >
                                <option value="move">Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
                        </div>
                      </li>
        )
  }
}

export default Book; 