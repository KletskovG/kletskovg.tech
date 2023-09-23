export function isCurrentUserRoot() {
  return process.getuid() === 0;
}
