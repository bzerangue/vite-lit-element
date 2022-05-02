import { html, LitElement } from 'lit'

export class BreweryDetail extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      brewery: { type: Object },
      id: { type: String },
      name: { type: String },
      type: { type: String },
      city: { type: String },
      state: { type: String },
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.brewery) {
      this.fetchBrewery(this.location.params.id);
    }
  }

  async fetchBrewery(id) {
    this.loading = true;
    const response = await fetch('https://api.openbrewerydb.org/breweries/'+id);
    const jsonResponse = await response.json();
    this.brewery = jsonResponse;
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
      <div id="${this.brewery.id}">
        <h1>${this.brewery.name}</h1>
        <h3>Brewery Type: ${this.brewery.brewery_type}</h3>
        <p>Located in ${this.brewery.city}, ${this.brewery.state}
      </div>

      <hr />
      <p><a href="/">Return to Brewery List</a></p>
    </main>
    `;
  }
}

customElements.define('brewery-detail', BreweryDetail);