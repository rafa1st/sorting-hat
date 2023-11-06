  const sort = parseInt(Math.random() * 4);
  console.log(`numero sorteado ${sort}`);
  
  const sorteados = []
  sorteados.push(sort)

  if (sort === 0) {
    console.log("grifinoria");
  } else if (sort === 1) {
    console.log("sonserina");
  } else if (sort === 2) {
    console.log("corvinal");
  } else {
    console.log("lufa-lufa");
  }

console.log(sorteados)