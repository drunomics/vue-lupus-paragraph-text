# vue-lupus-paragraph-text
Vue slider component.



## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-paragraph-text.git`


import it:

```
import { PgText } from 'vue-lupus-paragraph-text';

Vue.component('pg-text', PgText);
```

## Properties
You can pass the following props:

- `data-field-text` ( string )
  The text.
- `data-text-contains-html` ( boolean )
  Whether text field contains html.

## Example
```
<pg-text
  data-field-text="Quote"
  data-text-contains-html="1"
>
```
