import React from 'react';
import SearchView from './components/SearchView';
import AdminView from './components/adminView';
import axios from 'axios';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      productPrice25: false,
      productPrice25to50: false,
      productPrice50to100: false,
      productPrice100to200: false,
      productSearchString: "",
      adminModeActive: false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/product')
      .then(responce => {
        this.setState({items: responce.data.items})
      })
      .catch(err => console.log(err));

  }
  

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, type, price, rating, image, desc) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      type: type,
      price: price,
      rating: rating,
      image: image,
      desc: desc
    })
    
    axios.post('http://localhost:4000/product', {
      id: newItems.length + 1,
      name: name,
      type: type,
      price: price,
      rating: rating,
      image: image,
      desc: desc
    })
    .catch(err => console.log(err));

    this.setState({
      items: newItems
    });

  }

  deleteItem = id => this.setState({items: this.state.items.filter(items => items.id !== id)})

   deleteItem = (id) => {
     this.setState({items: this.state.items.filter(items => items.id !== id)})
     axios.get('http://localhost:4000/product/delete/'+id)
    }

     refreshPage(){
      window.location.reload();
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
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button> 
        <SearchView items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }/>;
        
      </>

if(this.state.adminModeActive) {
  output = <AdminView
              disableAdminMode={() => this.setState({adminModeActive: false}) }
              addNewItem={ this.addNewItem }
              items={ this.state.items }
              deleteItem={ this.deleteItem }
           />;
}

if (this.state.productPrice25) {

        output = <>
                  <button onClick={() => window.location.reload()}>Go back</button>
                  <SearchView items={ this.state.items.filter((item) => item.price < 25) }/>
                 </>
                 
}
if (this.state.productPrice25to50) {
        output = <>
                  <button onClick={() => window.location.reload()}>Go back</button>
                  <SearchView items={ this.state.items.filter((item) => item.price > 25 && item.price < 50)}/>
                 </>
}
if (this.state.productPrice50to100) {
        output = <>
                  <button onClick={() => window.location.reload()}>Go back</button>
                  <SearchView items={ this.state.items.filter((item) => item.price > 50 && item.price < 100) }/>
                 </>
}
if (this.state.productPrice100to200) {
        output = <>
                  <button onClick={() => window.location.reload()}>Go back</button>
                  <SearchView items={ this.state.items.filter((item) => item.price > 100 && item.price < 200) }/>
                 </>
}

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;