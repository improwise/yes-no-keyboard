# Yes/No Keyboard

This Angular application provides a simple interface for users to select "Yes" or "No" using various input methods, including keyboard, mouse, and gamepad. It's designed to be accessible and includes voice feedback.

Demo available at https://yesnokeyboard.improwise.com/

## Features

- Large, easy-to-click buttons for "Yes" and "No"
- Keyboard support (Left Arrow for Yes, Right Arrow for No)
- Gamepad support (A button for Yes, B button for No)
- Visual feedback with button animations
- Voice feedback using ResponsiveVoice
- Configurable button text and voice settings

## Intended Usage

This project is designed to be versatile in its input methods, catering to various user needs:

### Adaptive Controllers

The primary intended usage is with adaptive controllers, such as the Xbox Adaptive Controller or similar devices. These controllers are specifically designed to meet the needs of gamers with limited mobility, making gaming more accessible to a wider audience.

- [Xbox Adaptive Controller](https://www.xbox.com/en-US/accessories/controllers/xbox-adaptive-controller): A unified hub for devices that helps make gaming more accessible. It works with a range of external devices such as switches, buttons, mounts, and joysticks to create a custom controller experience.

While optimized for use with the Xbox Adaptive Controller, it can also be used with other similar adaptive gaming devices.

### Standard Input Devices

The application also fully supports standard input methods:

- Keyboard: Users can navigate and interact with the application using keyboard inputs.
- Mouse: Full mouse support is available for point-and-click interactions.

This multi-input approach ensures that the application is accessible and usable for a wide range of users, regardless of their preferred or required input method.

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with the `NG_APP_RESPONSIVE_VOICE_API_KEY` set to your ResponsiveVoice API key
4. Run `ng serve` to start the development server
5. Navigate to `http://localhost:4200/` in your browser

## Main Component: SelectionButtonsComponent

The core functionality is implemented in the `SelectionButtonsComponent`. Here's a brief overview of its key features:

### Inputs

- Keyboard input (Left/Right arrow keys)
- Gamepad input (A/B buttons)
- Mouse/touch input (clicking/tapping buttons)

### Outputs

- Visual feedback (button animations)
- Voice feedback (using ResponsiveVoice)

### Key Methods

1. `selectButton(button: 'green' | 'red')`: Handles button selection, triggers voice feedback, and manages the selection state.

2. `speak(text: string)`: Utilizes ResponsiveVoice to provide audio feedback.

3. `checkGamepadInput()`: Continuously checks for gamepad input to allow button selection via game controller.

### Configuration

The component uses environment variables for easy configuration of:

- Button text
- Voice settings (pitch, rate, volume, voice)
- Voice text for feedback

## Accessibility Features

- Large, high-contrast buttons
- Keyboard and gamepad support for non-mouse users
- Voice feedback for visually impaired users

## Customization

You can customize the appearance and behavior by modifying:

- `src/environments/environment.ts` for text and voice settings
- `src/app/selection-buttons/selection-buttons.component.css` for styling

## Dependencies

- Angular 18.2.0
- ResponsiveVoice (via CDN)

## ResponsiveVoice Integration

This project uses ResponsiveVoice for text-to-speech functionality. To use ResponsiveVoice in your project:

1. Sign up for a free or paid account at [ResponsiveVoice.org](https://responsivevoice.org/).
2. Obtain your API key from the ResponsiveVoice dashboard.
3. Put the API key in the `.env` file

## License

Copyright (c) [2024] [ImproWise]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
