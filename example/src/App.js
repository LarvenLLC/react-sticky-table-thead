import React from 'react'

import { StickyTable } from 'react-sticky-table-thead'

const App = () => {
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

export default App
