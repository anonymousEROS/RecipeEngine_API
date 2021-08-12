import { Link } from 'react-router-dom'

const Recipes = (props) => {
    return (
        <div className='container'>
         <div className='row'>
         { props.hits.map((hit) => {
        return (
         <div key={hit.recipe.calories} className='col-md-4' style={{ marginBottom:'2rem'}}>
             <div className='recipes__box'>
                 <img 
                    className='recipe__box-img'
                    src ={hit.recipe.image}
                    alt={hit.recipe.label}/>
                    <div className='recipe__text'>
                        <h5 className='recipe__label'>{ hit.recipe.label.length < 20 ? `${hit.recipe.label}`
                        : `${hit.recipe.label.substring(0, 25)}...` }</h5>
                        <p className='recipe__sublabel'>Publisher: <span>
                        {hit.recipe.source}    
                        </span></p>
                    </div>
                    <button className='recipe_buttons'>
                        <Link to={{ 
                            pathname: `hit/${hit.recipe.label}`,
                            state: {hit: hit.recipe.label}
                        }}>View Recipe</Link>
                    </button>
             </div>
         </div>
        )
      } )}  
         </div>
        </div>
    )
}

export default Recipes


//<div key={hit.recipe.calories}>
  // <img  src={hit.recipe.image} alt={hit.recipe.label}/>
  // <p>{ hit.recipe.label }</p>
 //</div>
 //