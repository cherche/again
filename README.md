# Again

Better intervals made by someone who doesn't know how to make JavaScript plugins.

## Usage

```javascript
Again(fn, time [, arg1, arg2, arg3])
```

Here's a super simple example of its use.

```javascript
const myInterval = Again(fruit => console.log(fruit), 1500, 'apple')

myInterval.start()

// will log 'apple' every 1500 milliseconds
```

Even if the loop is still running, you can change any of the original options you passed in. Oh, all methods (`start`, `stop`, `fn`, `time`, `args`) will return your `Again` object allowing method chaining!

```javascript
myInterval
  .time(100)
  .args('banana')

// will now log 'banana' every 100 milliseconds
```

But wait, there's more! You can even change the function (but why would you want to do that?).

```javascript
function getRandomInt (offset, limit) {
  return offset + Math.floor(Math.random() * limit)
}

myInterval
  .fn((offset, limit) => console.log(getRandomInt(offset, limit)))
  .time(10000)
  .args(3, 18)

// will now log a random number from 3 to 20 every 10 seconds
```

And finally, you can stop the loop whenever you want.

```javascript
myInterval.stop()

// will no longer do anything until started again
```
