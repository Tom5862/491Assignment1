var AM = new AssetManager();

function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// --------------------------------------------------------------------------------------

/* 
 * Slime Dungeon Level 1 (88x33) each number is a 32x32 pixel space
 * 0 = no block (should layer background image so these are not just a solid color)
 * 1-4 = alternating horizontal wall tiles, 5 = Vertical wall tile, 6 = Top Left L shaped corner, 7 = Top Right L shaped corner,
 * 8 = Bottom Left L shaped corner, 9 = Bottom Right L shaped corner, 10 = North T shaped wall, 11 = East T shaped wall,
 * 12 = West T shaped wall, 13 = South T shaped wall, 14 = + shaped wall, 15 = Horizontal wall with door,
 * 16 = North floor, 17 = East floor, 18 = West floor, 19 = South floor, 20 = Top Left L floor, 21 = Top Right L floor,
 * 22 = Bottom Left L floor, 23 = Bottom Right L floor, 24 = Center floor.
 */
var slimeDungeonLevelOne = new Array(
	6,  1,  2,  2,  3,  4,  3,  1,  1,  1,  2,  4,  3,  3,  1,  1,  2,  3,  4,  1,  2,  1,  2,  3, 7,
    5, 20, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 5,
    5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
    5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
	5, 18, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 17, 5,
    5, 22, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 23, 5,
    8,  1,  1,  2,  2,  1,  3,  4,  3,  2,  1,  2,  1,  1,  2,  3,  4,  4,  1,  2,  3,  1,  2,  1, 9
	);


var currentScale = 32;
// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
	this.sw = 32;
    this.sh = 32;
	this.dw = currentScale;
    this.dh = currentScale;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {

	// loop to draw the background
	var spriteX = 0;
	var spriteY = 0;
	
	var count = 0;
	var x = this.x;
	var y = this.y;
    for (var i = 0; i < slimeDungeonLevelOne.length; i++) {
		spriteX = (slimeDungeonLevelOne[i] - 1) * 32; // 32 is the number of pixels per sprite
		this.ctx.drawImage(this.spritesheet, spriteX, spriteY, this.sw, this.sh,
                   x, y, this.dw, this.dh);
		count++;
		if (count >= 25) // change the value based on how many tiles you will draw. (25 atm)
		{
			x = this.x;
			y += currentScale; // change with scale
			count = 0;
		}
		else 
		{
			x += currentScale; // change with scale
		}
	};
};

Background.prototype.update = function () {
};
// --------------------------------------------------------------------------------------
// inheritance  Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale)

// --------------------------------------------------------------------------------------
function Skeleton(game, startingX, startingY) {
	this.animWalkLeft = new Animation(AM.getAsset("./img/SkeletonWalkLeft.png"), 60, 64, 4, 0.1, 4, true, 1);
    this.animWalkRight = new Animation(AM.getAsset("./img/SkeletonWalkRight.png"), 60, 64, 4, 0.1, 4, true, 1);
    this.animation = this.animWalkRight;
    this.speed = 30;
	this.direction = 1;
    this.ctx = game.ctx;
    Entity.call(this, game, startingX, startingY);
}

Skeleton.prototype = new Entity();
Skeleton.prototype.constructor = Skeleton;

Skeleton.prototype.update = function () {
	
    if (this.direction == 1) {
		this.x += this.game.clockTick * this.speed;
	} else {
		this.x -= this.game.clockTick * this.speed;
	}
    if (this.x > 720) {
		this.animation = this.animWalkLeft;
		this.direction = 2;
	}
	if (this.x < 20) {
		this.animation = this.animWalkRight;
		this.direction = 1;
	}
    Entity.prototype.update.call(this);
}

Skeleton.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
function Slime(game, startingX, startingY) {
	this.animWalkLeft = new Animation(AM.getAsset("./img/SlimeWalkLeft.png"), 80, 80, 8, 0.1, 8, true, 1);
    this.animWalkRight = new Animation(AM.getAsset("./img/SlimeWalkRight.png"), 80, 80, 8, 0.1, 8, true, 1);
    this.animation = this.animWalkRight;
    this.speed = 40;
	this.direction = 1;
    this.ctx = game.ctx;
    Entity.call(this, game, startingX, startingY);
}

Slime.prototype = new Entity();
Slime.prototype.constructor = Slime;

