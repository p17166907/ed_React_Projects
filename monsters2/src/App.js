import { Component } from "react"
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component.jsx";



//CSS
import "./App.css"

class App extends Component
{
  constructor()
  {
    super();
    this.state ={
      monsters: [],
      searchField: ""
    }
    // console.log("1 constructor()");
  }

  componentDidMount()
  {
    //Get list/array of user objects in JSON format
    fetch("https://jsonplaceholder.typicode.com/users").then( (response) => response.json() )
    //set the list/array of users in the state monsters: [],
    .then( (users) => this.setState( () => {return {monsters: users}}) )   
    // console.log("3  componentDidMount()");

  }

  onSearchChange = (event) =>
  {
    // get keystroke values from user input as lowercase and set the data in the state searchField
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState( () => {return {searchField: searchField}})
  }

  render()
  {
    // console.log("2 Render Function");
    //De-structuring
    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    console.log(monsters);
    console.log(searchField);
    // The filter() method Returns the elements of an array that meet the condition specified in a callback function.
		// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
		// so from the filetered monster elements - it will show any monster names that match what is in the search field string
		const filteredMonsters = monsters.filter( (monster) => {return monster.name.toLocaleLowerCase().includes(searchField)} ) 
    console.log("filteredMonsters",filteredMonsters);


    return (
			<div className="App">
				<h1 className= "app-title">Monsters Rolodex</h1>
				{/* we can pass things into a component */}
				{/* the onSearchChange function passed into SearchBox*/}
				<SearchBox className = {"monsters-search-box"} placeholder = {"search monsters"} onChangeHandler = {onSearchChange} /> 
				{/* we can pass things into a component */}
        <CardList monsters = {filteredMonsters}/>
			</div>
		);
  }
}

export default App