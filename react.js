
const Button = (props) => {
  return(
    <div className="App">
        <div className="Child">
          <button className={props.class}>BUTTON {props.number}</button>
        </div>
     </div>
  );
}; 

const App = () => {
  return(
    <div className="App">
        <Button class="buttonOne" number="1"/>
        <Button class="buttonTwo" number="2"/>
        <Button class="buttonThree" number="3"/>
        <Button class= "buttonFour" number="4"/>
     </div>
  );
}; 
