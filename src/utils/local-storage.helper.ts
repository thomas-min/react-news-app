const PREFIX = 'new_app';
const addPrefix = (key: string) => `${PREFIX}_${key}`;

const localStorageWrapper = {
  get<T>(key: string): T | null {
    const item = localStorage.getItem(addPrefix(key));
    if (item) return JSON.parse(item);
    return null;
  },

  set<T>(key: string, value: T): void {
    localStorage.setItem(addPrefix(key), JSON.stringify(value));
  },

  remove(key: string): void {
    localStorage.removeItem(addPrefix(key));
  },

  clear(): void {
    for (const key in localStorage) {
      if (key.startsWith(PREFIX)) localStorage.removeItem(key);
    }
  },
};

export default localStorageWrapper;
