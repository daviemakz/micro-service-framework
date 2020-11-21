![Logo][]

# Risen.JS - Simple, Fast & Scalable Micro Services Framework

[![NPM](https://nodei.co/npm/risen-js.png?compact=true)](https://www.npmjs.com/package/risen-js)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdaviemakz%2Frisen-js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdaviemakz%2Frisen-js?ref=badge_shield)
[![Build Status](https://travis-ci.org/daviemakz/risen-js.svg?branch=master)](https://travis-ci.org/daviemakz/risen-js)
[![Downloads](https://img.shields.io/npm/dm/risen-js.svg)](https://www.npmjs.com/package/risen-js)
[![GitHub issues](https://img.shields.io/github/issues/daviemakz/risen-js)](https://github.com/daviemakz/risen-js/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/daviemakz/risen-js)](https://github.com/daviemakz/risen-js/pulls)
[![NPM](https://img.shields.io/npm/l/risen-js)](https://www.npmjs.com/package/risen-js)
[![npm](https://img.shields.io/npm/v/risen-js)](https://www.npmjs.com/package/risen-js)

**Lead Maintainer:** [David Makuni](https://github.com/daviemakz)

**Documentation:** [Click Here](https://daviemakz.github.io/risen-js/)

# Summary

Risen.JS is a framework for building event-driven, efficient, and scalable non-blocking Node.JS server-side applications. It uses ES6+ JavaScript and combines elements of OOP (Object Oriented Programming) and FP (Functional Programming).

Under the hood, Risen.JS makes use of the well-known and robust [Express](http://expressjs.com) HTTP(s) package, [Quick-DB](https://www.npmjs.com/package/quick.db) for long term persistent storage, and the native [child process](https://nodejs.org/api/child_process.html) feature in Node.JS. The library also uses [Babel](https://babeljs.io/) to support runtime transpilation of ES6+ code.

Risen.JS provides a level of abstraction above these frameworks but also exposes their APIs directly to the developer. This allows for easy use of the myriad third-party modules, packages, and middleware’s which are available for each platform.

Because the "services" you will create run as independent Node.JS processes, this means you can build microservices utilizing the tens of thousands of NPM packages that currently exist and are added every day. Simply put anything you can do in Node.JS, you can build a microservice to do for you.

_Supports Node 10.x +_

# Tutorial

We highly recommend you go through this [tutorial](https://daviemakz.github.io/risen-js/docs/settingup) to get a better feel of this framework. It will cover all the basics of the framework and demonstrate some of the possibilities of Risen.JS.

# Installation

Start building scalable high-performance microservice architectures today! To install please follow the below instructions:

## NPM

```sh
npm install risen-js --save
```

## Yarn

```sh
yarn add risen-js
```

# Testing

Risen.JS is fully tested and production-ready. To execute the test suite run the following commands:

```sh
yarn test
```

> Ensure you have installed the package before doing this using `yarn` or `npm install`.

# Development

This framework is designed to be open-source and free for all to use according to the MIT License.

To support further development this package includes an integrated development server, providing a full runtime environment for future development. Follow the below steps to set the repository up locally.

## Clone the repository

```sh
git clone https://github.com/daviemakz/risen-js.git
```

## Install the dependencies

```sh
yarn install
```

## Start the server

When running the development server, as you make changes all the tests will execute automatically, allowing you to easily develop new features in the framework while ensuring the library still works.

To run the development server against the full test suite, you simply execute:

```sh
yarn dev:server
```

# Documentation

The [documentation](https://daviemakz.github.io/risen-js/) of Risen.JS is installed as a submodule to this repository.

## Installation

If you have already installed Risen.JS in the main directory run this file:

```sh
./init-docs.sh
```

## Starting documentation server

To run the local [documentation](https://daviemakz.github.io/risen-js/) server run:

```sh
cd docs
yarn start
```

# Contributing

All contributions are very welcome, please read my [CONTRIBUTING.md](https://github.com/daviemakz/risen-js/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/daviemakz/risen-js/pulls) or as [GitHub issues](https://github.com/daviemakz/risen-js/issues). If you'd like to improve code, please feel free!

# License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdaviemakz%2Frisen-js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdaviemakz%2Frisen-js?ref=badge_large)

[logo]: https://daviemakz.github.io/risen-js/img/logo.png
