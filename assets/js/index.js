var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass ({
    render() {
        return (
            <h1>
            Hello, React!
            </h1>
        )
    }
})

var ListItem = React.createClass ({
  render(){
    return (
      <p>
        {this.props.value}
      </p>
    )
  }
});

var MyList = React.createClass ({
  renderList(i) {
    return <ListItem value={i} />;
  },

  render() {
    var data= ["A", "B", "C", "D"];
    var allInfo = data.map(item =>
      <li>
      {item}
      </li>
    );
    return(
      <ul>
        {this.renderList(allInfo)}
      </ul>

    )}
  });

ReactDOM.render(<Hello />, document.getElementById('container'));

ReactDOM.render(<MyList />, document.getElementById('thislist'));
