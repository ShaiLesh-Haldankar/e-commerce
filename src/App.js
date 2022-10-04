import "./App.scss";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App" >
      <Homepage />
      
    </div>
  );
}

const List = () => {
  return (
    <div>
      <h1>Title One</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      {/* <input />
      <img /> */}
    </div>
  );
};

const ListTwo = () => {
  return (
    <div>
      <h1>Title Two</h1>
      <ul>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
      </ul>
    </div>
  );
};

const ListThree = () => {
  return (
    <div>
      <h1>Title Three</h1>
      <ul>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
    </div>
  );
};

const ListLayout = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </div>
  );
};
export default App;
