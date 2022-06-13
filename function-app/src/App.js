//import logo from './logo.svg';
import './App.css';
import SearchBox from './components/search-box/searchbox.components';
//import CardList from './components/card-list/card-list.component';
import Card from './components/card/card.component';

const App=() =>{
  const monsters=[
    {
      "name":"siri"
    },
    {
      "name":"sam"

    },
    {
      "name":"pam"
    }
  ];

  
  const onSearchChange=()=>{
    console.log('value changed');
  };
  const displayName= monsters.map((names)=>{
    return names.name;
  })
  console.log(displayName);
  return (
    <div className="App">
      <h1>Monsters Rolodex Function App</h1>
      <SearchBox type='search' onChangeHandler={onSearchChange}/>
    <Card/>
    </div>
   
  );
}

export default App;
