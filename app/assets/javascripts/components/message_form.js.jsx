var MessageForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var user = this.refs.user.value.trim();
    var text = this.refs.text.value.trim();
    // If noting enter return either
    if (!user || !text) {
      return;
    }

    // Call the MessageBox of the events of the parent component
    this.props.onMessageSubmit({ user: user, text: text});
    // Delete the contents of the form
    this.refs.user.value = "";
    this.refs.text.value = "";

  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="user" />
        <input type="text" placeholder="Message" ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
