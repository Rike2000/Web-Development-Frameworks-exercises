import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productPrice25: false,
      productPrice25to50: false,
      productPrice50to100: false,
      productPrice100to200: false,
      productSearchString: "",
    }
  }
  

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }


  render()
  {
    let output =
      <>
        <div>
          Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
          <button onClick={() => this.setState({productPrice25: !this.state.productPrice25})}>Under $25</button>
          <button onClick={() => this.setState({productPrice25to50: !this.state.productPrice25to50})}>$25 to $50</button>
          <button onClick={() => this.setState({productPrice50to100: !this.state.productPrice50to100})}>$50 to $100</button>
          <button onClick={() => this.setState({productPrice100to200: !this.state.productPrice100to200})}>$100 to $200</button>
        </div>
        
        <SearchView items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }/>;
          
      </>

if (this.state.productPrice25) {

        output = <SearchView items={ this.state.items.filter((item) => item.price < 25) }/>   
}
if (this.state.productPrice25to50) {
        output = <SearchView items={ this.state.items.filter((item) => item.price > 25 && item.price < 50)}/>
}
if (this.state.productPrice50to100) {
        output = <SearchView items={ this.state.items.filter((item) => item.price > 50 && item.price < 100) }/>
}
if (this.state.productPrice100to200) {
        output = <SearchView items={ this.state.items.filter((item) => item.price > 100 && item.price < 200) }/>
}

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;