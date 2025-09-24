import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import getRecipeById from "../data";

const Home =()=>{
  return (
    <Carousel>
        <div>
            <img src={getRecipeById(1).image}  alt="first-recipe"/>
            <p className="legend">{getRecipeById(1).title}</p>
        </div>
        <div>
            <img src= {getRecipeById(2).image} alt="second-recipe"/>
            <p className="legend">{getRecipeById(2).title}</p>
        </div>
        <div>
            <img src= {getRecipeById(3).image} alt="third-recipe"/>
            <p className="legend">{getRecipeById(3).title}</p>
        </div>
    </Carousel>
);
}

export default Home;