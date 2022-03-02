import PropTypes from 'prop-types';
import React, { useContext } from 'react';

const ThemeContext = React.createContext(new Map());
const { Consumer, Provider } = ThemeContext;

class ThemeProvider extends React.Component {
  static propTypes = {
    prefixes: PropTypes.object.isRequired,
  };

  constructor(...args) {
    super(...args);
    this.prefixes = new Map();
    Object.entries(this.props.prefixes).forEach(([key, value]) => {
      this.prefixes.set(key, value);
    });
  }

  render() {
    return <Provider value={this.prefixes}>{this.props.children}</Provider>;
  }
}

export function useMacifPrefix(prefix, defaultPrefix) {
  const prefixes = useContext(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

function createMacifComponent(Component, opts) {
  if (typeof opts === 'string') opts = { prefix: opts };
  const isClassy = Component.prototype && Component.prototype.isReactComponent;
  // Si c'est un composant fonctionnel, assurez-vous de ne pas le casser avec une référence

  const { prefix, forwardRefAs = isClassy ? 'ref' : 'innerRef' } = opts;

  const name = Component.displayName || Component.name;
  
  // Cela ressemble à un composant fonction mais ce n'est pas le cas,
  // il est passé directement à forwardRef, et nommé pour les dev-tools
  // eslint-disable-next-line react/prop-types
  function forwardRef({ mcfPrefix, ...props }, ref) {
    props[forwardRefAs] = ref;
    return (
      <Consumer>
        {prefixes => (
          <Component
            {...props}
            mcfPrefix={mcfPrefix || prefixes.get(prefix) || prefix}
          />
        )}
      </Consumer>
    );
  }
  forwardRef.displayName = `Macif(${name})`;
  
  return React.forwardRef(forwardRef);
}

export { createMacifComponent, Consumer as ThemeConsumer };
export default ThemeProvider;
