export const pastOrFutureDate = (date,time)=>{
    const dateString = date.substring(0,date.indexOf("T")) + 'T' + time + ':00.000Z';
    const passedDate = new Date(dateString);
    const currentDate = new Date();
    if((passedDate - currentDate)>19810416){
        return "UPCOMING";
    }
    else{
        return "PAST";
    }
}