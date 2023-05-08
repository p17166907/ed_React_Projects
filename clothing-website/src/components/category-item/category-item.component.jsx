import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  console.log("A category being passed into CategoryItem component" + category);
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
