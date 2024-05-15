import {React, useState} from 'react'
import TabButton from './TabButton.jsx'
import Tabs from './Tabs.jsx'
import { EXAMPLES } from '../data.js'

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null)

    let tabContent = <p>Please select a tab</p>
  
    if(selectedTopic) {
    tabContent =  <section id="concepts">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </section>
    }
  
    function selectHandler (selectedBtn) {
      setSelectedTopic(selectedBtn)
    }
  return (
    <>
    <section id="examples">
    <h2>Examples</h2>
    <Tabs  
    ButtonContainer="menu"
    buttons = {
            <>
            <TabButton
            isSelected={selectedTopic === 'components'}
             onClick={() => selectHandler('components')}>Components</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'}
             onClick={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'}
             onClick={() => selectHandler('props')}>Props</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'}
             onClick={() => selectHandler('state')}>state</TabButton>
             </>
    }>
    {tabContent}
    </Tabs>
  </section>

  </>
  )
}

export default Examples