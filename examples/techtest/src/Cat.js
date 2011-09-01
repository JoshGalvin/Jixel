def('Cat', {
    extend: Jxl.Sprite,
    init: function(graphic, x, y) {
        Jxl.Sprite.prototype.init.call(this, {graphic:graphic, x:x, y:y, width:32, height:32});
        this.addAnimation('run', [72,73,74,73], .30);
        this.addAnimation('idle', [48,49,50,49], .50);
        this.play('idle');
        this.speed = -80;
        this.drag = new Jxl.Point({x:150,y:150});
    },
    delta: 0,
    update: function() {
        if (Jxl.keys.on('A')) {
             this.velocity.x = this.speed;
             this._flipped = true;
             this.play('run');
        } else if (Jxl.keys.on('D')) {
             this._flipped = false;
             this.play('run');
             this.velocity.x = -1*this.speed;
        } else {
             this.play('idle');
        }
        if(Jxl.keys.on(32) && this.delta > .5) {
            this.delta = 0;
            Jxl.audio.play('jump');
        }
        this.delta += Jxl.delta;
        Jxl.Sprite.prototype.update.call(this);
    }
});