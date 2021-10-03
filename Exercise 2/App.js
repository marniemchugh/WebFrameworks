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
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Beacon', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  addAStuff = (fꚙd) =>{
    return () =>
    {
      const ident = this.state.items.findIndex((ele) => {
        if(ele.value === fꚙd){
          console.log("yes")
          return true
        }
        else{
          console.log("haha no")
          return false
        }
      })


      if(ident !== -1)
      {
        let shoopingList = [...this.state.items];
        shoopingList[ident].qty += Math.floor(Math.random()*200000);
  
        this.setState({items: shoopingList});
      }
      else{
        this.state.items = [...this.state.items,{id: this.state.items.length + 1, value: fꚙd, qty: Math.floor(Math.random()*200000), unit: "x",}]
        this.setState(this.state.items)
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

      <button onClick={this.addAStuff("Carrots")}>Carrots</button>
      <button onClick={this.addAStuff("Yogert")}>Yogert</button>
      <button onClick={this.addAStuff("Strawberries")}>Strawberries</button>
      <button onClick={this.addAStuff("Beer")}>Beer</button>
    </div>
  }
}

export default App;