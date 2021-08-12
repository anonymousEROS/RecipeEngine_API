import React from "react";

import { Link } from 'react-router-dom';

const API_KEY='2c7d0736de068d8b64321de4f4cd2183';
const APP_ID='ec3efa1b';

class Recipe extends React.Component{
    state={
        activeRecipe: []
    }
    componentDidMount = async () => {
    const label = this.props.location.state.hit;
   // e.preventDefault();
    const req = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${label}`);
    //console.log(api_call);
    let res = await req.json();
    //console.log(res);
    this.setState({ activeRecipe: res.hits[0].recipe });
    console.log(this.state.activeRecipe);
    }


    render(){
        const hit = this.state.activeRecipe;
        return(
            
                <div className='container'>
                    { this.state.activeRecipe.length !== 0 &&
                    <div className='active-recipe'>
                        <img className='active-recipe__img' src={hit.image} alt={hit.label}/>
                        <h3 className='active-recipe__title'>{ hit.label }</h3>
                        <h4 className='active-recipe__publisher'>
                            Publisher: <span>{ hit.source }</span>
                        </h4>
                        <p className='active-recipe__website'>
                            Website: <span><a href={hit.url}>{ hit.url }</a></span>
                        </p>
                        <button className='active-recipe__button'>
                          <Link to='/'>Go back</Link>
                        </button>
                    </div>


                    }
                </div>
            
        );
    }
}

export default Recipe
