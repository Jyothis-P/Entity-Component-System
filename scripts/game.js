ECS.Game = function () {
    let entity;
    let self = this;

    for (let i = 0; i < 20; i++) {

        entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Appearance());

        entity.addComponent(new ECS.Components.Position());
        ECS.entities[entity.id] = entity;

    }
    entity = new ECS.Entity();

    entity.addComponent(new ECS.Components.Appearance({
        color: {
            r: 0,
            g: 255,
            b: 0
        }
    }));

    entity.addComponent(new ECS.Components.Position({
        random: true
    }));
    ECS.entities[entity.id] = entity;

    let systems = [
        ECS.systems.gravity,
        ECS.systems.randomMovement,
        ECS.systems.render
    ];


    function gameLoop() {


        for (let i = 0; i < systems.length; i++) {
            systems[i](ECS.entities);
        }

        if (self._running)
            requestAnimationFrame(gameLoop);
    }
    this._running = true;

    console.log('Game loop starting.');
    requestAnimationFrame(gameLoop);

    this.endGame = function () {
        this._running = false;
        return this;
    }
}

ECS.game = new ECS.Game();
