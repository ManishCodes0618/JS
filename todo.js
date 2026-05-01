let list = [];
let order = "";
while (order != "quit") {
  order = prompt("What would you like to do?");
  if (order == "new") {
    let item = prompt("Enter new to-do");
    list.push(item);
    console.log(`${item} added to the list`);
  } else if (order == "list") {
    console.log("**********");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}: ${list[i]}`);
    }
  } else if (order == "delete") {
    let index = parseInt(prompt("Enter index of item to delete"));
    if (index >= 0 && index < list.length) {
      let deleted = list.splice(index, 1);
      console.log(`${deleted[0]} deleted from the list`);
    }
  } else if (order == "quit") {
    console.log("You entered quit. GoodBye!!");
  }
}
