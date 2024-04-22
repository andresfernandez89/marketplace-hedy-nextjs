import CategoryButton from "./CategoryButton";

const CategoriesBar = () => {
  return (
    <div className="categories-bar">
      <CategoryButton>All</CategoryButton>
      <CategoryButton>Electronics</CategoryButton>
      <CategoryButton>Jewlery</CategoryButton>
      <CategoryButton>Men's Clothing</CategoryButton>
      <CategoryButton>Woman's Clothing</CategoryButton>
    </div>
  );
};

export default CategoriesBar;
