# ToolTrack

ToolTrack is a web application build with [NextJS][nextjs] that allows users to monitor, manage and
configure notifications and alerts that they will receive as it relates to inventory & price changes
that occur for products offered by the woodworking hand tool manufacturer, [Lie
Nielsen][lie-nielsen].

The application relies on web scraping publically available data from [Lie Nielsen][lie-nielsen]'s
website.

&copy; Nick Florin, 2024

### Background

Since the 1980's, [Lie Nielsen][lie-nielsen] has been widely considered to be the best manufacturer
of North American-style woodworking hand tools, particularly hand planes. For woodworkers - like
myself - their beautiful, heirloom tools have become a staple in the workshop.

[Lie Nielsen][lie-nielsen] is a rather small company, and only keeps certain tools in stock with any
degree of reliability. This is undedrstandable - many of their tools are produced in smaller
batches, or released as limited run tools that will not be made again. When these tools become
available for purchase, they are often sold out within hours of being released to the public.

These considerations have warranted the need for a tool that allows users to receive notifications,
either via SMS, email or both, when the availability or price of a tool changes, for both new and
existing tools, as quickly as possible. This helps to ensure that they have an opportunity to
purchase the tool while it is still available.

The application is able to meet these needs by scraping data from [Lie Nielsen][lie-nielsen]'s
website at regular, short intervals - detecting when changes in stock and/or prices occur and
dispatching notifications to users who have subscribed to receive them as soon as they occur.

## 1. Getting Started

This section of the documentation outlines - at a high level - how to setup your machine for local
development for the first time. For more detailed explanations related to local development or
production deployments, see the Section 2: Development.

### System Requirements

The contents of this document assume that you are using a MacOS machine. If you are not, steps
outlined for setting up and running the application locally will be similar, but not exactly the
same.

- [nvm]: A [node] version manager.
- [Node][node] v20.x
- [homebrew]: A MacOSX package manager.
- [postgresql] (a [homebrew] package)
- [pnpm]: A [node] package manager.
- [vercel-cli]: The [homebrew] package that exposes [Vercel][vercel]'s command line utility. This is
  used locally for purposes of environment variable management and deployments.

**Note**: _This documentation describes how to setup and configure the application for local
development on MacOSX. Many of the steps outlined in this section may also be applicable for a
Windows/Ubuntu machine as well, but the steps will not be exactly as they are described here._

### 1.1: Repository

Clone this repository locally and `cd` into the directory.

```bash
$ git clone git@github.com:nickmflorin/tooltrack.git
```

### 1.2: Installing System Requirements

This section walks through how to install and configure the prerequisites (System Requirements) for
this project.

#### 1.2.a [Node][node]

[Node][node] is the engine that supports the application. This project uses [node] v20.0.0, and many
of the scripts in the `package.json` file will ensure that this version is met before allowing the
script to proceed executing.

Your machine will most likely already have a system installation of [node], but even if it does
not - that is okay, we will not be using the system installation of [node] (and you should not use a
system installation of [node]) but will rather isolate the version of [node] being used for this
project to this repository using [nvm].

**Important**: _Do not use a system installation of [node]. It will complicate your development
environment. Instead, see the next section for details about usage of [nvm]._

##### 1.2.a.i Installing [nvm]

It is strongly recommended that you use [nvm] to manage the version(s) of [node] that are being used
for this project, rather than system installations. It will allow you to more easily isolate the
version of [node] being used for this project to the project directory, avoiding conflicts with
global or system installations of [node].

