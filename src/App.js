import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>Click me!!</Button>
      </div>
      <div>
        <Button sanged outline>Buy now!</Button>
      </div>
      <div>
        <Button warning>See Deal</Button>
      </div>
      <div>
        <Button secondary outline>Hide Ads</Button>
      </div>
      <div>
        <Button secondary rounded>Sell that</Button>
      </div>
    </div>
  );
}

export default App;
