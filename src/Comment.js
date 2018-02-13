import React from 'react';
import marked from 'marked';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      updated: false,
      author: '',
      text: ''
    };
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  updateComment(e){
    e.preventDefault();
    this.setState({
      updated: !this.state.updated
    });
  }
  handleCommentUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let author = this.state.author ? this.state.author : null;
    let text = this.state.text ? this.state.text : null;
    let comment = {
      author: author,
      text: text
    };
    this.props.onCommentUpdate(id, comment);
    this.setState({
      updated: !this.state.updated,
      author: '',
      text: ''
    });

  }

  deleteComment(e){
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onCommentDelete(id);
    console.log('deleted');
  }

  handleTextChange(e){
    this.setState({
      text: e.target.value
    });
  }
  handleAuthorChange(e){
    this.setState({
      author: e.target.value
    });
  }

   rawMarkup() {
     let rawMarkup = marked(this.props.children.toString());
     return { __html: rawMarkup };
   }
   render() {
     return (
       <div>
         <h3>{this.props.author}</h3>
         <span dangerouslySetInnerHTML={ this.rawMarkup() } />
         <a href='#' onClick={this.updateComment}>update</a>
         <a href='#' onClick={this.deleteComment}>delete</a>
         {this.state.updated ? (
           <form onSubmit = {this.handleCommentUpdate}>
             <input type='text'
              placeholder='Update Name..'
              value={this.state.author}
              onChange = {this.handleAuthorChange}/>
             <input type='text'
               placeholder='Update Text..'
               value={this.state.text}
               onChange = {this.handleTextChange}/>
              <input type='submit' value='update'/>
           </form>
         ): null}
       </div>
    );
   }
}
export default Comment;
