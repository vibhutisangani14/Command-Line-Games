const args = process.argv.slice(2);
const Player1 = args[0];

const value = ["Rock", "Paper", "Scissors"];

if (args.length > 1) {
  console.log("Please enter only One value");
  return;
} else if (
  Player1 !== "Rock" &&
  Player1 !== "Paper" &&
  Player1 !== "Scissors"
) {
  console.log("Please write Any option from Rock Paper or Scissors");
  return;
}
console.log(`You chose ${Player1}`);

const randomInput = Math.floor(Math.random() * value.length);
const Player2 = value[randomInput];
console.log(`Player2 chose ${Player2}`);

if (
  (Player1 === "Rock" && Player2 === "Scissors") ||
  (Player1 === "Scissors" && Player2 === "Paper") ||
  (Player1 === "Paper" && Player2 === "Rock")
) {
  console.log("............You Won the game!............");
  return;
} else if (
  (Player2 === "Rock" && Player1 === "Scissors") ||
  (Player2 === "Scissors" && Player1 === "Paper") ||
  (Player2 === "Paper" && Player1 === "Rock")
) {
  console.log("............You Lost the game!............");
} else if (Player1 === Player2) {
  console.log("............it’s a draw^..^!.............");
}
