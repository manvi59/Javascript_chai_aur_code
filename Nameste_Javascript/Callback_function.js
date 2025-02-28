// Callback	Function passed as an argument and executed later.	setTimeout, event listeners, async operations.

// here love is a callback function
// ans is a high order function

const ans = (love) => {
  setTimeout(() => {
    love();
  }, 1000);
};

function love() {
  console.log("i love me");
}

ans(love); //i love me

// Eg --
