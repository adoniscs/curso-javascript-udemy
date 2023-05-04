for (let i = 0; i <= 10; i++) {
  let nome = "João";
  console.log(nome);

  if (i == 3) {
    nome = "José";
    console.log(nome);
  }

  if (i == 5) {
    nome = "Moises";
    console.log(`O nome é ${nome}. Pode parar o loop.`);
    break;
  }

  console.log(i);
}
