function Ticket(name, movieTime, age) {
  this.movieName = name;
  this.movieTime = movieTime;
  this.age = age;
  this.price = this.ticketPrice();
}

Ticket.prototype.ticketPrice = function() {

  var cost = 0;
  if (this.age < 18) {
    cost = 6;
  } else if (this.age >=18 && this.age < 65) {
    cost = 8;
  } else {
    cost = 4;
  }

  if (this.movieTime >= 18) {
    cost += 5;
  }

  return cost;
}


$(document).ready(function() {

  $("#add-ticket").click(function() {
    $("#new-ticket").append('<hr>' +
                            '<div class="form-group">' +
                              '<label for="movie-names">Select a movie:</label>' +
                                '<select class="form-control" id="movie-name">' +
                                  '<option>Star Wars: The Force Awakens</option>' +
                                  '<option>The Martian</option>' +
                                  '<option>Mad Max: Fury Road</option>' +
                                  '<option>Attack on Titan: Part 1</option>' +
                                  '<option>Macbeth</option>' +
                                '</select>' +
                              '</div>' +

                              '<div class="form-group">' +
                                '<label for="movie-times">Select a movie:</label>' +
                                '<select class="form-control" id="movie-time">' +
                                  '<option value="12">12:00</option>' +
                                  '<option value="14.5">2:30</option>' +
                                  '<option value="17">5:00</option>' +
                                  '<option value="19.5">7:30</option>' +
                                  '<option value="22">10:00</option>' +
                                  '<option value=".5">12:30</option>' +
                                '</select>' +
                              '</div>' +

                              '<div class="form-group">' +
                                '<label for="age">How old are you?</label>' +
                                '<div class="row">' +
                                  '<div class="col-xs-2">' +
                                    '<input type="number" max="130" min="0" name="age" class="form-control">' +
                                  '</div>' +
                                '</div>' +
                              '</div>');
  });

  $("form#new-movie").submit(function(event) {
    event.preventDefault();
    $('#new-ticket').each(function(){
      var movieName = $('input#movie-name').val();
      var movieTime = parseInt($('input#movie-time').val());
      var age = parseInt($('input#age').val());

      var newTicket = new Ticket(movieName, movieTime, age);
    });

  });
});
