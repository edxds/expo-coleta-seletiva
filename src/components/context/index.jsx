/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({ theme: 'regular' });
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeManager extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    theme: 'regular',
  };

  changeTheme = newTheme => {
    const currentTheme = this.state.theme;
    if (newTheme === currentTheme) return;

    this.setState({ theme: newTheme });
  };

  render() {
    const { children } = this.props;
    const value = {
      theme: this.state.theme,
      changeTheme: this.changeTheme,
    };

    return <ThemeProvider value={value}>{children}</ThemeProvider>;
  }
}

export const connectToTheme = Element =>
  class extends React.Component {
    render() {
      return (
        <ThemeConsumer>
          {({ theme, changeTheme }) => (
            <Element
              currentTheme={theme}
              changeTheme={changeTheme}
              {...this.props}
            />
          )}
        </ThemeConsumer>
      );
    }
  };
