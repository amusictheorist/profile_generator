const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames also welcome 🙂 ", (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);

  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`Thank you for your valuable feedback: ${activity}`);

    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`Thank you for your valuable feedback: ${music}`);

      rl.question("Which meal is your favorite? (dinner, brunch...) ", (meal) => {
        console.log(`Thank you for your valuable feedback: ${meal}`);

        rl.question("What's your favorite thing to eat for that meal? ", (food) => {
          console.log(`Thank you for your valuable feedback: ${food}`);

          rl.question("Which sport is your absolute favorite? ", (sport) => {
            console.log(`Thank you for your valuable feedback: ${sport}`);

            rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (superpower) => {
              console.log(`Thank you for your valuable feedback: ${superpower}`);
              
              const profile = `${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`;
              console.log(profile);

              rl.close();
            });
          });
        });
      });
    });
  });
});