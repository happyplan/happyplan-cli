# happyplan-cli [![Build Status](https://secure.travis-ci.org/happyplan/happyplan-cli.png?branch=master)](http://travis-ci.org/happyplan/happyplan-cli)
> The HappyPlan command line interface.

Install this globally and you'll have access to the `happyplan` command anywhere on your system.

```shell
npm install -g happyplan-cli
```

**Note:** The job of the `happyplan` command is to load and run the version of HappyPlan you have installed locally to your project, irrespective of its version. You should never install HappyPlan itself globally.  For more information about why, [please read this](http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation).

## Installing happyplan-cli locally

If you don't have administrator rights, you may need to install happyplan-cli locally to your project using `npm install happyplan-cli --save-dev`.  Unfortunately, this will not put the `happyplan` executable in your PATH.  You'll need to specify its explicit location when executing it, eg: `./node_modules/.bin/happyplan`,

Note: Using happyplan-cli in this way is unsupported.

## Checking version

```bash
happyplan -version
```