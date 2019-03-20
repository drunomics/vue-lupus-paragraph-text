# vue-lupus-paragraph-text
Vue paragraph text component.



## Install

via npm:
`npm install https://github.com/drunomics/vue-lupus-paragraph-text.git`


import it:

```
import PgText from 'vue-lupus-paragraph-text';

Vue.component('pg-text', PgText);
```

## Slots
You can use the following slots

- `title` ( optional )
  A title.
- `content` ( default )
  All other content.

## Examples
```
<pg-text>
  <h2 slot="title">Title</h2
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
</pg-text>
```

```
<pg-text>
  <p slot="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
</pg-text>
```
