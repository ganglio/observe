# Observe

Observe is a super-simple Observer implementation in Typescript. It's not meant to be used in production or anywhere near production and it's just a Spaß.

## Features

- Simple and intuitive API
- Reactive state management
- Lightweight and fast

## Usage

Here’s a quick example of how to use Observe:

```javascript
import observe from 'observe';

const [counter, watchCounter] = observe({ count: 0 });

watchCounter((w) => {
    console.log(`Count is: ${w.count}`);
});

counter.count += 1; // Logs: Count is: 1
```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! But, as stated before, this is just an exercise (at best) so bear (🧸) with me

## License

This project is licensed under the MIT License.
