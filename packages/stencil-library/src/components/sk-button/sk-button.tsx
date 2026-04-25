
import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

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


  /** Emits when the button is clicked */
  @Event() skClick!: EventEmitter<MouseEvent>;

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.skClick.emit(event);
    }
  };

  render() {
    return (
      <button
        type={this.type}
        disabled={this.disabled}
        class="sk-button"
        onClick={this.handleClick}
      >
        {this.label}
      </button>
    );
  }
}