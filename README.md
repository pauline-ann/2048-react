# 2048-react
## A [React clone] of the [original 2048 game] by Gabriele Cirulli.

2048 is a game in which you merge like tiles together until you reach 2048. 2 and 2 combine to make 4, 4 and 4 combine to make 8, etc. If you run out of moves (the board is full and no tiles can be combined), it's game over. Playing this game was one of my favorite passtimes in college, I had a lot of fun recreating it! See how high you can score and have fun!

## How to Play
- On desktop, press the arrow keys or the WASD keys to move the tiles in the direction that is pressed.
- On touch screen devices, the same may be achieved with swipe gestures.

## Tech

2048 React uses a number of open source projects to work properly:

- [React] - Front-end JavaScript library
- [Node.js] - JavaScript runtime environment
- [Vite] - development environment alternative to `create-react-app` (had a smooth experience using this one!)
- [Sass] - CSS, but fancier
- [react-swipeable] - npm package that makes capturing touch screen swipe motions a breeze

## Installation

2048 React requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd 2048-react
yarn install
```

## Development

Want to contribute? Great!
Open your favorite Terminal and run this command.

```sh
yarn dev
```

#### Building for source

```sh
yarn build
```

## Credits

- Thank you [Romain Cousin] for sharing his beautiful animated gifs!
- Thank you [Ivan Vergiliev] for his easy to understand logic which inspired this project


   [original 2048 game]: <https://play2048.co/>
   [Romain Cousin]: <https://www.behance.net/romaincousin>
   [Ivan Vergiliev]: <https://github.com/IvanVergiliev/2048-react>
   [React]: <https://react.dev/>
   [Node.js]: <https://nodejs.org/en>
   [react-swipeable]: <https://www.npmjs.com/package/react-swipeable>
   [Sass]: <https://sass-lang.com/>
   [Vite]: <https://vitejs.dev/>
   [React clone]: <https://main--silly-froyo-4c70a7.netlify.app/>
   
