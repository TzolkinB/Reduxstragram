import React from 'react';

class Comments extends React.Component {

	handleComment(comment, index) {
		return (
			<div className="comment" key={index}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment">&times;</button>
				</p>
			</div>
		)
	}

	render(){ 
		return (
			<div className="comments">
				{this.props.postComments.map(this.handleComment)}
				<form ref="commentForm" className="comment-form">
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
};

export default Comments;