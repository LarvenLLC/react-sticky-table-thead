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

![Alt Text](/example/public/react-sticky-table-thead(example).gif)

## Usage

```jsx
import React, { Component } from "react"

import StickyTable from "react-sticky-table-thead"

class Example extends Component {
  render() {
    return (
      <div style={{width:250}}> {/* container width optional */}
        <StickyTable height={150}> {/* when content exceeds height of table wrapper content scrolling is enabled */}
          <table style={{width:"100%", borderCollapse:"collapse"}}> {/* any table */}
            <thead style={{backgroundColor:"#c0c0c0"}}>
              <tr>
                <th>Item</th>
                <th>Price (TZS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Onion</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Tomato</td>
                <td>200</td>
              </tr>
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
                <td>Guava</td>
                <td>600</td>
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
      </div>
    )
  }
}
```

## Props
| Prop  | Explanation | Data Type | (Sample) Values | Default |
| ------------- | :-: | :-: | :-: | :-: |
| height | height of table wrapper | Number | * ```200```<br/>* ```800```<br/> | ```600``` |
| hiddenVerticalScrollbar | hide the table vertical scrollbar (scrolling will still be enabled) | Bool | * ```true```<br/>* ```false``` | ```false``` |
| hiddenHorizontalScrollbar | hide table horizontal scrollbar (scrolling will still be enabled) | Bool | * ```true```<br/>* ```false``` | ```false``` |
| className | table wrapper class (useful for setting table responsiveness: .table-responsive) | String | * ```".css-class"```<br/>* ```".table-responsive"``` | ```""``` |

## License

MIT © [BossBele](https://github.com/BossBele)
