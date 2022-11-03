import { Component } from "react";

//CSS
import "./card.styles.css"

class Card extends Component
{
    render ()
    {
        const {name, email, id} = this.props.monster
        return(
            <div>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt= {`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>           
             </div>
        )
    }
}
export default Card