//The HTML <figure> element represents self-contained content, 
//frequently with a caption (<figcaption>), and is typically referenced as a single unit.

import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
	render() {
		const { post, index, comments } = this.props
		
		return(
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img 
							src={post.display_src} 
							alt={post.caption} 
							className="grid-photo" 
						/>
					</Link>

					<CSSTransitionGroup transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						<span key={post.likes} className="likes-heart">
							{post.likes}
						</span>
					</CSSTransitionGroup>
				</div>

					<figcaption>
						<p>{post.caption}</p>
						<div className="control-buttons">
							<button onClick={this.props.increment.bind(null, index)} className="likes">
								&hearts; {post.likes}
							</button>
							<Link className="button" to={`/view/${post.code}`}>
								<span className="comment-count">
									<span className="speech-bubble"></span>
										{comments[post.code] ? comments[post.code].length : 0}
									</span>
							</Link>

						</div>
					</figcaption>

			</figure>
		)
	}
}

export default Photo;