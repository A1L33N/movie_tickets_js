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
