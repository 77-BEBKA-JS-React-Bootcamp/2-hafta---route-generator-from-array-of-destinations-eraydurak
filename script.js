let tickets  =
[
 { from:'JPN',to:'PHL'},
 { from:'BRA',to:'UAE'},
 { from:'USA',to:'BRA'},
 { from:'UAE',to:'JPN'},
 { from:'PHL',to:'TUR'},
]

function siralama(tickets){
return tickets.reduce(function(previousValue, currentValue){

    previousValue.from[currentValue['from']] = currentValue;
    previousValue.to[currentValue['to']] = currentValue;
    if( !previousValue.from[currentValue['to']] )  previousValue.from[currentValue['to']]= false;
    if(!previousValue.to[currentValue['from']])  previousValue.to[currentValue['from']]= false;

    return previousValue;

},{to:{},from:{}} );


}

function getStart(countries){
    for(var i  in countries)
    if( !countries[i] )return i;
}


function print(start,countries){


let sorted = [];
    while(start){
        let country = countries[start];
        sorted.push(country)
        start = country['to'];
    }
return sorted;
}

var sorted = siralama(tickets);
console.log(print(getStart(sorted.to),sorted.from));