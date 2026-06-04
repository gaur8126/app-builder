# SimpleCalculator

## Brief Description
SimpleCalculator is a lightweight, web‑based calculator that performs basic arithmetic operations. It runs entirely in the browser using HTML, CSS, and vanilla JavaScript—no server, build tools, or external dependencies are required.

---

## Tech Stack
- **HTML** – Structure of the calculator UI.
- **CSS** – Styling and responsive layout.
- **JavaScript** – Core logic for handling button clicks, keyboard input, and expression evaluation.

---

## Features
- **Basic arithmetic** – addition, subtraction, multiplication, division.
- **Clear (C) and backspace (←)** functionality.
- **Chaining operations** – you can press operators sequentially; the calculator evaluates the expression from left to right, mimicking the behaviour of a simple pocket calculator.
- **Keyboard support** – all digits, operators, Enter (equals), Escape (clear) and Backspace work via the keyboard.
- **Responsive design** – works on desktop and mobile browsers.

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone <repository‑url>
   cd <repository‑folder>
   ```
2. **Open the application**
   - Locate the `index.html` file in the project root.
   - Open it directly in any modern web browser (Chrome, Firefox, Edge, Safari, etc.).

> **Note:** No build step, package manager, or server is required. The app is pure static assets.

---

## Usage Guide
### Button Layout
| Row | Buttons |
|-----|---------|
| 1   | `C` (clear) | `←` (backspace) | `/` |
| 2   | `7` | `8` | `9` | `*` |
| 3   | `4` | `5` | `6` | `-` |
| 4   | `1` | `2` | `3` | `+` |
| 5   | `0` (spans two columns) | `.` | `=` |

- **Digits (0‑9)** and **decimal point** build the current number.
- **Operators (+, -, *, /)** add the operator to the expression. The calculator evaluates the expression **left‑to‑right** as soon as the next number is entered, matching the behaviour of a basic handheld calculator (no traditional mathematical precedence).
- **`=`** computes the current expression and displays the result.
- **`C`** clears the entire display.
- **`←`** deletes the last character (backspace).

### Chaining Operations
You can continue entering operators and numbers without pressing `=` each time. For example:
```
2 + 3 * 4 - 5 =
```
will be evaluated as:
```
(((2 + 3) * 4) - 5) = 15
```
because the implementation processes the expression strictly from left to right.

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0`‑`9` | Input digit |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` or `=` | Evaluate expression |
| `Escape` | Clear (C) |
| `Backspace` | Delete last character |

---

## Screenshots
> *Add screenshots of the calculator UI here.*

```
[ Screenshot 1: Calculator on desktop ]
[ Screenshot 2: Calculator on mobile ]
```

---

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch for your feature or bug‑fix.
3. Ensure any new code follows the existing style (plain JavaScript, semantic HTML, CSS variables).
4. Test the changes locally by opening `index.html`.
5. Submit a pull request with a clear description of what was changed.

---

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.
