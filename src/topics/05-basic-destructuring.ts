console.log('\n---- 05-basic-destructuring ----\n');

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  songName: string;
  songDetails: {};
}

interface SongDetails {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 180,
  songName: 'Mess',
  songDetails: {
    author: 'Ed Sheeran',
    year: 2015
  }
}

// Destructuring objects
// ---------------------

// Option 1:
const {audioVolume: vol, songDuration: duration, songName: name, songDetails} = audioPlayer;
const {author} = songDetails;


// Option 2: obteniendo directamente author
// const {audioVolume: vol, songDuration: duration, songName: name, songDetails: {author}} = audioPlayer;


// se dejó la opcion 1 para priorizar la legibilidad del código
// la opcion 2 es mas directa, pero mas dificil de entender para alguien que no conoce el código
console.table({vol, duration, name, author});


// Destructuring arrays
// ---------------------

const dbzCharacters = ['Goku', 'Vegeta', 'Gohan'];

// los primeros 2 elementos no interesan, por eso se saltan con comas
const [, , gohan, trunks = "not found"] = dbzCharacters;

// gohan se encuentra, trunks no se encuentra, por lo que se asigna el valor por defecto "not found"
console.log({gohan, trunks});