export function inferErrorType<TError>(e: unknown): e is TError {
  if (e instanceof Error) {
    return true;
  }

  return false;
}
