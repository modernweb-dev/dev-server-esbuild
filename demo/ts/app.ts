import { LitElement, customElement, property, html } from 'lit-element';

@customElement('my-app')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyApp extends LitElement {
  @property({ type: String })
  foo = 'bar';

  render() {
    return html`
      <p>Hello world</p>
    `;
  }
}
