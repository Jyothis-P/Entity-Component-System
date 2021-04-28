# Entity-Component-System

Entity–component–system (ECS) is an architectural pattern that is mostly used in game development. Basically, building a game means keeping track of a lot of state data. So, instead of the classical Object oriented model, here we use the Entity-Component-System architecture to build a game.

Entities are the actual objects in the game. Here, each block is an entity. 

Each entity is composed of multiple Components. Actual data is stored within the components. For example, the AppearanceComponent will contain the color and size of the entity.

The logic of the game is carried out by systems. Systems interact with the entities and their components to carry out the different functionalities. For example, the rendering system will look at the Appearance and Position components of all the entities and render them on to the screen.

More to follow.
