describe('Ticket', function(){
  it("create a movie ticket with the given specifications", function(){
    var testTicket = new Ticket("Groove", 1200, true)
    expect(testTicket.movieName).to.equal("Groove")
    expect(testTicket.movieTime).to.equal(1200)
    expect(testTicket.senior).to.equal(true)
  });
});
