# TypeScript ORM benchmark

TypeScript ORM research. 

Considered ORMs:

- Knex *.
- Sequelize.
- Objection.
- TypeORM.

> * Knex is not an ORM but a Query Builder.

## Getting started

#### Database configuration

Before running the app, make sure you have:
- [Postgresql installed](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04).

- Database created, to create it run the following steps inside a psql terminal:
1. CREATE DATABASE db_project_name;
2. \c db_project_name
3. CREATE ROLE "project_name" LOGIN CREATEDB PASSWORD 'project_name';

- Create a dotenv file for environment variables. `Dotenv` is used for managing environment variables. They must be stored in a `/.env` file. File structure is described above:

- DB_HOST=localhost
- DB_PORT=5432
- DB_USERNAME=project_name
- DB_PASSWORD=project_name
- DB_NAME=db_project_name


### Migrations

To run migrations, run `npm run migrate`.


### Starting app

To start application simply run `npm start`.

Available endpoints defined as follows:

```
GET /<orm_name>/orders 
POST /<orm_name>/orders
```

You can use Postman file to consume API.

## Benchmark metrics

dasdasdas

### Performance
Lorem ipsum.

### Code quality
Lorem ipsum.

## Conclusions
Lorem ipsum.

#### Knex (Query builder)
Lorem ipsum.

#### Objection
Lorem ipsum.

#### Sequelize
Lorem ipsum.

#### TypeORM
Lorem ipsum.


#### Debugging

In order to debug our Node.js application, we enable 'sourceMap' in `tsconfig.json`, this compiler option generates corresponding `.map` files from original Javascipt counterpart. This change is mandatory to attach a debugger, otherwise it wouldn't be able to match transpiled files with their originals.

In VSCode, you will need to add an `./.vscode/launch.json` file in order to launch the debugger. You can use the following:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/server.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "internalConsoleOptions": "neverOpen",
      "console": "integratedTerminal",
      "disableOptimisticBPs": true,
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run the tests (`npm test`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request


## About

This project is written and maintained by [Emanuel Casco](https://github.com/emanuelcasco).


## License

**typescript-orm-benchmark** is available under the MIT [license](LICENSE.md).

    Copyright (c) 2019 Emanuel Casco

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
