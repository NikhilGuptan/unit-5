

function tex(value){
    if(value<250000){
        return "no tex"
    }else if(value>250000 || value<500000){
        return (value*(10/100))
    }else if(value>500000 || value<=1000000){
        return (value*(20/100))
    }else if(value>1000000){
        return (value*(30/100))
    }
}

module.exports = {tex}