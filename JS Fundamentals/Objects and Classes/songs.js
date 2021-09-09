function songs(arr) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name,
            this.time = time
        }

    }
    

    let songNums = arr.shift();
    let typeListFinal = arr.pop();
    let songs = [];
    for ( let i = 0 ; i < songNums ; i++ ) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if(typeListFinal == 'all') {
        songs.forEach(x => console.log(x.name));
    }else{
        let filtered = songs.filter(x => x.type === typeListFinal);
        filtered.forEach(x => console.log(x.name));
    }

    
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
);
