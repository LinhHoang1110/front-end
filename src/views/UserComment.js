import React, { Component } from 'react'

let data = [
    {
        id: "1",
        author: "David",
        text: "First comment"
    },
    {
        id: "2",
        author: "Sam",
        text: "Second comment"
    },
]


class CommentBox extends Component {
    getInitialState() {
        return ({ data: data })
    }
    handleFormSubmit(comment) {
        //update array for demo purposes - would be fetched from server etc..
        data.push(comment);
        this.setState({ data: data });
    }
    render() {
        return (
            <div className="comments">
                <h2>Simple comment box with React</h2>
                <p><a href="https://facebook.github.io/react/docs/tutorial.html">https://facebook.github.io/react/docs/tutorial.html</a></p>
                <CommentList data={this.props.data} />
                <CommentForm onFormSubmit={this.handleFormSubmit} />
            </div>
        )
    }
}

class CommentList extends Component {
    render() {
        var commentnodes = this.props.data
        ? this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
            )
        }) : "";
        return (
            <div className="comments_list">
                {commentnodes}
            </div>
        )
    }
}

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h3 className="comment_author">{this.props.author}</h3>
                {this.props.children}
            </div>
        )
    }
}

class CommentForm extends Component {
    getInitialState() {
        return ({ author: '', text: '' });
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        var author = this.state.author,
            text = this.state.text;

        if (!author || !text) {
            //output error message
            return
        }

        this.props.onFormSubmit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Add a comment</legend>
                    <input type="text" placeholder="Name" onChange={this.handleAuthorChange} value={this.state.author} />
                    <input type="text" placeholder="Comment" onChange={this.handleTextChange} value={this.state.text} />
                    <input type="submit" value="Post Comment" className="button" />
                </fieldset>
            </form>
        )
    }
}

export default CommentBox