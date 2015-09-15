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
