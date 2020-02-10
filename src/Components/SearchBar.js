import React from 'react'; // here R of react should be Uppercasr otherwise there will be error

class SearchBar extends React.Component
{
    state = {value:''}

     submit =(event)=>
    {
       event.preventDefault();
       this.props.valueFromSearchBar(this.state.value);
    }

    inputValue = (e) =>
    {
        
       this.setState({value:e.target.value})
    }

    render()
    {
        return (<div className='ui segment'>
        <form className="ui form" onSubmit={this.submit}>
        <div className="field">
          
          <input type="text" value={this.state.value} name="Vedio" onChange={this.inputValue} placeholder="Search vedio"/>
        </div>
        </form>
        </div>)
    }
}

export default SearchBar;