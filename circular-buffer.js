//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { buffer } from "stream/consumers";

class CircularBuffer {
  constructor(n) {
    this.buffer = new Array(n);
    this.head = 0;
    this.tail = -1;
  }

  write(val) {
    this.tail = (this.tail + 1) % this.buffer.length;
    this.buffer[tail] = val;
  }

  read() {
    return this.buffer[this.head];
  }

  forceWrite() {
    throw new Error("Remove this statement and implement this function");
  }

  clear() {
    this.buffer = new Array(n);
    this.head = 0;
    this.tail = -1;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    // if (!this.isEmpty() && (this.tail + 1) % this.buffer.legth === this.head)
    //   throw new Error("buffer is full");
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    //  if (this.tail === -1) throw new Error("buffer is empty");
  }
}
