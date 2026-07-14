type Listener = (data?: any) => void;

class EventEmitter {
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  emit(data?: any) {
    this.listeners.forEach((listener) => listener(data));
  }
}

export const orderModalEvent = new EventEmitter();
