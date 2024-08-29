import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

declare let responsiveVoice: any;

@Component({
  selector: 'app-selection-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.css']
})
export class SelectionButtonsComponent implements OnInit, OnDestroy {
  selectedButton: 'green' | 'red' | null = null;
  lastSelectedButton: 'green' | 'red' | null = null;
  private keydownListener: (event: KeyboardEvent) => void;
  private resetTimeout: any;
  private gamepadCheckInterval: any;
  private lastButtonStates: boolean[] = [false, false];
  buttonText = environment.buttonText;
  voiceText = environment.voiceText;
  isInputDisabled = false;

  constructor() {
    this.keydownListener = () => {};
  }

  ngOnInit() {
    this.keydownListener = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        this.selectButton('green');
      } else if (event.key === 'ArrowRight') {
        this.selectButton('red');
      }
    };
    window.addEventListener('keydown', this.keydownListener);

    // Start checking for gamepad input
    this.gamepadCheckInterval = setInterval(() => this.checkGamepadInput(), 100);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.keydownListener);
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
    if (this.gamepadCheckInterval) {
      clearInterval(this.gamepadCheckInterval);
    }
  }

  selectButton(button: 'green' | 'red') {
    if (this.isInputDisabled) return;

    this.isInputDisabled = true;
    this.selectedButton = button;
    this.lastSelectedButton = button;
    const text = button === 'green' ? this.voiceText.yes : this.voiceText.no;
    this.speak(text);

    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }

    this.resetTimeout = setTimeout(() => {
      this.selectedButton = null;
      this.lastSelectedButton = null;
      this.isInputDisabled = false;
    }, 3000);
  }

  private speak(text: string) {
    if (responsiveVoice) {
      const { pitch, rate, volume, voice } = environment.voiceSettings;
      responsiveVoice.speak(text, voice, {
        pitch,
        rate,
        volume
      });
    }
  }

  private checkGamepadInput() {
    if (this.isInputDisabled) return;

    const gamepads = navigator.getGamepads();
    for (const gamepad of gamepads) {
      if (gamepad) {
        // Xbox controller: A button (index 0), B button (index 1)
        if (gamepad.buttons[0].pressed && !this.lastButtonStates[0]) {
          this.selectButton('green');
        } else if (gamepad.buttons[1].pressed && !this.lastButtonStates[1]) {
          this.selectButton('red');
        }
        
        // Update last button states
        this.lastButtonStates[0] = gamepad.buttons[0].pressed;
        this.lastButtonStates[1] = gamepad.buttons[1].pressed;
      }
    }
  }
}