import React from 'react';
import data from './data/data.json'
import React from 'react';
import ReactDOM from 'react-dom';

App = () =>
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            items = data.items
        }
    }

    updateProducts = (event) =>
    {
        this.setState({items : data.items.filter(item => item.name.includes(event.target.value))})
    }

    render()
    {
        return () =>
        {
            <>
            <input type ="text" onChange = {this.updateProducts}/>
            <searchResults products = {data.items} />
            </>
        }

    }
}

ReactDOM.render(<App />, document.getElementById('root'));
