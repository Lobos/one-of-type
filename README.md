# Install
```
npm install one-of-type
```

# Usage
```
import OneOfType from 'one-of-type';

class MyComponent extends Componet { ... }

MyComponent.propTypes = {
  numberOrString: OneOfType.number_string,
  numberOrFuncOrElement: OneOfType.element_func_number
}
```

OneOfType use an underscore combine React.PropTypes, include **'array', 'bool', 'element', 'func', 'number', 'object', 'string'**

```
number_string === PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
func_number_string === PropTypes.oneOfType([ PropTypes.func, PropTypes.number, PropTypes.string ])
func_string === PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
element_func_number_string === PropTypes.oneOfType([ PropTypes.element, PropTypes.func, PropTypes.number, PropTypes.string ])
```

**PropTypes must be sort alphabetically**
number_string is ok.
string_number get undefined.
