//Importing Hooks
import {useState, useEffect} from "react"

//CSS
import './App.css';

function App()
{
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("")
  const [filteredMonsters, setFilteredmMonsters] = useState("")




  //use effect to fetch the data, note the second argument is empty for the useEffect () e.g []
  useEffect( () =>
  {
    fetch("https://jsonplaceholder.typicode.com/users").then( (response) => response.json()).then( (users) => {setMonsters(users)})
  }, [])
  console.log("monsters",monsters);

  //we want to store whaterver the user types into the searchbox
  const onSearchChange = (event) => 
  {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  //we want to filter the monsters on screen in relation to what the user types into the search box that is saved in our searchFieldstring
  useEffect( () =>
  {
    const newFilteredMonsters = monsters.filter( (monster) => { return monsters.name.toLocaleLowerCase().includes(searchField)})
    //if it closely matches string in the search field then save the list of monsters name in new another state 
    setFilteredmMonsters(newFilteredMonsters)
    //depending if there is a change to monsters fetching or the string users entered save in the searchField
  }, [monsters, searchField])


  return(
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      {/* <SearchBox/> */}
    </div>
  )
}

export default App;
