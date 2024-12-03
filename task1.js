import fs from "fs";

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }
  console.log("Catalog was successfully created ");
});

setTimeout(() => {
  fs.rmdir("myFolder", (err) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log("Catalog was successfully deleted ");
  });
}, 4000);
