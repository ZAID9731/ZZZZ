
import './App.css';
// Demontration of Props in React JS
//Props
const Marks = (props) => {
 return (
 <>
 <h3>Name: {props.stName}</h3>
 <h3>Marks: {props.stMarks}</h3>
 </>
 )
}
//export default Marks;
//APP.js
;
function App() {
 const record = [
 {
 id: 1,
 name:"zaid",
 marks: 80
 }
 ]
 return (
 <div className="App">
 {/* rendering components */}
 <Marks stName={record[0].name} stMarks={record[0].marks}/>
 </div>
 );
}export default App;
