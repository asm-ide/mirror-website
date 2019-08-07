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
    return <a href="#" onClick={this.open}></a>
  }

  open() {
    const opened = window.open(this.href, Target[this.target], 'noopener')
    opened.opener = null
  }
}

export default ExternalAnchor
