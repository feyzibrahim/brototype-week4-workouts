function main() {
  let my_string = "HELLO";
  try {
    let my_stringRev = my_string.split("").reverse().join("");
    if (!isNaN(my_string)) {
      throw new Error("its Number");
    }
    console.log(`Your Reversed String is : ${my_stringRev}`);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(`Type of Your Input is : ${typeof my_string}`);
  }
}
main();
