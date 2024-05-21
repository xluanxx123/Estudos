let log = new Log(document.querySelector('.log'));
let char = new Mago('Luanzito');
let monster = new MonstroGrande();

const stage = new Campo(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
    );
    

stage.start();