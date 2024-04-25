import CategoryButton from "./CategoryButton";

interface CategoriesBarProps {
  changeCategory: (category: string) => void;
}

const CategoriesBar: React.FC<CategoriesBarProps> = ({ changeCategory }) => {
  return (
    <div className="categories-bar bg-blue-950">
      <CategoryButton onClick={() => changeCategory("all")}>All</CategoryButton>
      <CategoryButton onClick={() => changeCategory("electronics")}>
        Electronics
      </CategoryButton>
      <CategoryButton onClick={() => changeCategory("jewelery")}>
        Jewelery
      </CategoryButton>
      <CategoryButton onClick={() => changeCategory("men's%20clothing")}>
        Men's Clothing
      </CategoryButton>
      <CategoryButton onClick={() => changeCategory("women's%20clothing")}>
        Women's Clothing
      </CategoryButton>
    </div>
  );
};

export default CategoriesBar;
