import React, { Component } from 'react';
class SearchBar extends Component
{
	constructor(props){
		super(props);
		this.state = { term : ''};
  }
	render()
	{


		return(
		<div className="search-bar">
			<input
			 value={this.state.term}
			 onChange={event => this.onInputChange( event.target.value)} />
		</div>
    );
    var courses=this.props.name.map((item,i)=> {
      console.log(item.name);
      if(this.state.term===item.name)
      {
        console.log(item.name);
      }
      return <List name={item.name} price={item.style} key={i}/>
     });
	}
	onInputChange(term)
	{
		this.setState({term});
    }
	}
  class List extends Component {
    render(){
      return(
        <div>

        </div>
      );
    }
  }
export default SearchBar;
