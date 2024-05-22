type GlobalVariableInitializer<T> = () => T;

const globalData = globalThis as unknown as Record<string, unknown>;

/**
 * Isolates the initialization of a variable from NextJS's hot reloading cycle, preventing the
 * variable from being initialized multiple times in development when files are reloaded after a
 * change is made.
 *
 * NextJS supports hot reloading of changed files, which means that the module or file responsible
 * for exporting a certain variable can be refreshed many times.  In some cases, this can result in
 * additional, unwanted instances of the instance the variable is associated with being created in a
 * development environment, which can lead to memory usage spikes for which the memory usage will
 * exceed the thresholds set via the NodeJS interpreter.
 *
 * As a workaround, we can store the instantiated logger as a global variable in development
 * environments only, global variables are not reloaded during a hot reload.
 *
 * This implementation is similar to the implementation that Prisma suggests to avoid a similar
 * situation where initialization of the Prisma Client during hot reloading can lead to a large
 * number of connection pools to the database being opened.
 *
 * See: https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
 *      #prevent-hot-reloading-from-creating-new-instances-of-prismaclient
 *
 * @param {string} varName The name of the global variable that the instance should be stored with.
 *
 * @param {GlobalVariableInitializer<T>} initializer
 *   The initializer function that returns the instance being stored globally.
 *
 * @returns {T}
 *   The initialized or globally stored instance.
 */
export function isolateVariableFromHotReload<T>(
  varName: string,
  initializer: GlobalVariableInitializer<T>,
): T {
  let cachedInitialized = globalData[varName];
  if (process.env.NODE_ENV === "development") {
    if (cachedInitialized === undefined) {
      cachedInitialized = initializer();
    }
    globalData[varName] = cachedInitialized;
    return cachedInitialized as T;
  }
  return initializer();
}
