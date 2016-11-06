# zssport
[![Build Status](https://travis-ci.org/zsagasport/zssport.svg?branch=master)](https://travis-ci.org/zsagasport/zssport)
[![npm version](https://badge.fury.io/js/zssport.svg)](http://badge.fury.io/js/zssport)
[![devDependency Status](https://david-dm.org/zsagasport/zssport/dev-status.svg)](https://david-dm.org/zsagasport/zssport#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/zsagasport/zssport.svg)](https://github.com/zsagasport/zssport/issues)
[![GitHub stars](https://img.shields.io/github/stars/zsagasport/zssport.svg)](https://github.com/zsagasport/zssport/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/zsagasport/zssport/master/LICENSE)

## Demo
https://zsagasport.github.io/zssport/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About



## Installation

Install through npm:
```
npm install --save zssport
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {HelloWorld} from 'zssport';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/zsagasport/zssport/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/zssport/zssport.js"></script>
<script>
    // everything is exported zssport namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://zsagasport.github.io/zssport/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
