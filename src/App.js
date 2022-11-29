import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log('click!');
  };

  return (
    <div>
      <div>
        <Button secondary outline rounded className="mb-5" onClick={handleClick} >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Sell that
        </Button>
      </div>
    </div>
  );
}

export default App;
