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
          />
          <input 
            type="text" 
            name="body" 
            placeholder="Body"
            id={`${i}`}
            onChange={this.handleNestedChange}
          />
        </div>
      )
    })

    return (
      <div>
        <h2>New Page</h2>
        <form onSubmit={this.handleSubmit}>
        	<input 
            type="text" 
            name="title" 
            placeholder={this.state.title || `Enter the title`}
            onChange={this.handleChange} 
            />
          <h3>Content</h3>
            {contentInputs}
            <button onClick={this.addInput}>Add</button>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddEditPage;
