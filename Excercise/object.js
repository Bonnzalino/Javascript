const manga = {
    title: 'One Piece',
    author: 'Eichiro Oda',
    chapter: 1078,
    crew: {
        captain: 'Luffy',
        firstMate: 'Zoro',
        navigator: 'Nami',
        cook: 'Sanji',
        doctor: 'Chopper',
        gunner: 'Usopp',
        shipwright: 'Franky',
        helmsman: 'Jinbe',
        scholar: 'Robin',
        musician: 'Brook'
    },
    summary() {
        console.log(`The manga "${this.title}" was written by ${this.author}, and it has ${this.chapter} chapters.`);
      }
}
for (let prop in manga.crew) {
    console.log(`${prop}: ${manga.crew[prop]}`);
}
  
manga.summary();