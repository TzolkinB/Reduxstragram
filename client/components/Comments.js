import React from 'react';

class Comments extends React.Component {

	handleComment(comment, index) {
		return (
			<div className="comment" key={index}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>
						&times;
					</button>
				</p>
			</div>
		)
	}

	handleSubmit(e) {
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author;
		const comment = this.refs.comment;
		this.props.addComment(postId, author.value, comment.value);
		this.refs.commentForm.reset();
	}

	render(){ 
		//const comments = this.props.comments[this.props.params.postId] || [];

		return (
			<div className="comments">
				{this.props.postComments.map(this.handleComment.bind(this))}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
};

export default Comments;