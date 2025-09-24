import getRecipeById from "../data";
import {useParams} from 'react-router-dom'

const Recipe =()=>{
  let {id}=useParams()
  const data = getRecipeById(id)

  return (
  <div>
    <h1>{data.title}</h1>
    <img src={data.image} alt="recipePhoto" />
    <ol>{data.ingredients.map((item)=>(
    <li>
      {item.quantity} {item.name}
      </li>))}
    </ol>
    <div>{data.instructions}</div>
  </div>
  )

}

export default Recipe;