describe('Plane', function(){
  var airport = airport;
  var plane = plane;
  
  beforeEach(function(){
   airport = jasmine.createSpyObj('airport',['grounded']);
   plane = new Plane();
  });

  describe('plane status', function(){
    it ('plane before takeoff', function(){
      expect(plane.status).toBe (null)
    });
  });

  it('plane takeoff' ,function(){
    plane.grounded();
    expect(plane.status).toEqual ("BA at Heathrow")
  });

  describe('', function(){
    it('plane status to be in the air', function(){
      plane.grounded();
      plane.flying();
      expect(plane.status).toBe ('Flying')
    });
  });

});