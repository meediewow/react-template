## Installation

1. Clone/download repo `git clone https://github.com/meediewow/jazzpixels-test.git`
2. `npm install`

## Usage

**Development**
`npm start`
or
`npm run start-dev`

-   Build app continuously (HMR enabled)
-   App served @ `http://localhost:8080`

**Production**

`npm run start-prod`

-   Build app once (HMR disabled) to `/dist/`
-   App served @ `http://localhost:3000`

---

**All commands**

| Command              | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `npm run start-dev`  | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`      |
| `npm run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000` |
| `npm run build`      | Build app to `/dist/`                                                         |
| `npm run test`       | Run tests                                                                     |
| `npm run lint`       | Run linter                                                                    |
| `npm run lint --fix` | Run linter and fix issues                                                     |
| `npm run start`      | (alias of `npm run start-dev`)                                                |
