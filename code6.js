const Card = (props) => {
	return(
  	<div>
      <img src="http://placehold.it/75"/>
      <div className="info">
        <div>Name here ...</div>  
        <div>Company here ...</div>  
      </div>
    </div>
  );
};

ReactDOM.render(<Card />, mountNode);


//load the below style
#mountNode {
  color: #000;
}
.info {
  color: red;
}
