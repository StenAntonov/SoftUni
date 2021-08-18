function Gramophone ( name , album, song) {
    let bandName = name.toString();
    let albumName = album.toString();
    let songName = song.toString();
    let songDuration = bandName.length * album.length * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`);
    
  
}
Gramophone('Black Sabbath', 'Paranoid', 'War Pigs')