Slime.prototype.update = function () {
	
    if (this.direction == 1) {
		this.x += this.game.clockTick * this.speed;
	} else {
		this.x -= this.game.clockTick * this.speed;
	}
    if (this.x > 715) {
		this.animation = this.animWalkLeft;
		this.direction = 2;
	}
	if (this.x < 10) {
		this.animation = this.animWalkRight;
		this.direction = 1;
	}
    Entity.prototype.update.call(this);
}

Slime.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
function SlimeBehemoth(game, startingX, startingY) {
	this.animWalkLeft = new Animation(AM.getAsset("./img/SlimeBehemothWalkLeft.png"), 80, 68, 8, 0.1, 8, true, 1);
    this.animWalkRight = new Animation(AM.getAsset("./img/SlimeBehemothWalkRight.png"), 80, 68, 8, 0.1, 8, true, 1);
    this.animation = this.animWalkRight;
    this.speed = 50;
	this.direction = 1;
    this.ctx = game.ctx;
    Entity.call(this, game, startingX, startingY);
}

SlimeBehemoth.prototype = new Entity();
SlimeBehemoth.prototype.constructor = SlimeBehemoth;

SlimeBehemoth.prototype.update = function () {
	
    if (this.direction == 1) {
		this.x += this.game.clockTick * this.speed;
	} else {
		this.x -= this.game.clockTick * this.speed;
	}
    if (this.x > 705) {
		this.animation = this.animWalkLeft;
		this.direction = 2;
	}
	if (this.x < 13) {
		this.animation = this.animWalkRight;
		this.direction = 1;
	}
    Entity.prototype.update.call(this);
}

SlimeBehemoth.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
function Wraith(game, startingX, startingY) {
	this.animWalkLeft = new Animation(AM.getAsset("./img/WraithWalkLeft.png"), 80, 80, 6, 0.1, 6, true, 1);
    this.animWalkRight = new Animation(AM.getAsset("./img/WraithWalkRight.png"), 80, 80, 6, 0.1, 6, true, 1);
    this.animation = this.animWalkRight;
    this.speed = 100;
	this.direction = 1;
    this.ctx = game.ctx;
    Entity.call(this, game, startingX, startingY);
}

Wraith.prototype = new Entity();
Wraith.prototype.constructor = Wraith;

Wraith.prototype.update = function () {
	
    if (this.direction == 1) {
		this.x += this.game.clockTick * this.speed;
	} else {
		this.x -= this.game.clockTick * this.speed;
	}
    if (this.x > 705) {
		this.animation = this.animWalkLeft;
		this.direction = 2;
	}
	if (this.x < 13) {
		this.animation = this.animWalkRight;
		this.direction = 1;
	}
    Entity.prototype.update.call(this);
}

Wraith.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}
// --------------------------------------------------------------------------------------

AM.queueDownload("./img/SkeletonWalkLeft.png");
AM.queueDownload("./img/SkeletonWalkRight.png");
AM.queueDownload("./img/DungeonBackgroundSpriteSheet.png");
AM.queueDownload("./img/SlimeWalkLeft.png");
AM.queueDownload("./img/SlimeWalkRight.png");
AM.queueDownload("./img/SlimeBehemothWalkLeft.png");
AM.queueDownload("./img/SlimeBehemothWalkRight.png");
AM.queueDownload("./img/WraithWalkLeft.png");
AM.queueDownload("./img/WraithWalkRight.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/DungeonBackgroundSpriteSheet.png")));
	gameEngine.addEntity(new Slime(gameEngine, 10 , 10));
	gameEngine.addEntity(new Wraith(gameEngine, 10 , 50));
	gameEngine.addEntity(new Skeleton(gameEngine, 50 , 100));
	gameEngine.addEntity(new Skeleton(gameEngine, 90 , 150));
	gameEngine.addEntity(new Skeleton(gameEngine, 90 , 200));
	gameEngine.addEntity(new Skeleton(gameEngine, 50 , 250));
	gameEngine.addEntity(new SlimeBehemoth(gameEngine, 10 , 290));
	gameEngine.addEntity(new SlimeBehemoth(gameEngine, 10 , 340));
	gameEngine.addEntity(new Skeleton(gameEngine, 50 , 400));
	gameEngine.addEntity(new Skeleton(gameEngine, 90 , 450));
	gameEngine.addEntity(new Skeleton(gameEngine, 90 , 500));
	gameEngine.addEntity(new Skeleton(gameEngine, 50 , 550));
	gameEngine.addEntity(new Wraith(gameEngine, 10 , 580));
	gameEngine.addEntity(new Slime(gameEngine, 10 , 610));


    console.log("All Done!");
});