import React from 'react';
import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';

function CoreCompents() {
  return (
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {CORE_CONCEPTS.map((coreConcept) => <CoreConcept key={coreConcept.title} {...coreConcept} />)}
    </ul>
  </section>
  )
}

export default CoreCompents