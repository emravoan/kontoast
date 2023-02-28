<h1 align="center">KonToast - Simple JS Toast</h1>

## Example

```js
import KonToast from '@emravoan/kontoast';

// Success Toast
KonToast.success({
  delay: 10000,
  title: 'Success',
  text: 'Your data has been saved!',
});

// Warning Toast
KonToast.success({
  delay: 10000,
  title: 'Warning',
  text: "You won't be able to revert this!",
});

// Error Toast
KonToast.success({
  delay: 10000,
  title: 'Error',
  text: `<div class="text-center"><h6>Oops!</h6>Something went wrong.</div>`,
});
```

#### HTML File

```html
<script type="module">
  import KonToast from 'https://cdn.skypack.dev/@emravoan/kontoast';

  KonToast.success({
    title: 'Success',
    text: 'Great Job!',
  });
</script>
```

## Usage

### Initialize

```js
// ES6 Modules or TypeScript
import KonToast from '@emravoan/kontoast';

// CommonJS
const KonToast = require('@emravoan/kontoast');

// Skypack CDN
import KonToast from 'https://cdn.skypack.dev/@emravoan/kontoast';
```

### Methods

```js
// Success Toast
KonToast.success(option);

// Warning Toast
KonToast.success(option);

// Error Toast
KonToast.success(option);

// Toast Option
{
  type: string; // default: 'success'
  text: string; // required
  title: string; // required
  delay: string | number; // default: 5000
  autohide: string | boolean; // default: true
}
```
