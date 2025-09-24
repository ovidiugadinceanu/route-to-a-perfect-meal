import "./App.css";
import getRecipeById from "./data";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Recipe from "./components/Recipe";

function App() {
  console.log("Recipe with id 1");
  console.log(getRecipeById(1));
  console.log("Recipe with id 2");
  console.log(getRecipeById(2));
  console.log("Recipe with id 3");
  console.log(getRecipeById(3));
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Recipes</Link>
        <Link to="/recipe/1">Perfection Salad</Link>
        <Link to="/recipe/2">Hamburger Pie</Link>
        <Link to="/recipe/3">Cherry Pineapple Bologna</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
