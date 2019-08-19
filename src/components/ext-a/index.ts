import { customElement, html, LitElement, property } from 'lit-element'

export enum Target { _self, _blank, _parent, _top }

@customElement('ext-a')
class ExternalAnchor extends LitElement {
  @property()
  href: string

  @property()
  target: Target

  @property()
  internalLink: boolean


  render() {
    return html`<a href="#" onClick=${this.open}></a>`
  }

  open() {
    const opened = window.open(this.href, Target[this.target], 'noopener')
    if(opened) { opened.opener = null }
  }
}

export default ExternalAnchor
