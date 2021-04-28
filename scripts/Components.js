ECS.Components.Appearance = function (params) {
    params = params || {};

    this.color = params.color;
    if (!this.color) {

        this.color = {
            r: 255,
            g: 0,
            b: 0
        }
    }
    this.size = params.size || (1 + (Math.random() * 30 | 0));

    this.name = 'appearance';
    return this;
}

ECS.Components.Position = function (params) {
    params = params || {};

    this.x = params.x || 20 + (Math.random() * (ECS.$canvas.width - 20) | 0);
    this.y = params.y || 20 + (Math.random() * (ECS.$canvas.height - 20) | 0);

    this.name = 'position';
    return this;
}