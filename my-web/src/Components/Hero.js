import '../Components/hero.css';
import '../Components/button';
import MyButton from './button';

function Hero() {
  return (
    <div className="hero">
      <h1>We to react or we will stay at the same place !</h1>
      <p>Has been a long time that I don't code</p>
      <MyButton/>
    </div>
  );
}

export default Hero;
