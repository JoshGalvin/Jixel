def('Jxl.State', {
    init: function(params) {
        _(this).extend({
            defaultGroup: new Jxl.Group()
        });
        _(this).extend(params);
    },
    add: function(object) {
        return this.defaultGroup.add(object);
    },
    remove: function(object) {
	    this.defaultGroup.remove(object);
    },
    preProcess: function() {
        Jxl.buffer.clearRect(0,0, Jxl.width, Jxl.height);
    },
    update: function() {
        this.defaultGroup.update();
    },
    collide: function() {
        Jxl.Util.collide(this.defaultGroup, this.defaultGroup);
    },
    render: function() {
        this.defaultGroup.render();
    },
    postProcess: function() {},
    destroy: function() {
        this.defaultGroup.destroy();
    }
});
