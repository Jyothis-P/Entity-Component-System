ECS.Game = function () {
    let entity;
    let self = this;

    for (let i = 0; i < 20; i++) {

        entity = new ECS.Entity();
        entity.addComponent(new ECS.Components.Appearance());

        let params = {};

        if (Math.random() > 0.5){
            console.log('Test');
            entity.addComponent(new ECS.Components.Mass());
        }

        entity.addComponent(new ECS.Components.Position(params));

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

    entity.addComponent(new ECS.Components.Position());
    entity.addComponent(new ECS.Components.PlayerControlled());
    entity.addComponent(new ECS.Components.RandomMovement());
    entity.addComponent(new ECS.Components.Mass());
    ECS.entities[entity.id] = entity;

    let systems = [
        ECS.systems.gravity,
        ECS.systems.randomMovement,
        ECS.systems.userInput,
        ECS.systems.render,
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
