
let energy = 0;

function sleep(energy) {
    return new Promise((resolve) => {
        setTimeout(() => {
            energy = +1000;
            resolve(energy);
        }, 200);
    });
}

function wakeUp (energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            energy -= 200;
            if (energy <= 0){
                reject('i don`t have enough energy');
                return;
            }
            console.log('Hello world');
            resolve(energy)
        }, 150);
    });
}

function wash(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            energy -= 300;
            if (energy <= 0) {
                reject('i don`t have enough energy');
                return;
            }
            console.log('I am clean!');
            resolve(energy);

        }, 200);
    });
}

function eat(energy) {
    return new Promise((resolve) => {
        setTimeout(() => {
            energy += 101;
            console.log('just got extra energy')
            resolve(energy);
        }, 1000);
    });
}

function playFootball (energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            energy -= 600;
            if (energy <= 0) {
                reject('i don`t have enough energy');
                return;
            }
            console.log('I like to play football, it was nice game');
            resolve(energy);
        }, 400);
    });
}

function study(energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            energy -= 400;
            if (energy <=0) {
                reject('i don`t have enough energy');
                return;
            }
            console.log('i learned a lot of new information!');
            resolve(energy);

        }, 300);
    });
}

sleep(energy)
    .then(value => {
        console.log(value);
        return wakeUp(value);
    })
    .then(value => {
        console.log(value);
        return wash(value);
    })
    .then(value => {
        console.log(value);
        return eat(value);
    })
    .then(value => {
        console.log(value);
        return playFootball(value);
    })
    .then(value => {
        console.log(value);
        return study(value);
    })
    .catch(error => {
        console.log(`Oooooops, ${error}`);
    })

wakeUp(energy)
    .then(value => {
        console.log(value);
        return sleep(value);
    })
    .then(value => {
        console.log(value);
        return wakeUp(value);
    })
    .then(value => {
        console.log(value);
        return wash(value);
    })
    .then(value => {
        console.log(value);
        return eat(value);
    })
    .then(value => {
        console.log(value);
        return playFootball(value);
    })
    .then(value => {
        console.log(value);
        return study(value);
    })
    .catch(error => {
        console.log(`Oooooops, ${error}`);
    })