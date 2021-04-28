ECS.systems.randomMovement = function (entities) {
    let dx, dy, currentEntity;
    const maxOffset = 10;

    for (let entityID in entities) {
        currentEntity = entities[entityID];

        if (currentEntity.components.position){
            if (currentEntity.components.position.random){

                dx = (Math.random() * maxOffset * 2 | 0) - maxOffset;
                dy = (Math.random() * maxOffset * 2 | 0) - maxOffset;

                currentEntity.components.position.x += dx;
                currentEntity.components.position.y += dy;
            }

        }
    }
}