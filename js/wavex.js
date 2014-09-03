function Wavex(p1, p2, ctx)
{
//	this.p1 = (p1.x<p2.x)?p1:p2;
//	this.p2 = (p1.x<p2.x)?p2:p1;
	
	this.p1 = p1;
	this.p2 = p2;
	
	this.v = (Math.random()*5) +1;
	this.ctx = ctx;
	
	this.dx = this.p2.x-this.p1.x;
	this.dy = this.p2.y-this.p1.y;
	
	this.ya = (this.p1.y+this.p2.y)/2;
	
	this.mx = -500;
	this.Mx = bt.pageW + this.dx + 500;
	
	this.pos = this.Mx;
	
	this.rate = 0;
	
}//eoc

Wavex.prototype.draw = function()
{
	var ctx = this.ctx;
	
	
	
	if(this.Mx-this.pos<500 && this.rate<1)
	{
		this.rate+=0.01;
	}
	else if(this.pos<=0 && this.rate>0)
	{
		this.rate-=0.01;
	}
	
	ctx.moveTo(bt.pageW, this.ya);
	ctx.lineTo(this.pos, ((this.p2.y-this.ya)*this.rate)+this.ya);
	ctx.lineTo(this.pos-this.dx, ((this.p1.y-this.ya)*this.rate)+this.ya);
	ctx.lineTo(0, this.ya);
	
	this.pos-=this.v;
	
	if(this.pos<this.mx)
	{
		this.pos = this.Mx;
		this.rate=0;
	}
		
};//eof