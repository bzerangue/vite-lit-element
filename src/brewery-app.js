import { html, css, LitElement } from 'lit'
import {customElement, property} from 'lit/decorators.js';


export class BreweryApp extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      breweries: { type: Array },
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.breweries) {
      this.fetchBreweries()
    }
  }

  async fetchBreweries() {
    this.loading = true;
    const response = await fetch('https://api.openbrewerydb.org/breweries');
    const jsonResponse = await response.json();
    this.breweries = jsonResponse;
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return html`
      <link href="/styles.css" rel="stylesheet" />
      <main id="brewery-content-section" class="wrapper flow">
        <p>Loading...</p>
      </main>
      `;
    }

    return html`
      
    <link href="/styles.css" rel="stylesheet" />
      <main id="brewery-content-section" class="wrapper flow">
        <h1>Breweries</h1>

        <div class="steps">
        <div class="auto-grid" role="list">
          ${this.breweries.map(
            brewery => html`
              
            <div id="${brewery.id}" class="brewery-item">
                <h3><a href="/brewery/${brewery.id}">${brewery.name}</a></h3>
                <p>brewery type: ${brewery.type}</p>
                <p>location: ${brewery.city}, ${brewery.state}</p>
              </div>
              
            `,
          )}
        </div>
        </div>
      </main>
    `;
  }

}

customElements.define('brewery-app', BreweryApp);