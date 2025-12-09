const fs = require("node:fs");
const path = require("node:path");

function getRandomDog() {
  const folder = path.join(__dirname, "animals");

  try {
    const files = fs.readdirSync(folder).filter(f => f.endsWith(".txt"));

    if (files.length === 0) {
      return "No dog ASCII files found!";
    }

    const random = files[Math.floor(Math.random() * files.length)];

    const content = fs.readFileSync(path.join(folder, random), "utf8");

    return content;
  } catch (err) {
    return "Error reading dog files: " + err.message;
  }
}

module.exports = function showRandomDog() {
  const dog = getRandomDog();
  console.log(dog);
};
