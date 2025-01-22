const grammyWinners = {
  "2009": { album: "Fearless", artist: "Taylor Swift", grammysWon: 4 },
  "2015": { album: "1989", artist: "Taylor Swift", grammysWon: 7 },
  "2011": { album: "The Suburbs", artist: "Arcade Fire", grammysWon: 1 },
  "2017": { album: "25", artist: "Adele", grammysWon: 5 },
  "2021": { album: "Folklore", artist: "Taylor Swift", grammysWon: 2 },
  "2013": { album: "Babel", artist: "Mumford & Sons", grammysWon: 1 },
};

const myInfo = Object.entries(grammyWinners);


const resArr = myInfo.filter((info) => parseInt(info[0]) > 2014);


resArr.sort((a, b) => b[1].grammysWon - a[1].grammysWon);


resArr.forEach((info) => {
  const [year, { album, artist, grammysWon }] = info;
  console.log(`Year: ${year}, Album: ${album}, Artist: ${artist}, Awards: ${grammysWon}`);
});


//This Code Is For Objects