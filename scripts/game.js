ECS.Game = function () {

    let entity;

    for (let i = 0; i < 10; i++) {
        entity = new ECS.Entity();

        entity.addComponent(new ECS.Components.Appearance());
        entity.addComponent(new ECS.Components.Position());

        ECS.entities[entity.id] = entity;
    }

    let systems = [ECS.systems.render];


    function gameLoop() {
        for (let i = 0; i < systems.length; i++) {
            systems[i](ECS.entities);
        }

        requestAnimationFrame(gameLoop);
    }

    console.log('Game loop starting.');
    requestAnimationFrame(gameLoop);

}

ECS.game = new ECS.Game();
