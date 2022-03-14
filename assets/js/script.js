// The current day is displayed at the top of the calendar
var now = moment().format("dddd, MMMM Do");
$( "#currentDay" ).html(now);

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
$( ".save-btn" ).on("click", function() {
    // retrieve textarea user input & the current time 
    var userText = $( ".description" ).val();
    var currentHour = $( ".description" ).attr("id");
    
    // send to localStorage 
    localStorage.setItem(currentHour, userText);

});

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
var timeColor = function () {
    // get the current time of day in military time
    var now = moment().hour();
    // loop over the time slots and add/remove color classes to update
    $( ".description" ).each(function () {
        var blockCurrentTime = parseInt($(this).attr("id").split("h")[0]);
        
        if (blockCurrentTime < now) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockCurrentTime === now) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } 
    })
}


// WHEN I refresh the page
// THEN the saved events persist
$(".description #09h").text(localStorage.getItem("09h"));

timeColor();
