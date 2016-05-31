/**
 * Created by timothy on 27/05/16.
 */

function P3 (hook) {
    this.D3 = d3.select("."+hook);
    this.width = 0;
    this.height = 0;
    this.backgroundColour = d3.rgb(0, 0, 0);
    this.fillColour = d3.rgb(0,0,0);
    this.shapes = {};
}

P3.prototype = {
    constructor: P3,
    resize:function (x,y)  {
        this.D3.attr("width", x).attr("height", y);
        this.width = x;
        this.height = y;    },
    background:function (r,g,b)  {
        this.backgroundColour = d3.rgb(r,g,b);
        this.D3.append("rect").attr("x",0).attr("y",0).attr("width", this.width).attr("height", this.height).attr("fill", this.backgroundColour);
    },
    fill : function(r,g,b) {
        this.fillColour = d3.rgb(r,g,b);
    },
    rect: function(w,h,x,y,mode) {
        if (mode == "centre") {
            px = (x) - w / 2;
            py = (y) - h / 2;
        } else {
            px = x;
            py = y;
        }
        rect = this.D3.append("rect").attr("x", px).attr("y", py).attr("width", w).attr("height", h).attr("fill", this.fill);
        var newPos = this.shapes.push(rect);
        return newPos;
    },
    mousemove: function(func) {
            this.D3.on('mousemove', function() {
                console.log(this.D3.node());
                this.mouseX = d3.mouse(this.D3.node())[0];
                this.mouseY = d3.mouse(this.D3.node())[1];
                func();
    }.bind(this))}
};


