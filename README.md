# WIP

## JEST

## 1. dependencies

```bash
yarn add --dev jest babel-jest @babel/preset-env
yarn add --dev enzyme @wojtekmaj/enzyme-adapter-react-17
```

## 2. Dossier tests

- Créer dossier `tests` à la racine
- Créer un fichier `.eslintrc` dans le dossier tests

```json
{
  "env": {
    "jest/globals": true
  },
  "rules": {
    "no-unused-expressions": "off"
  }
}
```

- Créer un fichier `.setup.js`

```js
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });
```

## 3. Package.json

- Dans le `package.json`, ajouter les scripts

```json
    "test": "jest",
    "test:watch": "jest --watchAll"
```

- Ajouter une clé `jest`:

```json
  "jest": {
    "modulePaths": [
      "./"
    ],
    "roots": [
      "<rootDir>/src",
      "<rootDir>/tests"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": ["<rootDir>/tests/.setup.js"]
  }
```

## 4. Mocks

- Créer un dossier `__mocks__` à la racine du projet
- Créer un fichier `fileMock.js`

```js
export default 'test-file-stub';
```

- Créer un fichier `styleMock.js`

```js
export default {};
```

## 5. Lancer les tests

- Lancer les tests

```bash
yarn run test
```

- Lancer un test specifique

```bash
yarn run test tests/actions/recipes.test.js            
```

- Lancer les tests lié à un fichier de code

```bash
yarn run test --findRelatedTests src/actions/recipes.js
```

- Faire une analyse de la couverture de nore code par les tests

```bash
yarn run test --coverage
```