Instructions for installing [nvm] can be found
[here](https://github.com/nvm-sh/nvm#installing-and-updating), but are also mentioned below for
purposes of completeness:

First, simply run the install script:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

The above command will download a script and then run it. The script it runs will first clone the
[nvm] repository at `~/.nvm` and then attempt to add the following source lines to your machine's
shell profile script (which may be either `~/.bash_profile`, `~/.zshrc`, `~/.profile`, or
`~/.bashrc` - depending on your OS):

```bash
$ export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

**Note**: _This installation will automatically make changes to your shell profile script. The exact
file that is used for your shell profile will depend on the type of machine you are using, the the
period of time in which the machine was created, and other considerations. Most likely, your shell
profile script will be `~/.zshrc` - which is the shell profile used for Mac's created since the
introduction of the M1 processor._

Since the [nvm] installation involves making changes to your machine's shell profile script, you
need to source your shell profile script after the installation completes. If this is not done, the
changes that were made by [nvm] will not take effect until you restart your Terminal application.

Assuming your shell profile script is `~/.zshrc`, you can source it as follows:

```bash
$ . ~/.zshrc`
```

Finally, verify that your system recognizes the `nvm` command by running the following:

```bash
$ nvm
```

##### 1.2.a.ii Node Version

Now that [nvm] is installed, you need to use it to establish the correct version of [node], 20, that
is required for this application. This project's repository comes equipped with a `.nvmrc` file in
the root folder - which is responsible for communicating to [nvm] which version of [node] to use for
the project. However, that specific version of [node] may still need to be installed via [nvm].

First, instruct [nvm] to use the [node] version specified by the `.nvmrc` file by executing the
following command from the root of the repository:

```bash
$ nvm use
```

If you see an output similar to the following:

```bash
Found '/<path-to-repository>/tooltrack/.nvmrc' with version <v20.0.0>
Now using node v20.0.0 (npm v8.6.0)
```

It means that the correct version of [node] that is required for this project is already installed
and available via [nvm] and that version of [node] is now active for this project's repository. The
rest of this step can be skipped and you can proceed to the next step,
[1.2.b Homebrew](#12b-homebrew).

On the other handss, if you see an error similar to the following:

```bash
Found '/<path-to-repository>/tooltrack/.nvmrc' with version <v20.0.0>
N/A: version "v20.0.0 -> N/A" is not yet installed.

You need to run "nvm install v20.0.0" to install it before using it.
```

It means that the version of [node] that is required for this project is not already installed with
[nvm], and must be installed before it can be used. To do this, simply run the following command
from the root of the project repository:

```bash
$ nvm install
```

This command will use [nvm] to install the correct version of [node] that is required for this
project, based on the specification in the project's `.nvmrc` file.

Finally, all that is left to do is to instruct [nvm] to use this version of [node] by executing the
following command - again, from the root of the project repository:

```bash
$ nvm use
```

For a sanity check, confirm that [nvm] is pointing to the correct version of [node] in the project
directory by executing the following command:

```bash
$ nvm current
```

The output of this command should be similar to the following:

```bashsssssssss
$ v20.x.x
```

At this point, if [nvm] is not pointing at the correct version of [node] or is pointing at a system
installation of [node], something went awry - consult a team member before proceeding.

### 1.2.b Homebrew

If on MacOSX, you will need to install [homebrew], which is a MacOSX package manager. Installation
instructions can be found on [homebrew]'s website.

### 1.2.c pnpm

This application uses [pnpm] to manage dependencies. Before installing the project's dependencies,
[pnpm] must be downloaded and setup on your machine. To download [pnpm], simply execute the
following `curl` command:

```bash
$ curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Similarly to the installation of [nvm], the installation of [pnpm] involves making changes to your
machine's shell profile script. As such, after [pnpm] is installed, make sure to source your
machine's shell profile script (here, we assume that is `~/.zshrc`):

```bash
$ . ~/.zshrc
```

Finally, ensure that the `pnpm` command is recognized by your machine:

```bash
$ pnpm -v
```

The [pnpm] version should be 8.x.x. If it is not, refer to the next section,
[1.2.c.i Managing PNPM Version](#12ci-Managing-PNPM-Version).

#### 1.2.c.i Managing PNPM Version

[pnpm] uses [corepack] to manage versions on your local machine. To install [corepack], use
[homebrew] as folllows:

```bash
$ brew install corepack
```

Once [corepack] is installed, activate it as follows:

```bash
$ corepack enable
```

Now you should be able to manage your [pnpm] version for this project independently of the system
installation:

```bash
$ corepack prepare pnpm@<version> --activate
```

or

```bash
$ corepack prepare pnpm@latest --activate
```

### 1.2.d Vercel CLI

Once [pnpm] is installed, [Vercel]'s [CLI][vercel-cli] needs to be installed. This application uses
[Vercel]'s [CLI][vercel-cli] to manage environment variables in both production and development
environments, particularly environment variables that represent sensitive information.

To install [Vercel]'s [CLI][vercel-cli], simply use [pnpm] to install the package globally:

```bash
$ pnpm i -g vercel
```

If you notice an error similar to the following:

```
Error: Cannot find module 'stream/web'
```

It means that you are not using the correct version of [node] (v20.x.x). Simply execute `nvm use` to
ensure your [node] version is correct, and then try to run the installation command again.

Once the [CLI][vercel-cli] is installed, you must login with your [Vercel][vercel] credentials:

```bash
$ vercel login
```

### 1.3: Environment

This section discusses how to properly setup environment variables and dependencies in the
application.

#### 1.3.a ENV File

When running the application locally, there will likely be additional, sensitive keys that needed to
be added to the environment via environment variables. These keys **cannot** be committed to source
control, and precaution must be taken to avoid doing so.

The files that this application uses to define environment variables that represent sensitive
information are as follows:

1. `.env.local`
2. `.env.development.local`
3. `.env`

Each of these files are ignored by the `.gitignore` file and will not be committed to source
control. The `.env` file will be loaded first, followed by the `.env.development.local` file and
then finally, the `.env.local` file (in a "development" environment). The `.env.local` and
`.env.development.local` files can be created on an individual developer basis, for purposes of
overridding certain configurations when developing. On the other hand, the `.env` file is used for
storing sensitive information directly from [Vercel][vercel]'s infrastructure.

**Note:** _Sensitive keys, tokens or keys related to access control should **only** ever be added to
`.env.local`, `.env.development.local` or `.env`. Other environment files (`.env.development`,
`.env.production`, .etc) are committed to source control, and should **never** contain sensitive
information._

_For more information regarding environment variables in [NextJS][nextjs], and the order in which
they are loaded (and overridden) please refer to Section 2.5._

To populate your local environment with the required environment variables necessary to run the
application locally, simply execute the following command:

```bash
pnpm pullenv
```

This command will pull the sensitive environment variables for the development environment from
[Vercel][vercel]. The environment variables will be placed inside of the `.env` file, which is the
first set of environment variables loaded by [NextJS][nextjs]. This means that any values for those
environment variables that are defined in any other environment file (`.env.local`,
`.env.development`, etc.) will override those defined in the `.env` file.

**Note:** Currently, we are using the free version of Vercel, which only supports one production
database at a time, and does not allow us to define database parameters for just the development
environment. This means that the `pullenv` command will populate the `.env` file with database
environment variables pertaining to the production database. However, these are overridden with
local, non-production values in the `.env.development` file - preventing incidental or dangerous
changes from occurring with the production database when developing locally. _For more information
related to this topic, see Section 1.4.a._

For more information regarding the environment variables, refer to Section 2.5.

#### 1.3.b Dependencies

When setting up the environment for the first time, you must do a fresh install of the dependencies.

##### 1.3.b.i Font Awesome

Before installing the dependencies, you will need to be given an environment variable,
`FONT_AWESOME_AUTH_TOKEN`, that is required to install certain dependencies. Currently, this
application uses a "pro" license for [FontAwesome][fontawesome] to support the icons in the
application. There are [FontAwesome][fontawesome]-related packages in the `package.json` file that
require an authenticated, "pro" license key to be in the environment when installing the packages.

**Note**: This authentication token is only required if the [FontAwesome][fontawesome]-related
packages have not already been installed to your `./node_modules` folder - which will likely only
ever be when setting up the environment for the first time or after deleting the `./node_modules`
folder manually.

Consult a team member for the `FONT_AWESOME_AUTH_TOKEN` environment variable, and add it to your
`.env.local` or `.env.development.local` file. Once that environment variable is defined, you can do
a fresh install of the dependencies:

```bash
$ pnpm install
```

This will install the project dependencies in the `package.json` file.

##### FontAwesome Caveat

Currently, this application uses a "pro" license for [FontAwesome][fontawesome] to support the icons
in the application. There

### 1.4 Database

This project uses a [postgres] database for both production and local development. First, check to
see if your machine already has [postgres] installed:

```bash
$ which postgres
```

If the result of the command is a directory (usually `/usr/local/bin/postgres`, if installed via
[homebrew]), then it is already installed and you can proceed to the next step. If not, simply
install [postgres] via [homebrew]:

```bash
$ brew install postgres
```

The [postgres] installation will come equipped with [psql], which is [postgres]'s command line tool.
Once [postgres] is installed, or you have verified that your machine already has a [postgres]
installation, we need to start the [postgres] server:

```bash
$ brew services start postgresql
```

#### 1.4.a Database Environment Variables

The database connection parameters for the application are defined in the relevant `.env.*` files.

The database connection parameters defined in the environment are used directly by the application's
ORM, [Prisma][prisma], to establish a connection to the application database and allow the
application to run. The following parameters must be in the environment for [Prisma][prisma] to
properly connect to the database, both in local development and in production:

```bash
POSTGRES_URL="postgresql://..."
POSTGRES_PRISMA_URL="postgresql://..."
POSTGRES_URL_NON_POOLING="postgresql://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."
```

While the `pullenv` command will populate the `.env` file environment variables used to connect to
the production database, they will always be overridden by the `.env.development` file - which is
committed to source control.

If the database environment variables defined in the `.env.development` file need to be changed
during local development, overrides should be defined in the `.env.development.local` file or the
`.env.local` file.

#### 1.4.b Setting Up Application Database

The above database connection parameters defined in the `.env.development` file (or overridden in
your `.env.local` or `.env.development.local` file) will be needed to create and setup the
application database from the [psql] shell. Since the database itself may not exit yet, we will
likely need to create it via the [psql] command line. To do this, connect to the default database
name `"postgres"`, that comes with the [homebrew] installation of [postgres]:

```bash
$ psql -d postgres
```

##### 1.4.b.i Troubleshooting

It is possible (although very unlikely) that either your [postgres] installation did not come with
the default `"postgres"` database, or it was somehow removed. If this is the case, you may see an
error similar to the following:

```bash
$ psql: error: connection to server on socket "/tmp/.s.PGSQL.5432" failed: FATAL:  database "postgres" does not exist
```

If you see this error, you cannot connect to the [psql] shell because there are no databases to
connect to. To fix this, simply run the following from the command line, and then reconnect to the
[psql] shell:

```bash
$ createdb postgres
$ psql -d postgres
```

##### 1.4.b.ii Creating the Database

Once inside of the [psql] shell, create the appropriate [postgres] database associated with this
application, based on the configuration parameters defined in the environment:

```bash
$ CREATE DATABASE <DATABASE_NAME>;
```

Then, create the [postgres] user associated with the configuration variables defined in the
environment and subsequently grant all privileges to that user:

```bash
$ CREATE USER <DATABASE_USER> WITH PASSWORD '<DATABASE_PASSWORD>';
$ GRANT ALL PRIVILEGES ON DATABASE <DATABASE_NAME> TO <DATABASE_USER>;
```

Finally, assign the created or existing user as the owner of the created or existing database.

```bash
$ ALTER DATABASE <DATABASE_NAME> OWNER TO <DATABASE_USER>;
```

##### 1.4.b.iii Assigning Permissions to Create Database

In the above section, a database with name `<DATABASE_NAME>` was created and the appropriate
permissions on that database were assigned to the database user, `<DATABASE_USER>`. However, we
still need to allow the `<DATABASE_USER>` to create new databases (versus just modifying the
existing database). This is required for [prisma] migrations to properly function.

To do this, simply give the database user, `<DATABASE_USER>`, the required permissions to create
databases so [prisma] migrations can function properly:

```bash
$ ALTER USER <DATABASE_USER> CREATEDB;
```

Now, the database user, `<DATABASE_USER>`, will be able to create databases in the [postgres]
service and [prisma] migrations will properly function.

You can now quit the [psql] shell:

```bash
$ \q
```

The application should now be ready to connect to the database for local development.

## 2. Local Development

This section of the documentation describes various interactions that you will need to understand in
order to properly work with this application locally. This section assumes that you have already
completed the steps outlined in the prior section, "Getting Started".

### 2.1 IDE

This project is optimized for development using the [VSCode][vscode] IDE. While other IDEs may also
work in this repository, you must take steps to ensure that our editor configurations (like trimmed
whitespace, indentation, and `prettyprint` with [Prettier][prettier]) that are applied to this
repository while using [VSCode][vscode] are also consistently applied in your IDE. This ensures that
your commits will conform to the established repository style.

### 2.2 Running Locally

After pulling down the latest state of the repository, the development server can be started by
running the following command:

```bash
$ pnpm dev
```

**Note**: If changes were made to the `package.json` file, you may need to install the dependencies
via `pnpm install`.

### 2.3 Building

Before committing any changes you have made, you must ensure that you validate your work by ensuring
that you can successfully build the project:

```bash
$ pnpm build
```

This is required because [NextJS][nextjs] does not perform type checks while the development server
is running. Only the `build` command will compile the code and run all type checks.

Sometimes, you may get misleading results from the local build. For instance, you might notice that
the build is failing due to errors that you had just fixed, but were not picked up in the subsequent
build. This can happen because [NextJS][nextjs] will cache part of the build. To fix this, or as as
a general sanity-check, clear the cache before running the build:

```bash
$ rm -rf ./.next
$ pnpm build
```

You can also accomplish this via the `build-local` command, which is defined in the `package.json`
file:

```bash
$ pnpm build-local
```

**Note**: [NextJS][nextjs] will also automatically perform linting checks during the `build`
process - any linting errors will result in the build failing automatically but linting warnings
will not. This includes linting performed by [ESLint][eslint] and [Prettier][prettier].

### 2.4 Linting

This project uses [ESLint][eslint] and [Prettier][prettier] inside of the [ESLint][eslint]
configuration which is responsible for formatting files of all types. [ESLint][eslint] is configured
to automatically format the file when the file is saved (a configuration that is defined in
`./vscode/settings.json`). If that is not desirable, you can easily turn that setting off in yoru
local [VSCode][vscode] settings.

#### 2.4.a Formatting & Code Style

The philosophy that the project has in regard to formatting and/or code styles can be summarized as
follows:

> There is usually not a right or wrong answer, but it is better to choose than to not.

In other words, many formatting rules were not chosen for a specific reason other than having a
decision. It is better to rely on the available formatting tools to remove as much ambiguity as
possible, rather than spending time debating or arguing the rules themselves.

#### 2.4.b Performing Linting Checks

[NextJS][nextjs] will automatically perform linting checks during the `build` process, but it is
desired that they be performed independently without performing the entire `build` process, use the
following command:

```bash
$ pnpm lint
```

This will run [ESLint][eslint] and [Prettier][prettier] checks (via [ESLint][eslint]) on the
project.

With that being said, the project's [Jest][jest] testing suite is configured to perform linting and
formatting checks via [ESLint][eslint] and [Prettier][prettier] as well. This is the recommended way
to perform the checks, because the output is much, much more suitable for debugging and the hot
reloading feature of [Jest][jest] will save you a lot of time.

This can be done simply as:

```bash
$ pnpm test
```

For more information related to [Jest][jest] and the linting checks it performs, please see the
section further down in this documentation, "Testing".

#### 2.4.c Automatically Fixing [ESLint][eslint] Violations

Some [ESLint][eslint] violations can be automatically fixed by [ESLint][eslint] itself. This can be
performed via the `eslint-fix` command, which is defined in the `package.json` file:

```bash
$ pnpm eslint-fix
```

This command will automatically fix and format all [ESLint][eslint] and [Prettier][prettier]
violations in the repository that are capable of being auto-fixed.

### 2.5 Environment

There are 3 distinct environments that the application runs in, with the current environment being
dictated by the `NODE_ENV` environment variable:

| Environment (`NODE_ENV`) | Default Environment File | Override Environment File | Overridden by `.env.local` |
| :----------------------: | :----------------------: | :-----------------------: | :------------------------: |
|      `development`       |    `.env.development`    | `.env.development.local`  |            Yes             |
|       `production`       |    `.env.production`     |  `.env.production.local`  |            Yes             |
|          `test`          |       `.env.test`        |            N/A            |             No             |

Additionally, there is a third environment file, `.env`, that contains environment variables that
define environment variables for _all_ environments.

For each environment the default environment file specifies defaults that the environment variable
will have for the file's associated environment. These files should _always_ be committed to source
control.

When the environment is `development`, the default environment variables will be loaded from
`.env.development`. Similarly, when the environment is `production`, the default environment
variables will be loaded from `.env.production`. Finally, when the environment is `test`, the
default environment variables will be loaded from `.env.test`. In each case, any environment
variables defined in the environment specific file, `.env.${NODE_ENV}`, will override those defined
in the global environment variable file, `.env`.

#### 2.5.a Local Overrides

It is often necessary that the environment variables for any given environment be overridden, either
locally in development or on a server. When overriding the default environment variables for a given
environment is required, a `.env.local` file is used. The environment variables defined in this file
will override the default environment variables _only when in a `production` or `development`
environment_. If the environment is `test`, the environment variables in `.env.local` will not be
loaded.

Note that if you would like to override the environment variables for just a single environment, a
corresponding `.env.development.local` or `.env.production.local` file can be used. Each of these
files will be given precedence over the `.env.local` file.

For further documentation regarding the environment configuration, please see the
[NextJS Documentation](https://nextjs.org/docs/basic-features/environment-variables).

### 2.6 Testing

This documentation is intended to outline configurations, patterns and methodologies that are used
to test the Console application.

We use [Jest][jest] to handle integration and unit testing in the Console. The entire test suite can
be run with the following command:

```bash
$ pnpm test
```

#### 2.6.a Projects

Originally, there was only one configuration file for the testing suite, `jest.config.ts`. However,
due to the complexities of some of the tests that have to be run, the configuration had to be split
up into [projects](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig), such
that certain tests can use different sets of configuration parameters that would not otherwise be
possible with a single configuration.

The [Jest][jest] testing suite is broken down into 5
"[projects](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig)":

1. **Functional Unit Tests**: Unit tests that are run against functional utilities or logic in
   `src/lib`.
2. **Component Tests**: Both unit tests & snapshot tests that are run against components in
   `src/components`.
3. **Prettier**: Prettier checks that are performed against relevant files in the project.
4. **ESLint**: ESLint checks that are performed against non `.scss` files in the project.

The following table describes the various aspects of each individual
[Jest](https://jestjs.io/docs/getting-started) project in the application:

|        Project        |              Config File              |       Files Tested        | Test Files Located |
| :-------------------: | :-----------------------------------: | :-----------------------: | :----------------: |
| Functional Unit Tests |    `src/tests/unit/jest.config.ts`    |           `.ts`           | `!src/components`  |
|    Component Tests    | `src/tests/components/jest.config.ts` |          `.tsx`           |  `src/components`  |
|       Prettier        |       `jest.config.prettier.ts`       |       All Relevant        |        N/A         |
|        ESLint         |        `jest.config.eslint.ts`        | All Relevant, non `.scss` |        N/A         |

#### 2.6.b Linting

Linting checks from [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) can be
performed both via the `npm run lint` command or simply the command that runs the test suite:

```bash
$ pnpm test
```

However, it is highly recommended that the [Jest](https://jestjs.io/docs/getting-started) test suite
is used when performing linting checks locally, because
[Jest](https://jestjs.io/docs/getting-started) does a phenomenal job providing clearer, more
detailed and more readable debugging information when the checks fail. Additionally,
[Jest](https://jestjs.io/docs/getting-started) provides the benefit of "watch mode" - which allows
you to dynamically make the changes and immediately see the checks pass as a result of the changes
that were made.

### 2.7 Database

This section of the documentation outlines how to manage the application database as it relates to
this application.

#### [postgres]

When developing locally, it is important that the [postgres] server is running. This service can be
started via [homebrew] as follows:

```bash
$ brew services start postgresql
```

Restarting the [postgres] service can be done as follows:

```bash
$ brew services restart postgresql
```

Stopping the [postgres] service can be done as follows:

```bash
$ brew services stop postgresql
```

#### 2.7.a Prisma

This application uses [Prisma][prisma], an ORM that that maps records in the database to
[TypeScript][typescript] objects while exposing a database client, `PrismaClient`, that can be used
to interact with those records. To properly use the `PrismaClient`, a developer must understand how
this ORM works.

##### 2.7.a.i ZenStack

This applicaiton uses [ZenStack][zenstack], which is essentially a wrapper around the
[Prisma][prisma] ORM that provides useful features that [Prisma][prisma] does not directly support.
Some of the more notable features include:

1. [Polymorphism](https://zenstack.dev/docs/guides/polymorphism): [ZenStack][zenstack]
   ["enhances"](https://zenstack.dev/docs/the-complete-guide/part1/enhancement) the `PrismaClient`
   in order to provide support for polymorphic relations.
2. [Access Policy Controls](https://zenstack.dev/docs/the-complete-guide/part1/access-policy/):
   Arguably the most important
   [enhancement](https://zenstack.dev/docs/the-complete-guide/part1/enhancement) that
   [ZenStack][zenstack] makes to the `PrismaClient`.

Since [ZenStack][zenstack] wraps [Prisma][prisma], the majority of the interactions with the
database in this application are done through [ZenStack][zenstack] - not [Prisma][prisma] directly.

##### 2.7.a.i Database Schema

The database structure (models) for the application is defined in a [ZenStack][zenstack] `*.zmodel`
schema file. This application's `*.zmodel` file is located at
[`src/database/zenstack/schema.zmodel`](./src/database/zenstack/schema.zmodel). When changes to the
database structure are made in the `schema.zmodel` file, [ZenStack][zenstack] will then do the
following:

1. Converts the updated `.zmodel` file into a [Prisma][prisma] schema file,
   [`src/database/prisma/schema.prisma`](./src/database/prisma/schema.prisma), which the
   [Prisma][prisma] ORM then uses the definitions in that file, `schema.prisma`, to properly
   construct, update and manage the [postgres] database.
2. Updates the types related to the `PrismaClient` to reflect the changes made to the database
   structure.

**Note**: The [Prisma][prisma] `.schema` file is an _auto-generated file_ - and it should not be
modified directly. All modifications to the database models and structure should be done from
[ZenStack][zenstack]-specific `.zmodel` file.

When updates are made to the [ZenStack][zenstack] `.zmodel` schema file, we need to use
[ZenStack][zenstack] to accomplish the above. This can be done as follows:

```bash
pnpm generate-db
```

##### 2.7.a.ii Migrations

When updates are made to the [ZenStack][zenstack] `.zmodel` schema file, these updates will not be
reflected in the database until migrations are performed. In order to perform migrations, we first
need to create the migration files:

```bash
$ pnpm create-migrations
```

This command will prompt [Prisma][prisma] to first identify the changes that were made to the
[Prisma][prisma] `.schema` file that are not currently represented in the [postgres] database, and
to create migrations files [here](./src/database/prisma/migrations) that contain instructions for
how to apply those changes once migrations are run.

The name of the migration file should be a snake-cake name that is indicative of the changes that
were made (i.e. "add_updated_at_field_to_user").

Then, migrations can be applied as follows:

```bash
pnpm migrate-dev
```

##### 2.7.a.iii Resetting the Database

```bash
pnpm migrate-reset
```

##### 2.7.a.iv Seeding

The application comes equipped with a database seed file
[`./src/scripts/seed/index.ts](./src/scripts/seed/index.ts). This file is used to populate the
database with dummy data/fixtures for development. This script can be run as:

```bash
$ pnpm seeddb
```

That being said, this seed process _only_ works when the database state is empty - if the database
state is not empty, unique constraint violations will be triggered when adding data to the database.
Therefore, in order to run the [`./src/prisma/seed.ts](./src/prisma/seed.ts) script, it must be done
as a part of [Prisma][prisma]'s `reset` flow:

```bash
$ pnpm migrate-reset
```

This command will wipe the current database, run all migrations and _then_ run the
[`./src/prisma/seed.ts](./src/prisma/seed.ts) script.

## 3. Production

This section of the documentation describes how to work with the application in a production
setting.

This application uses [Vercel][vercel] for its production infrastructure.

### 3.1 Deploying

The application's instance in [Vercel][vercel] is automatically configured to listen to changes on
either the `master` or `develop` branch, and automatically deploy.

When the `develop` branch changes, [Vercel][vercel] will automatically redeploy the application in a
`preview` environment. The URL of the deployed instance is dynamic, and can be retrieved directly
from the [Vercel][vercel] deployments dashboard.

When the `master` branch changes, [Vercel][vercel] will automatically redeploy the application in a
`production` environment, at the application's public and primary URL.

With this in mind, deploying the application is as simple as merging the most up to date changes
into the `master` branch (from the `develop` branch) and pushing up to the remote. When this
happens, [Vercel][vercel] will automatically redeploy the production instance.

First, checkout the `master` branch:

```bash
$ git checkout master
```

Then, make sure you have the latest changes from the `develop` branch on the remote:

```bash
$ git fetch origin develop
```

Then, merge the changes from `origin/develop` into `master`, making sure to use the `--ff-only` flag
to ensure that the commits are linear and can be applied directly on top of the last commit on
`master`:

```bash
$ git merge --ff-only origin/develop
```

Finally, push the changes up to `master` to trigger the deploy:

```bash
$ git push origin master
```

[psql]: https://www.postgresql.org/docs/current/app-psql.html
[homebrew]: https://brew.sh/
[postgresql]: https://www.postgresql.org/docs/current/app-psql.html
[nvm]: https://github.com/nvm-sh/nvm
[node]: https://nodejs.org/en/
[postgres]: https://www.postgresql.org/
[homepage]: ./ReadMe.md
[react]: https://reactjs.org/
[nextjs]: https://nextjs.org/
[prettier]: https://prettier.io/
[vscode]: https://code.visualstudio.com/
[eslint]: https://eslint.org/
[jest]: https://jestjs.io/docs/getting-started
[sass]: https://sass-lang.com/
[prisma]: https://www.prisma.io/
[fontawesome]: https://fontawesome.com/docs
[pnpm]: https://pnpm.io/installation
[corepack]: https://nodejs.org/api/corepack.html
[vercel]: https://vercel.com/
[vercel-cli]: https://vercel.com/docs/cli
[typescript]: https://www.typescriptlang.org/
[zenstack]: https://zenstack.dev/
[lie-nielsen]: https://www.lie-nielsen.com/
