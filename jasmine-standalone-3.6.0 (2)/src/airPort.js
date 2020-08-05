 class Airport{
  constructor(){
    this.planes = []
  } 
  land(plane){
    this.planes.push(plane);
    }

    takeoff(plane){
      this.planes.pop();
    }
 }