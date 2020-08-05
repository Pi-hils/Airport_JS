
describe('Airport', function(){
 
  var airport = airport;
  var plane = plane;
  beforeEach(function(){
   airport = new Airport();
   plane = jasmine.createSpyObj('plane',['land', 'takeoff']);
  });

  describe('airport receives planes', function(){
    it('airport has no planes',function(){
      expect(airport.planes).toEqual([]);
    });
  });

  it('landed one plane', function(){
    airport.land(plane)
    expect(airport.planes).toContain(plane);
  });

  describe('plane off', function(){
    it('want plane to takeoff from airport', function(){
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).toEqual ([])
    });
  });

  

});