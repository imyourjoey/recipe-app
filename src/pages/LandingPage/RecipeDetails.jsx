import TopNav from "../../components/TopNav";
import IconChevronBack from "../../icons/IconChevronBack";

function RecipeDetails({ recipe, onBack }) {
  return (
    <div>
      <TopNav />
      <button className="btn ms-3 mt-4" onClick={onBack}>
        <IconChevronBack />
      </button>

      <div className="default-padding flex justify-center">
        <div className="card md:card-side bg-base-100 shadow-xl w-fit">
          <figure>
            <img src={recipe.image} alt="Movie" className="max-h-[450px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.name}</h2>

            <div className="flex flex-wrap gap-5 md:gap-10 justify-start">
              <div>
                <div>Info</div>
                <div className="text-xs">
                  <div>Difficulty: {recipe.difficulty}</div>
                  <div>
                    Calories per serving: {recipe.caloriesPerServing} kcal
                  </div>
                  <div>Cooking Time: {recipe.cookTimeMinutes} mins</div>
                  <div>Preparation Time: {recipe.prepTimeMinutes} mins</div>
                </div>
              </div>
              <div>
                <div>Ingredients</div>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-xs">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3">
              <div>Instructions</div>
              <ul>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-xs">
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
