
const Card = (props) => {
	return(
  	<div style={{margin:'1em'}}>
      <img width="75" src={props.avatar_url}/>
      <div style={{display:'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight:'bold'}}>
          {props.name}
        </div>  
        <div>{props.company}</div>  
      </div>
    </div>
  );
};



const CardList = (props) => {
	return(
  	<div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component{
	render(){
  		return(
      	<form>
            <input type="text" placeholder="Github username" />
            <button type="submit">Add Card </button>
        </form> 
      );
  };
}

class App extends React.Component{

state = {
	cards: [
	{ name: "mojombo",
  avatar_url: "https://avatars3.githubusercontent.com/u/1?v=3",
  company: "Facebook"},
  { name:"defunkt",
  avatar_url: "https://avatars3.githubusercontent.com/u/2?v=3",
   company: "Facebook" },
    { name:"pjhyett",
  avatar_url: "https://avatars3.githubusercontent.com/u/3?v=3",
   company: "Facebook" },
]
};

	render(){
  	return(
    	<div>
        <Form/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  };
}

ReactDOM.render(<App />, mountNode);
