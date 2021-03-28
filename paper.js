class Paper{
	constructor(x,y,r)
	{
        var c_options = {
             isStatic:true,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, c_options)
        
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
            if(keyCode===UP_ARROW) {
                Matter.Body.applyForce(this.body,rubberpos, {x:1,y:-1.28})
                Matter.Body.setStatic(this.body,false)
            }
            if(rubberpos.y<490){
                Matter.Body.applyForce(this.body,rubberpos, {x:0,y:1})
            }
            if(rubberpos.y>495 && rubberpos.x>1240){
                Matter.Body.setStatic(this.body,true)
                this.body.visible=false
            }
        	console.log("x",Math.round(rubberpos.x))
            console.log("y",Math.round(rubberpos.y))
			translate(rubberpos.x, rubberpos.y);
            imageMode(CENTER)
			image(this.image,0,0,this.r)
			
	}
    
}
