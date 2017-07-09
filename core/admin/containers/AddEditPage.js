import React, { Component } from 'react';



class AddEditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: [
        {className: '', body: ''}
      ]
    }
    this.addInput = this.addInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNestedChange = this.handleNestedChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    const page = nextProps.pages[this.props.match.params.id]
    this.setState(page)
  }


  handleChange(e) {
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    })
  }

  handleNestedChange(e) {
    const newStateContent = this.state.content;
    newStateContent[e.target.id][e.target.name] = e.target.value;
    this.setState({
      content: newStateContent
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPage(this.state);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.editPage(this.props.match.params.id, this.state)
  }

  addInput() {
    const newInput = { className: '', body: ''}
    this.setState({content: this.state.content.concat(newInput)});
  }


  render() {
    const contentInputs = this.state.content.map((content, i)=> {
     return (
        <div key={i}>
          <input 
            type="text" 
            name="className"
            id={`${i}`} 
            placeholder="Class name"
            onChange={this.handleNestedChange}
            value={this.state.content[0].className || ''}
          />
          <input 
            type="text" 
            name="body" 
            placeholder="Body"
            id={`${i}`}
            onChange={this.handleNestedChange}
            value={this.state.content[0].body || ''}
          />
        </div>
      )
    })


    return (
      <div>
        <h2>New Page</h2>
        <form onSubmit={this.state.title ? this.handleUpdate : this.handleSubmit}>
        	<input 
            type="text" 
            name="title" 
            placeholder={`Enter the title`}
            onChange={this.handleChange}
            value={this.state.title || ''} 
            />
          <h3>Content</h3>
            {contentInputs}
            <button onClick={this.addInput}>Add</button>
          <input type="submit" value={this.state.title ? `Update` : `Submit`}/>
        </form>
      </div>
    );
  }
}

export default AddEditPage;
