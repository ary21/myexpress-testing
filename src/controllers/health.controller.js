export function healthCheckSync() { return ('OK'); }

export function healthCheckAsync() {
  return Promise.resolve('OK');
}