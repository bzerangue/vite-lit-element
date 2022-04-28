import { html, css, LitElement } from 'lit'
import {customElement, property} from 'lit/decorators.js';


export class NotFound extends LitElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Page not found</h1>
      The pathname was: ${this.location.pathname}
    `;
  }
}

customElements.define('not-found', NotFound);