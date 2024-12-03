import fs from "fs";
fs.writeFile("info.txt", "Node.js is awesome!", "utf8", (err) => {
  if (err) {
    console.log("error when creating file: ", err);
    return;
  }
  console.log("File was successfully created");

  fs.readFile("info.txt", "utf8", (err, data) => {
    if (err) {
      console.log("error when creating file: ", err);
      return;
    }
    console.log(data);
  });
});