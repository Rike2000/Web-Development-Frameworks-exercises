import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 2, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
        
      ]
    };

  }


  addItems = (description, quantity) => {
    return () =>{
    const matchingIndex = this.state.items.findIndex((element, index, array) =>{
      if (element.value === description) {
        return true;
      }
      else{
        return false;
      }
    });
    
    if(matchingIndex != -1) {
      
      let newItems = [...this.state.items];
      newItems[matchingIndex].qty += quantity;

      this.setState({items: newItems});
      
    }else{
      this.setState({items: [...this.state.items, {id: this.state.items.length+1, value: description, qty: quantity}]})
    }



  }

}

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ (this.addItems('Carrots', Math.floor(Math.random()*10)+1))}>Carrots</button>
      <button onClick={ (this.addItems('Honey', Math.floor(Math.random()*10)+1))}>Honey</button>
      <button onClick={ (this.addItems('Pizza', Math.floor(Math.random()*10)+1))}>Pizza</button>
      <button onClick={ (this.addItems('Avocado', Math.floor(Math.random()*10)+1))}>Avocado</button>
    </div>
    
  }
}

export default App;