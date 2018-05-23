import React from 'react';
const namess = 'dos'
class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            {namess}
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <ul>
        {this.state.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
            </div>
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          text: ''
        }));
      }
    }
    
export default Input