let videogiochi = {

  game:[

    {
      title: 'Sinking City',
      platform: 'PS4',
      fps: '60fps',
      isFinished: false
    },

    {
      title: 'Devil May Cry',
      platform: 'PS5',
      fps: '60fps',
      isFinished: true
    },

    {
      title: 'FIFA 22',
      platform: 'PS5',
      fps: '120fps',
      isFinished: true
    },

    {
      title: 'God of War: Ragnarok',
      platform: 'PS5',
      fps: '60fps',
      isFinished: false
    },

    {
      title: 'Devious City',
      platform: 'PS4',
      fps: '30fps',
      isFinished: false
    }
  ],

  searchGame: function(nome){
    for (i=0; i<this.game.length;i++){
      if (nome === this.game[i].title){
        return this.game[i]
      }
    }
    return 'Gioco non trovato'
  },

  nonCompleted: function (){

    let count = 0
    for (i=0; i<this.game.length;i++){
      if (this.game[i].isFinished === false){
        console.log(this.game[i].title)
      }
    }
   
  },

  completed: function(){
    let arr = []
    for (i=0; i<this.game.length;i++){
      if (this.game[i].isFinished === true){
        arr.push(this.game[i].title)
      }
    }
    return `I giochi completati sono ${arr.join(', ')}`
  },

  searchPlat: function(){
    for (i=0; i<this.game.length;i++){
      if (this.game[i].platform === 'PS4'){
        console.log(this.game[i].title)
      }
    }
  }
}

console.log(videogiochi.searchGame('Devious City'))

function stampagiochi(oggetto){
  for (i=0; i<oggetto.game.length;i++){
    console.log(oggetto.game[i])
  }
}

stampagiochi(videogiochi);

function contagiochi(oggetto){
  let count = 0
  for (i=0; i<oggetto.game.length;i++){
    count++;
  }
  return count;
}

console.log(contagiochi(videogiochi))


function aggiungiGioco(nome, console, fps){

  let newGame = {
    title: nome,
    platform: console,
    fps: fps,
    isFinished: false
  }

  for (i=0; i<videogiochi.game.length;i++){
    if (nome === videogiochi.game[i].title){
      console.log('Gioco già presente')
      return;
    }
  }
  videogiochi.game.push(newGame)

}

aggiungiGioco('Lol', 'PS5', '30FPS')
console.log(videogiochi.game)

function sixFps(oggetto){
  for (i=0; i<oggetto.game.length;i++){
    if (oggetto.game[i].fps === '60fps'){
      console.log(oggetto.game[i].title)
    }
  }
}

function ordina(oggetto){
  let okk = []
  for (i=0; i<oggetto.game.length;i++){
    okk.push(oggetto.game[i].title)
  }
  okk.sort();
  okk.join(', ');
  return okk;
  
}

function removeGame(nome){
  for (i=0; i<videogiochi.game.length;i++){
    if (nome === videogiochi.game[i].title){
      videogiochi.game.splice([i],1)
    }
  }
}

function raggruppa (oggetto){

let object = {
  PS4: [],
  PS5: []
}

for (i=0; i<videogiochi.game.length;i++){
  if (videogiochi.game[i].platform === 'PS4'){
    object.PS4.push(videogiochi.game[i])
  }else if (videogiochi.game[i].platform === 'PS5'){
    object.PS5.push(videogiochi.game[i])
  }
}

return object;
}



sixFps(videogiochi);
console.log('-')
videogiochi.nonCompleted();
console.log('-')
videogiochi.searchPlat();
console.log('-')
console.log(videogiochi.completed())
console.log(ordina(videogiochi))
removeGame('Lol')
console.log(videogiochi.game)
console.log(raggruppa(videogiochi))
