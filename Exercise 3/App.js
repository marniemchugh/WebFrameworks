import React from 'react';
import ProductList from './components/ProductList';
import data from './data.json'


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
    }
  }

  onSearchFieldChange = (event) => {

    this.setState({ productSearchString: event.target.value });
   
  }

  
  render()
  {
    let output =
      <>
        <div>
          <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        <ProductList
          items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLocaleLowerCase())) }
          />
      </>
  


    return (
      <>
        { output }
      </>
    )
  }
}

export default App;