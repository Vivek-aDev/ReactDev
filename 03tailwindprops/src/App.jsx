import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Vivekananda",
    age: 25,
    address: {
      city: "Bbsr",
      state: "Odisha",
      country: "India",
    },
  };

  let newArray = [1, 2, 3, 5, 8, 13];

  return (
    <>
      {/* <h1 className="text-6xl font-bold underline">Hello World from Vivek</h1> */}
      <Card userName="vivek" post="Software Development Engineer, India" />
      <Card userName="Jwt" myArray={newArray} />
      <Card myObj={myObj}/>
    </>
  );
}

export default App;
