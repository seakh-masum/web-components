
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sk-button',
  styleUrl: 'sk-button.css',
  shadow: true,
})
export class SkButton {
  /** Button label */
  @Prop() label: string = 'Button';

  /** Button type */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /** Disabled state */
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button type={this.type} disabled={this.disabled} class="sk-button">
        {this.label}
      </button>
    );
  }
}