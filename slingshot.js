class Slingshot{

constructor(bodyA, pointB){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:30,
        stiffness:0.05
    }

    this.pointB=pointB
    this.slingshot=Constraint.create(options)
    World.add(world,this.slingshot)
}
fly(){
    this.slingshot.bodyA=null
}
attach(bodyA){
    this.slingshot.bodyA=bodyA
}
display(){
    if (this.slingshot.bodyA){
    line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,this.pointB.y)
}
}
}
