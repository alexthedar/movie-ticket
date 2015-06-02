describe('Ticket', function(){
  it("create a movie ticket with the given specifications", function(){
    var testTicket = new Ticket("Groove", 1200, true)
    expect(testTicket.movieName).to.equal("Groove")
    expect(testTicket.movieTime).to.equal(1200)
    expect(testTicket.senior).to.equal(true)
  });

  it("will determine the price of a ticket", function(){
    var testTicket = new Ticket("Groove", 1200, true)
    expect(testTicket.price(false, false, false)).to.equal(12);
    expect(testTicket.price(true, false, false)).to.equal(17);
    expect(testTicket.price(false, true, false)).to.equal(8);
    expect(testTicket.price(false, false, true)).to.equal(10);
  });
});
