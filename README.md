# JavaScript TDD 2020
- JavaScript TDD project scaffold for 2020
- node.js JavaScript ES6 TDD project scaffold using Mocha + Chai

## Technologies
- JavaScript ES6 
- Mocha v8.2
- Chai v4.2
- Babel v7.12
- NVM v0.37
- Node v15.2
- NPM v7.0
- Nodemon v2.0

## Developer Machine Setup
### Linux Operating System
- Open the terminal
- Install [nvm], [node], [npm] using the following commands:
```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.37.0/install.sh | bash
source ~/.bash_profile
nvm install v15.2.1
```

### Clone + Install
- note: `project-name` is the name of your project/library.
```bash
git clone https://github.com/raydecastro/javascript-tdd-2020.git project-name
cd project-name
npm install
```

## Build
```bash
npm run build
```

## Test
```bash
npm test
```

## Auto run tests on code change
```bash
npm run test-auto
```

## Run
```bash
npm start
```

## License
MIT

## Team
- [Ray Castro]. Software Architect.

## References
- Initial project setup based from [My Node.js Setup (Mocha & Chai, Babel7, ES6)]

[nvm]: https://github.com/creationix/nvm#install-script
[node]: https://nodejs.org
[npm]: https://www.npmjs.com
[Ray Castro]: https://github.com/raydecastro
[My Node.js Setup (Mocha & Chai, Babel7, ES6)]: https://dev.to/bnorbertjs/my-nodejs-setup-mocha--chai-babel7-es6-43ei
