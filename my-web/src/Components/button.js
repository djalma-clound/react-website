import React from "react";

function MyButton() {
  const handleClick = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=SqcY0GlETPk&t=1435s"; // Replace with your desired URL
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default MyButton;
