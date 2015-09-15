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
                            '<div class="added-ticket">' +
                              '<div class="form-group">' +
                                '<label for="movie-names">Select a movie:</label>' +
                                  '<select class="form-control" id="movie-name">' +
                                    '<option value="Star Wars: The Force Awakens">Star Wars: The Force Awakens</option>' +
                                    '<option value="The Martian">The Martian</option>' +
                                    '<option value="Mad Max: Fury Road">Mad Max: Fury Road</option>' +
                                    '<option value="Attack on Titan: Part 1">Attack on Titan: Part 1</option>' +
                                    '<option value="Macbeth">Macbeth</option>' +
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
                                      '<input type="number" id="age" max="130" min="0" class="form-control">' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>');
    });

  $("form#new-movie").submit(function(event) {
    event.preventDefault();
    var totalCost = 0;
    var tickets = []
    $('.added-ticket').each(function() {
      var movieName = $(this).find('select#movie-name').val();
      var movieTime = parseInt($(this).find('select#movie-time').val());
      var age = parseInt($(this).find('input#age').val());

      var newTicket = new Ticket(movieName, movieTime, age);
      debugger;
      tickets.push(newTicket);

      totalCost = totalCost + newTicket.price;
    });

    tickets.forEach(function(ticket) {
    $('#show-tickets').show();
      $("ul#tickets").append("<li><span class='ticket-list'>" + ticket.movieName + "</span></li>");
      $(".ticket-list").last().click(function() {
        $('.movie-name').text(ticket.movieName);
        $('.movie-time').text(ticket.movieTime);
        $('.age').text(ticket.age);
        $('.ticket-price').text(ticket.price);
        $('#show-info').toggle();
      });
    });


    $(".total-cost").text(totalCost);
  });
});
