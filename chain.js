class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:100,


        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
       // line (this.chain.bodyA.position.y,this.chain.bodyA.position.y,this.chain.bodyB,position.x,this.chain.bodyB.position.y)
    }
}