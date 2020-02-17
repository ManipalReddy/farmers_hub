import React from 'react';

document.addEventListener('keydown', function(event) {
  if(event.key === 'd') {
    document.body.style = '';
  } else if (event.key === 'l') {
    document.body.style = "color: white; background-color: #111111";
  }
});

function Home() {
  return(
    <div>
      <h1> Welcome to Farmer's Hub :) </h1>
      <text>
        This is the place where you can sell your crops on your own!
      </text>
    </div>
  );
}

export default Home