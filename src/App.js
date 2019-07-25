import React, { Component } from 'react';
import './App.css';
function searchingFor(term)
{
  return function(x){
    return x.name.includes(term)
  }
}
class App extends Component {
  SearchHandler(event)
  {
      this.setState({term:event.target.value})
  }
  constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded:false,
      term:'',
    }
    this.SearchHandler=this.SearchHandler.bind(this);
  }
  componentDidMount()
  {
    fetch('http://starlord.hackerearth.com/beercraft')
    .then(res => res.json())
    .then(json => {
      this.setState({
      isLoaded:true,
      items:json,
    })
  });
  }
  render() {
    var{isLoaded,items} =this.state;
    if(!isLoaded)
    {
      return(<div>data loading.......</div>)
    }
    else
    {
    return (
      <div className="App">
          <form>
            <input type="text" placeholder="serach by name" onChange={this.SearchHandler} />
          </form>
          <ul>
            {items.filter(searchingFor(this.state.term)).map(item =>(
                <li key={item.id}>
                  {item.name}
                </li>
              ))};
          </ul>

      </div>
    );
    }
  }
}
export default App;
