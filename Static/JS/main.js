function calculateBirthDay(day,month,year){
    let dd=day
    let mm=month
    let yy=year
    let temp1=year.split("");
    let temp2=temp1.slice("");
    let yy=parseInt("".join(((temp1.split("")).slice(0,2))));
    let cc=parseInt("".join(((temp2.split("")).slice(0,2))));
    return ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
};
console.log("return"+"is your birthday. Select your gender to get your Akan name");