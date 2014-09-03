var bt = {
		
	canvas:false,
	canvasX:false,
	
	intervalTime:20,
	intervalID:-1,
	
	wavexs:[],
	tempPoint: false,
	
	pageW:0,
	pageH:0,
	
	help:true,
	
	
	
	
	init:function()
	{
		this.canvas = jQuery('#drawingArea').eq(0);
		
		this.pageW = jQuery(window).width();
		this.pageH = jQuery(window).height();
		
		this.canvas.get(0).width = this.pageW;
		this.canvas.get(0).height = this.pageH;
		
		this.canvasX = this.canvas.get(0).getContext("2d");
		
		this.canvas.click(bt.canvasClick);
		
		jQuery("div#pp").click(bt.pp);
		
		this.intervalID = setInterval(this.loop, this.intervalTime);
	},
	
	
	
	
	canvasClick: function(e)
	{
		if(bt.tempPoint)
		{
			if(bt.help)
			{
				bt.help = false;
				jQuery("div#help").remove();
			}
			
			bt.wavexs.push(new Wavex(
					bt.tempPoint,
					new Point(e.pageX, e.pageY),
					bt.canvasX
			));
			
			bt.tempPoint = false;
		}
		else
		{
			bt.tempPoint = new Point(e.pageX, e.pageY);
		}
	},
	
	
	
	
	loop: function()
	{
		var ctx = bt.canvasX;
		
		ctx.fillStyle = "rgba(255,255,255,0.1)";
		ctx.fillRect(0,0,bt.pageW, bt.pageH);
		
		
		ctx.beginPath();
		ctx.lineWidth = "1";
		
		for(var i=0; i<bt.wavexs.length; ++i)
			bt.wavexs[i].draw();
		
		ctx.stroke();
	},
	
	
	
	pp: function()
	{
		if(bt.intervalID == -1)
		{
			bt.intervalID = setInterval(bt.loop, bt.intervalTime);
			jQuery(this).html('pasue');
		}
		else
		{
			clearInterval(bt.intervalID);
			bt.intervalID = -1;
			jQuery(this).html('play');
		}
	}
	
};//eo bt{}


jQuery(document).ready(function(){
	bt.init();
});