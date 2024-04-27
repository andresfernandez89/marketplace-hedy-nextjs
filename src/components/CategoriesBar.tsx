import CategoryButton from "./CategoryButton";

interface CategoriesBarProps {
  changeCategory: (category: string) => void;
  category: string;
}

const CategoriesBar: React.FC<CategoriesBarProps> = ({
  changeCategory,
  category,
}) => {
  return (
    <div className="categories-bar bg-blue-950">
      <CategoryButton
        onClick={() => changeCategory("all")}
        isFocused={category === "all"}
      >
        All
      </CategoryButton>
      <CategoryButton
        onClick={() => changeCategory("electronics")}
        isFocused={category === "electronics"}
      >
        Electronics
      </CategoryButton>
      <CategoryButton
        onClick={() => changeCategory("jewelery")}
        isFocused={category === "jewelery"}
      >
        Jewelery
      </CategoryButton>
      <CategoryButton
        onClick={() => changeCategory("men's%20clothing")}
        isFocused={category === "men's%20clothing"}
      >
        Men&apos;s Clothing
      </CategoryButton>
      <CategoryButton
        onClick={() => changeCategory("women's%20clothing")}
        isFocused={category === "women's%20clothing"}
      >
        Women&apos;s Clothing
      </CategoryButton>
    </div>
  );
};

export default CategoriesBar;
