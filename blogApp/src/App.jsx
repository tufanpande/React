import Home from "./pages/home";
import Button from "./pages/Button";

function App() {
  const users = [
    { name: "tufan", age: 20 },
    { name: "dev", age: 12 },
    { name: "rahul", age: 30 },
  ]; //API call
  return (
    <>
      <Home data={users} />
      <Button />
    </>
  );
}

export default App;
