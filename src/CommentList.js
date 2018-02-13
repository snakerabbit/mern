import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
   render() {
     let commentNodes = this.props.data.map(comment => {
     return (
       <Comment author={ comment.author }
         key={ comment['_id'] }
         onCommentDelete={this.props.onCommentDelete}
         onCommentUpdate={this.props.onCommentUpdate}>
       { comment.text}
       </Comment>
    );
    });
       return (
       <div>
       { commentNodes }
      </div>
    );
   }
}
export default CommentList;
