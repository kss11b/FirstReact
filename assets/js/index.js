
var React = require('react')
var ReactDOM = require('react-dom')

var new_tasks = [];

function add_item(){
  if(document.getElementById('new_task_title').value != ''){

    new_tasks.push(document.getElementById('new_task_title').value)
    document.getElementById('new_task_title').value = ''
    var task_list_components = new_tasks.map(
      (new_task) => <li className="collection-item dismissable">{new_task}</li>
    );
    var task_list = (
      <ul className="collection col s12">{task_list_components}</ul>
    )
    console.log(document.getElementById('new_task_title').value)
    ReactDOM.render(task_list, document.getElementById('main_list'))
}
}

var top_element = (
  <div className="input-field">
    <input type="text" className="col s10 offset s1" id="new_task_title" placeholder="Your Task Here"></input>
    <a href="#" className="btn-floating btn-large  red" id="submit_new_task" onClick={add_item}><i className="material-icons">add</i></a>
  </div>
);

ReactDOM.render(top_element, document.getElementById('top_input'));
