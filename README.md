**Stage Styled System**

**Introduction:**

Welcome to Stage styled-system! This project offers a simplified yet powerful approach to styling React applications using styled-components and Styled System. With Stage styled-system, you can effortlessly apply consistent styles to your components with minimal setup.

**Features:**

- **Effortless Styling:** Leverage the power of styled-components and styled system without the need for extensive customization.
- **Customizable Styles:** Access a collection of predefined styles for common UI elements, allowing for easy customization to suit your project's needs.
- **Responsive Design:** Create responsive layouts effortlessly using the responsive style props provided by Styled System.
- **Panda-CSS Integration:** Seamlessly integrate with Panda-CSS for advanced theming and additional styling capabilities.
- **Developer Friendly:** Simple setup and intuitive APIs make it easy for developers of all levels to utilize Stage Styled System.

**Installation:**

To install Stage Styled System along with Panda-CSS, simply run:

```bash
pnpm install @stage-styled-system panda-css
# or
npm install @stage-styled-system panda-css
# or
yarn add @stage-styled-system panda-css
```

**Usage:**

```javascript
import React from 'react';
import { css } from '@stage-lib/styled-system/css';

const App = () => {
  return (
    <div>
      <p className={css({ fontSize: 'lg' })}> Welcome ! </p>
    <div>
  );
};

export default App;
```

**Contributing:**

We welcome contributions to Stage Styled System. If you find any issues or have suggestions for improvements, please feel free to open a pull request.

**License:**

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Futhememe/stage-styled-system/blob/main/LICENSE) file for details.
