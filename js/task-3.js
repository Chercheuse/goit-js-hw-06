function getElementWidth(content, padding, border) {
  return (
    Number.parseInt(content) +
    Number.parseInt(padding) * 2 +
    Number.parseFloat(border) * 2
  );
}

console.log(Number.parseInt(getElementWidth("50px", "8px", "4px"))); // 74
console.log(Number.parseInt(getElementWidth("60px", "12px", "8.5px"))); // 101
console.log(Number.parseInt(getElementWidth("200px", "0px", "0px"))); // 200
