const v = "abc";
function f(fun = (x) => v) {
  const v = "xyz";
  console.log(fun());
}
f();
