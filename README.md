# react-sticky-table-thead

> Easy to use wrapper component to enable fixed table head in tables

[![NPM](https://img.shields.io/npm/v/react-sticky-table-thead.svg)](https://www.npmjs.com/package/react-sticky-table-thead) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-sticky-table-thead
```
Or
```bash
yarn add react-sticky-table-thead
```

## Usage

```jsx
import React, { Component } from 'react'

import StickyTable from 'react-sticky-table-thead'
import 'react-sticky-table-thead/dist/index.css'

class Example extends Component {
  render() {
    return (
      <StickyTable height={300}>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price (TZS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Orange</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Banana</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Passion</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Mango</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Avocado</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Papaya</td>
              <td>800</td>
            </tr>
            <tr>
              <td>Watermelon</td>
              <td>1,000</td>
            </tr>
            <tr>
              <td>Pineapple</td>
              <td>1,000</td>
            </tr>
          </tbody>
        </table>
      </StickyTable>
    )
  }
}
```

## License

MIT © [BossBele](https://github.com/BossBele)