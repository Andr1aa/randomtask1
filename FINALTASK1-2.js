const grammyWinners = [
    ["2009", "Fearless", "Taylor Swift", 4],
    ["2015", "1989", "Taylor Swift", 7],
    ["2011", "The Suburbs", "Arcade Fire", 1],
    ["2017", "25", "Adele", 5],
    ["2021", "Folklore", "Taylor Swift", 2],
    ["2013", "Babel", "Mumford & Sons", 1],
  ];
  
  
  const filteredWinners = grammyWinners.filter((winner) => parseInt(winner[0]) > 2014);
  
  const arr = [1,2,3,4,5,6].map((element)=>element*2)

  const sortedWinners = filteredWinners.sort((a, b) => b[3] - a[3]);
  
  
  sortedWinners.forEach((winner) => {
    const [year, album, artist, grammysWon] = winner;
    console.log(`Year: ${year}, Album: ${album}, Artist: ${artist}, Awards: ${grammysWon}`);
  });
  

  
  //This Code Is For Arrays