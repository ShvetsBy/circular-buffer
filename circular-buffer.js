//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//import { buffer } from "stream/consumers";

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size);
    this.head = 0;
    this.queueLength = 0;
  }

  write(value) {
    if (this.queueLength === this.buffer.length) throw new BufferFullError();
    this.buffer[(this.head + this.queueLength) % this.buffer.length] = value;
    this.queueLength += 1;
    return true;
  }

  read() {
    if (this.count === 0) throw new BufferEmptyError();
    return this.buffer[this.head];
  }

  forceWrite(value) {
    this.buffer[(this.head + this.queueLength) % this.buffer.length] = value;
    this.head += 1;
    if (this.queueLength < this.buffer.length) this.queueLength += 1;
    return true;
  }

  clear() {
    this.queueLength = 0;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super("Buffer is full");
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super("Buffer is empty");
  }
}
