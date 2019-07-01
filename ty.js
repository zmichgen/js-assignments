function Solver(num) {
  let arr = Array.from({
    length: num
  }, (item, index) => {
    return 2 * index + 1;
  });
  console.log(arr);

}

Solver(10);
