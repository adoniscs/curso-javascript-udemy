for (let i = 10; i > 0; i--) {
  if (i % 2 == 0) {
    console.log(i + " dentro do continue");
    continue;
  }

  console.log(i);
}
