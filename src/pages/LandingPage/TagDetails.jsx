import { useEffect, useState } from "react";
import RecipeDetails from "./RecipeDetails";
import IconChevronBack from "../../icons/IconChevronBack";
import TopNav from "../../components/TopNav";

function TagDetails({ tag, onBack }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/tag/${tag}`
        );
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data.recipes); // Assuming the response contains a 'recipes' array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [tag]);

  if (selectedRecipe) {
    return (
      <RecipeDetails
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }

  return (
    <div>
      <TopNav />
      <div>
        <div className="flex items-center mt-3 ms-3">
          <button class="btn me-3" onClick={onBack}>
            <IconChevronBack />
          </button>

          <div>
            <h1 className="text-lg md:text-2xl font-bold">
              Handpicked <span className="text-accent">{tag} </span> recipes
              <span className="hidden md:inline"> just for you!</span>
            </h1>
            <div className="text-gray-500 text-sm md:text-base">
              Click for the full recipe!
            </div>
          </div>
        </div>

        {loading ? (
          <p className="ms-3">Loading recipes...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="flex flex-wrap gap-12 justify-center">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl w-72"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <figure className="px-10 pt-10">
                  <img
                    src={recipe.image}
                    alt="Shoes"
                    className="rounded-xl max-w-48"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{recipe.name}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TagDetails;
