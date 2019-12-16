async function sayHi() {
  const haha = await Promise.resolve("async haha01")
  console.log(`haha:`,haha)
}
sayHi()