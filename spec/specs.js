describe('Ticket', function() {
  it("initializes a ticket with given name, desired showTime, and age", function() {
    var testTicket = new Ticket("The Martian", 18, 21);
    expect(testTicket.movieName).to.equal("The Martian");
    expect(testTicket.movieTime).to.equal(18);
    expect(testTicket.age).to.equal(21);
  });

  it('calculate the price based on movie time and age', function() {
    var testTicket = new Ticket("The Martian", 18, 21);
    expect(testTicket.price).to.equal(13);
  });
});


// if age < 18
//   baseCost = 6
//
// else if age > 18 && age < 65
//   baseCost = 8
//
// else
//   baseCost = 4
//
// if time >= 18
//   baseCost += 5
