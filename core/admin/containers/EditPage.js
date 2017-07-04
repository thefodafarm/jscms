import React, { Component } from 'react';

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: [
        {className: '', body: ''}
      ]
    }
    this.addInput = this.addInput.bind(this);
  }

  onChange(e) {

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  addInput() {
    const newInput = { className: '', body: ''}
    this.setState({content: this.state.content.concat(newInput)});
  }


  render() {
    const contentInputs = this.state.content.map((content)=> {
     return (
        <div>
          <input 
            type="text" 
            name="contentClass" 
            placeholder="Class name"
            value={content.className}
          />
          <input 
            type="text" 
            name="contentBody" 
            placeholder="Body"
            value={content.body}
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
            onChange={this.onChange} 
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

export default EditPage;
