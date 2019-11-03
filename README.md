# ORM research for TypeScript Node.js applications

### Motivation

Research's motivation is provide an global and objective vision about most used ORMs in market. It does not try to define which is the best but instead describes their characteristics, features, performance, and pros and cons.

### What tools are we going to analize?

For this reasearch we are going to consider following ORMs:

#### Knex

[Knex](http://knexjs.org/) is a Query Builder. As it name clames, a query builder is an interface that allows you to writte SQL in your prefered language. Main difference with ORMs is that you don't have to define models strucutre for a query builder because you are not working with objects that represents your data.

Knex supports Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift.

<p align="center">
  <img src="assets/knex.png" alt="knex logo" width="75">
</p>

#### Objection

[Objection](https://vincit.github.io/objection.js/) has all the benefits of an SQL query builder but also a powerful set of tools for working with relations, for this it can be considered an ORM. It is built on Knex, so supports same databases.

<p align="center">
  <img src="assets/objection.png" alt="objection logo" width="75">
</p>

#### Sequelize

[Sequelize](https://sequelize.org/) is an ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more. It is one of the most complete ORMs for Node.js.

<p align="center">
  <img src="assets/sequelize.png" alt="sequelize logo" width="75">
</p>

#### TypeORM

[TypeORM](https://typeorm.io/#/) is an ORM which goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases.

<p align="center">
  <img src="assets/typeorm.png" alt="typeorm logo" width="75">
</p>

[[Link to results](#Results)].

#### What is an ORM?

When people talk about ORM, they usually make reference to a library that implements the Object-Relational Mapping (ORM) technique\*. It is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data in your database, so you don't use SQL anymore; you interact directly with an interface in the same language you're using.

You can find a great explanation in the following link from [StackOverflow](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one).

## Case study

### Database schema

For the research, we created a simple database schema. Many-to-many relation was choosen given it provides us with some
For research purpose we created a simple database schema with a many to many relationship between model orders and items.

<img src="assets/db.png" alt="database schema" width="500" align="left">

```
Table orders {
  id int [pk]
  user string
  date timestamp
}

Table items {
  id int [pk]
  name string
  value float
}

Table order_items {
  order_id int [ref: > orders.id]
  item_id int [ref: > items.id]
}

```

### Endpoints

To tests libraries implementation we created the following endpoints with [Express.js](https://expressjs.com/).

```
GET /<orm_name>/orders # Get all orders with their items
POST /<orm_name>/orders # Create many orders with their items
```

The key in this endpoints is we are managing nested resources. An order has one or many items, and payload has them nested into order.

## Results

### Features

- Implementation: Provides a "Getting started" guide, with examples and steps explanations about how to implement the library in my project.
- Recipes: Provides examples about how to implement solutions for different case uses (ie: relations).
- Real-world examples: Provides real-world examples, with implementations in differents frameworks.
- Straightforward: Easy to find needed information and read, updated and clear.
- TypeScript: Provides documentation about TypeScript support, with examples and explanations about best practices.

<table width="100%" align="center">
  <tr>
    <th>Library</th>
    <th>ORM</th> 
    <th>Query Builder</th> 
    <th>Connection Pooling</th>
    <th>Migration Option</th>
  </tr>
  <tr align="center">
    <td>Sequelize</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td>Knex</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td>TypeOrm</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td>Objection</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</table>

### Community

First, we can look at NPM packages and their metrics to have a clear image about how much they are being used.

<table width="100%" align="center">
  <tr>
    <th>Library</th>
    <th>Creation date</th> 
    <th>Weekly downloads</th> 
    <th>Dependents</th> 
  </tr>
  <tr align="center">
    <td>
      <a>Sequelize</a link="https://www.npmjs.com/package/sequelize" target="blank">
    </td>
    <td>Jul 22, 2010</td>
    <td>446,312</td>
    <td>3,139</td>
  </tr>
  <tr align="center">
    <td>
      <a>Knex</a link="https://www.npmjs.com/package/knex" target="blank">
    </td>
    <td>Dec 29, 2012</td>
    <td>410,065</td>
    <td>1,953</td>
  </tr>
  <tr align="center">
    <td>
      <a>TypeOrm</a link="https://www.npmjs.com/package/typeorm" target="blank">
    </td>
    <td>Feb 29, 2016</td>
    <td>168,470</td>
    <td>917</td>
  </tr>
  <tr align="center">
    <td>
      <a>Objection</a link="https://www.npmjs.com/package/objection" target="blank">
    </td>
    <td>Apr 14, 2015</td>
    <td>49,842</td>
    <td>220</td>
  </tr>
</table>

<p align="left">
  <img src="assets/npm.png" alt="npm packages growth in last year">
</p>

In this category, Sequelize seems to be a clear winner. It has been in the game for a longer time and its community doesn't stop growing. It's interesting how Knex is almost as used as Sequelize despite being a less friendly solution. Besides both packages duplicated their weekly downloads in this year.

Objection, in the other side, shows an almost null downloads increase keeping around 50K downloads per week.

Finally, in the last year TypeOrm has triplicated its downloads. Despite staying still well below Sequelize and Knex it is positioning itself as an interesting competitor.

You can find an updated analisys about npm packages on [NPM Trends](https://www.npmtrends.com/knex-vs-sequelize-vs-objection-vs-typeorm).

### Documentation

- **Implementation**: Provides a "Getting started" guide, with examples and steps explanations about how to implement the library in my project.
- **Recipes**: Provides examples about how to implement solutions for different case uses (ie: relations).
- **Real-world examples**: Provides real-world examples, with implementations in differents frameworks.
- **Straightforward**: Easy to find needed information and read, updated and clear.
- **TypeScript**: Provides documentation about TypeScript support, with examples and explanations about best practices.

<table width="100%" align="center">
  <tr>
    <th>Library</th>
    <th>Implementation</th> 
    <th>Recipes</th> 
    <th>Real-world examples</th>
    <th>Straightforward</th>
    <th>TypeScript</th>
  </tr>
  <tr align="center">
    <td>
      <a>Sequelize</a link="https://sequelize.org/v5/manual/getting-started.html" target="blank">
    </td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>⚠️</td>
  </tr>
  <tr align="center">
    <td>
      <a>Knex</a link="http://knexjs.org/" target="blank">
    </td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>⚠️</td>
  </tr>
  <tr align="center">
    <td>
      <a>TypeOrm</a link="https://typeorm.io/#/" target="blank">
    </td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr align="center">
    <td>
      <a>Objection</a link="https://vincit.github.io/objection.js/guide/" target="blank">
    </td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</table>

Either Sequelize and Knex provide TypeScript documentation, it is not enough to implement a clean solution in our projects and requires more research.

### Code quality

#### Implementation

// TODO

#### Complexity

// TODO

### TypeScript integration

// TODO

### Performance

[autocannon](https://github.com/mcollina/autocannon) is a fast HTTP/1.1 benchmarking tool written in Node.js. All examples used are benchmarked using these options:

```bash
autocannon -c 100 -d 20 -m "GET" "localhost:8080/<orm>/orders" # <orm> = knex|typeorm|sequelize|objection
```

- `-c` The number of concurrent connections to use.
- `-d` The number of pipelined requests to use.
- `-m` The method of the requests.

Test Bench Configuration:

- **OS**: macOs Catalina 10.15.1.
- **CPU**: 2,2 GHz Quad-Core Intel Core i7.
- **RAM**: 16 GB 1600 MHz DDR3.
- **Node version**: v10.17.0.


#### GET all orders

##### Latency

<table align="left">
  <tr>
    <th>Library</th>
    <th>Latency avg</th>
    <th>Latency max</th>
  </tr>
  <tr align="center">
    <td>
      <a>Sequelize</a link="https://www.npmjs.com/package/sequelize" target="blank">
    </td>
    <td>712.43 ms</td>
    <td>1113.81 ms</td>
  </tr>
  <tr align="center">
    <td>
      <a>Knex</a link="https://www.npmjs.com/package/knex" target="blank">
    </td>
    <td>365.21 ms</td>
    <td>717.59 ms</td>
  </tr>
  <tr align="center">
    <td>
      <a>TypeOrm</a link="https://www.npmjs.com/package/typeorm" target="blank">
    </td>
    <td>824.58 ms</td>
    <td>1461.62 ms</td>
  </tr>
  <tr align="center">
    <td>
      <a>Objection</a link="https://www.npmjs.com/package/objection" target="blank">
    </td>
    <td>411.96 ms</td>
    <td>997.15 ms</td>
  </tr>
</table>

<img src="assets/latency.png" alt="latency graph" width="400">

##### Req/Sec

<table>
  <tr>
    <th>Library</th>
    <th>Req/Sec avg</th>
    <th>Req/Sec min</th>
  </tr>
  <tr align="center">
    <td>
      <a>Sequelize</a link="https://www.npmjs.com/package/sequelize" target="blank">
    </td>
    <td>154.75</td>
    <td>80</td>
  </tr>
  <tr align="center">
    <td>
      <a>Knex</a link="https://www.npmjs.com/package/knex" target="blank">
    </td>
    <td>271.36</td>
    <td>145</td>
  </tr>
  <tr align="center">
    <td>
      <a>TypeOrm</a link="https://www.npmjs.com/package/typeorm" target="blank">
    </td>
    <td>118.45</td>
    <td>57</td>
  </tr>
  <tr align="center">
    <td>
      <a>Objection</a link="https://www.npmjs.com/package/objection" target="blank">
    </td>
    <td>240.65</td>
    <td>101</td>
  </tr>
</table>

<img src="assets/latency.png" alt="latency graph" width="400">

##### Bytes/Sec

<table>
  <tr>
    <th>Library</th>
    <th>Bytes/Sec avg</th>
    <th>Bytes/Sec min</th>
  </tr>
  <tr align="center">
    <td>
      <a>Sequelize</a link="https://www.npmjs.com/package/sequelize" target="blank">
    </td>
    <td>612 kB</td>
    <td>316 kB</td>
  </tr>
  <tr align="center">
    <td>
      <a>Knex</a link="https://www.npmjs.com/package/knex" target="blank">
    </td>
    <td>777 kB</td>
    <td>415 kB</td>
  </tr>
  <tr align="center">
    <td>
      <a>TypeOrm</a link="https://www.npmjs.com/package/typeorm" target="blank">
    </td>
    <td>335 kB</td>
    <td>161 kB</td>
  </tr>
  <tr align="center">
    <td>
      <a>Objection</a link="https://www.npmjs.com/package/objection" target="blank">
    </td>
    <td>680 kB</td>
    <td>285 kB</td>
  </tr>
</table>

<img src="assets/latency.png" alt="latency graph" width="400">

##### POST many orders

// TODO Add metrics

## Developing

#### Database configuration

Before running the app, make sure you have [Postgresql installed](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04) installed.

You need to create project database manually, to create it run the following steps inside a psql terminal:

1. `CREATE DATABASE db_project_name;`
2. `\c db_project_name`
3. `CREATE ROLE "project_name" LOGIN CREATEDB PASSWORD 'project_name';`

Don't forget to create a dotenv file for environment variables. `Dotenv` is used for managing environment variables. They must be stored in a `/.env` file. File structure is described above:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=project_name
DB_PASSWORD=project_name
DB_NAME=db_project_name
```

#### Migrations

You need to run migrations before start app. To do it simply run `npm run migrate`.

#### Starting app

Run in your terminal: `npm start`.

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
