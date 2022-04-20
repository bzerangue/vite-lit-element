import { html, css, LitElement } from 'lit'

export class BreweryList extends LitElement {
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
        <p>Loading...</p>
      `;
    }

    return html`
      
        ${this.breweries.map(
          brewery => html`
            
            <div id="${brewery.id}" class="brewery-item">
              <h3><a href="/brewery/${brewery.id}">${brewery.name}</a></h3>
              <p>brewery type: ${brewery.brewery_type}</p>
              <p>location: ${brewery.city}, ${brewery.state}</p>
            </div>
            
          `,
        )}
    `;
  }

}

customElements.define('brewery-list', BreweryList);