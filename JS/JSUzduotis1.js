function circle(radius)
{
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var r = new circle(15);
console.log('Area =', r.area(15).toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

