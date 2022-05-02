import { LitElement } from 'lit'

export class NotFound extends LitElement {
  connectedCallback() {
    this.innerHTML = `
    <link href="/styles.css" rel="stylesheet" />
      <main id="brewery-content-section" class="wrapper flow">
        <h1>Page not found</h1>
        <p>The pathname was: ${this.location.pathname}</p>
      </main>
    `;
  }
}

customElements.define('not-found', NotFound);