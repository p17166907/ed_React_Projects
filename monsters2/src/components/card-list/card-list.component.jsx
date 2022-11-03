import { Component } from "react";
import Card from "../card/card.component.jsx"

//CSS
import "./card-list.styles.css"

class CardList extends Component
{
    render()
    {
        const {monsters} = this.props
        return(
            <div>
                {monsters.map( (monster) => 
                {
                    return <Card monster={monster}/>
                })}
            </div>
        )
     
    }
}

export default CardList