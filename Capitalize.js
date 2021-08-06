const capitalize = (name)=>{
    let string = []
    let titulo = name.toLowerCase().split(' ');

    for(let i=0; i<string.length; i++){
        titulo[i].includes('.') && titulo[i].length <3 ? string.push(titutlo[i]) 
        : string.push(titulo[i][0].toUpperCase() + titulo[i].slice(1));
    }
    return string.join(' ');
}

module.exports = capitalize;