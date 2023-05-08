import { CategoryItem } from "../category-item/category-item.component";

import "./directory.styles.scss";

export const Directory = ({ categories }) => {
  console.log("Categories passed into Directory Companent" + categories);
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
