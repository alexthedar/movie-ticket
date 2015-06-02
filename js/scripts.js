function Ticket(movieName, movieTime, senior) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.senior = senior;
}

Ticket.prototype.price = function(release, matinee, senior) {
  this.release = release;
  this.matinee = matinee;
  this.senior = senior;
  var basePrice = 12;

  if (release === true) {
    basePrice = basePrice + 5;
  } else if (matinee === true) {
    basePrice = basePrice - 4;
  } else if (senior === true) {
    basePrice = basePrice - 2;
  } else {}

  return basePrice;
}

$(document).ready(function(){

    $('input.timepicker').timepicker({
      timeFormat: 'h:mm p',
      interval: 30,
      minTime: '10:00 am',
      maxTime: '11:30 pm'
    });

    $('.carousel').carousel({
      interval: 2000
    })

    $("form#ticket").submit(function(event){
      event.preventDefault();

      var release = false
      var matinee = false
      var senior = false

      var inputMovie = parseInt($( "#movie" ).val());
      var inputTime = $("input#movieTime").val();
      var inputAge = parseInt($("#age").val());

      var newTicket = new Ticket(inputMovie, inputTime, inputAge);

      switch(inputMovie) {
        case 1: release = false;
        break;
        case 2: release = true;
        break;
        case 3: release = false;
        break;
      }
debugger;
      switch(inputAge) {
        case 1: senior = false;
        break;
        case 2: senior = true;
        break;
      }
      var amCheck = false

      if (inputTime.indexOf('AM')>-1) {
        amCheck = true;
      }

      var time = parseInt(inputTime)

      if (amCheck === true && time >= 10) {
        matinee = true;
      } else if ( amCheck === false && time <= 4) {
        matinee = true;
      } else {}

      var ticketPrice = newTicket.price(release, matinee, senior);
      $(".ticket-price").text(ticketPrice);

  });
});
