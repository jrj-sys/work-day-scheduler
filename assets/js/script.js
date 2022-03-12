// The current day is displayed at the top of the calendar
var today = function () {
    var now = moment().format("dddd, MMMM Do");
    $( "#currentDay" ).html(now);

}


    
    
    
    







// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

today();