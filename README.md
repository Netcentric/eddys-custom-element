# Eddy's Custom Element

Plugin to allow decorate block as webcomponent / custom element

## Simple Example

Regular block

```javascript
export default function decorate(block) {
  // your logic
}
```

As custom element and classes for extensablility and lifecicles

```javascript
import curryDecorator from '../../libs/curry-decorate/curry-decorate.js';

export class Hero extends HTMLElement {
  connectedCallback() {
    // rendering is done then call onComponentComplete for showing
    if (this.onComponentComplete) this.onComponentComplete(this);
  }
}
// define a custom element name and constructor
export default curryDecorator('raqn-hero', Hero);
```

That way you can create and extend components as classes and web components

```javascript
import curryDecorator from '../../libs/curry-decorate/curry-decorate.js';

export class Stage extends Hero {
  connectedCallback() {
    // your logic
    // call super for on complete or skip and call it
    super.connectedCallback();
  }
}
export default curryDecorator('raqn-stage', Stage);
```

### shadow dom component

```javascript
import curryDecorator from '../../libs/curry-decorate/curry-decorate.js';
import ShadowDomComponent from '../../libs/shadow-dom-

export class ShadowExample extends ShadowDomComponent {
  connectedCallback() {
    // your logic
    // call super for on complete or skip and call it
    super.connectedCallback();
  }
}
export default curryDecorator('raqn-stage', Stage);
```

## Usage

Having a forked project from https://github.com/adobe/aem-boilerplate

You can use by just

`npm i @netcentric/eddys-custom-element`

it will install the scripts at the root of your Edge delivery project under `libs/`

### Docs

- LICENSE
- docs/CODE_OF_CONDUCT.md
- docs/CONTRIBUTING.md
- docs/CHANGELOG.md --> dynamically updated

### Issue template

- .github/ISSUE_TEMPLATE.md

### PR template

- .github/PULL_REQUEST_TEMPLATE.md --> automatically closes connected issue

### Workflows

- CI --> npm ci, test and build
- CodeQL --> Perform CodeQL Analysis (Security, etc.)
- Release --> semantic-release:
  - Creates release notes
  - Updates CHANGELOG
  - Updates package.json version
  - Creates Git tag/release
  - Publish package to NPM
- Manual Release --> same as Release, but can be triggered manually in Actions tab

### Release

- based on Angular Commit Message Conventions in commits -
  https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-header
- Commit message format is used to build:
  - Release notes
  - Changelog updates
  - NPM package semver

### Commit message Convention

```
<type>(<scope>): <short summary>
│       │             │
│       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
│       │
│       └─⫸ Commit Scope (optional): project|based|list
│
└─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```
