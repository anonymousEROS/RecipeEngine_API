import React, {Component} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Recipes from './components/Recipes';
import './App.css'


const API_KEY='2c7d0736de068d8b64321de4f4cd2183';
const APP_ID='ec3efa1b';

class App extends Component {
  state = {
    hits: []
  }


  getFacts =  async (e) => {
    const beverage = e.target.elements.beverage.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${beverage}`);
    //console.log(api_call);
    let data = await api_call.json();
    //console.log(data.hits[0].recipe.label);
    this.setState({ hits: data.hits });
    console.log(this.state.hits);
  }
  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const hits = JSON.parse(json);
    this.setState({ hits })
  }


  componentDidUpdate = () => {
    const hits = JSON.stringify(this.state.hits);
    localStorage.setItem('recipes', hits);
  }

  render(){
  return (
    <div className='App'>
      <Header />
      <Form getFacts={this.getFacts}/>
      <Recipes hits={this.state.hits}/>
    </div>
  );
}
}

export default App;
