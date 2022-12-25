import { CategoryItem } from "../category-item/category-item.component"

export const Directory = ({listOfCategories}) => 
{
    return (
        <div className="directory-container">
            {listOfCategories.map((category) => (<CategoryItem key={category.id} category={category}/>))}
        </div>
    )
}