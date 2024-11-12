module.exports = getStringifiedValue = (message) => {
  const seen = new WeakSet();
  const stringify = (value) => {
    if (value === null) {
      return "null";
    }

    if (typeof value === "undefined") {
      return "undefined";
    }

    if (typeof value === "number" && !isFinite(value)) {
      return value.toString(); // Handle NaN, Infinity, -Infinity
    }

    if (typeof value === "bigint") {
      return `${value}n`; // Preserve bigint notation
    }

    if (typeof value === "symbol") {
      return value.toString(); // Convert symbol to string
    }

    if (typeof value === "function") {
      return value.toString(); // Convert function to string
    }

    if (typeof value === "object") {
      if (seen.has(value)) {
        return "[Circular]"; // Handle circular references
      }
      seen.add(value);

      if (value instanceof Error) {
        // Serialize Error objects
        const errorDetails = {
          name: value.name,
          message:
            typeof value.message === "object"
              ? stringify(value.message)
              : value.message,
          stack: value.stack,
        };
        return `Error(${JSON.stringify(errorDetails)})`;
      }

      if (Array.isArray(value)) {
        return `[${value.map(stringify).join(", ")}]`;
      }

      if (value instanceof Set) {
        return `Set(${Array.from(value).map(stringify).join(", ")})`;
      }

      if (value instanceof Map) {
        return `Map(${Array.from(value.entries())
          .map(([k, v]) => `[${stringify(k)}, ${stringify(v)}]`)
          .join(", ")})`;
      }

      if (value instanceof Date) {
        return value.toISOString(); // Convert Date to ISO string
      }

      if (value instanceof RegExp) {
        return value.toString(); // Convert RegExp to string
      }

      // Handle custom object types
      const customStringify = value.toString();
      if (customStringify !== "[object Object]") {
        return customStringify;
      }

      // Default object serialization
      const entries = Object.entries(value).map(
        ([key, val]) => `"${key}": ${stringify(val)}`
      );
      return `{${entries.join(", ")}}`;
    }

    // Use String() for other data types
    return String(value);
  };

  return stringify(message);
};
