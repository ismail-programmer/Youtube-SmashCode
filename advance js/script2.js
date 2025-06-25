// async / await

function delayedGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Greetings after a wait");
    }, 4500);
  });
}

async function showGreeting() {
  console.log("About to get the greetings ......");
  const message = await delayedGreeting();
  console.log("Greetings recived:", message);
  console.log("All done");
}

showGreeting();
