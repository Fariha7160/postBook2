function timeDifference(date_time){
    const now = new Date();
    const past = new Date(date_time);
    // console.log(now-past);
    let timediff = Math.floor((now-past)/1000);
    // console.log(timediff);

    const days = Math.floor(timediff/(60*60*24));

    timediff = timediff - days * 24 * 60 * 60;

    const hours = Math.floor(timediff/(60*60));

    timediff = timediff - hours * 60 * 60;

    const minutes = Math.floor(timediff/(60));
    const seconds = timediff - minutes * 60;

    let result ="";

    if(days > 0 ){
        result = result + `${days} days`;
    }
    else if(hours > 0){ 
        result = result + `${hours} hours`;
    }
    else if(minutes > 0){ 
        result = result + `${minutes} minutes`;
    }
    else{
        result = result + `${seconds} seconds`;
    }
    console.log(result);
    return result;
}

timeDifference();
