import { Plugin } from "vite";

const moduleFallback = ({ parameterName = "f" } = {}): Plugin => ({
  name: "module-fallback",
  enforce: "pre",
  // @ts-ignore
  async resolveId(id, importer, options) {
    if (id.includes("?")) {
      const [module, params] = id.split("?");
      const searchParams = new URLSearchParams(params);
      const fallback = searchParams.get(parameterName);

      if (fallback) {
        return (
          (await this.resolve(module, importer, options)) ||
          (await this.resolve(fallback, importer, options))
        );
      }
    }
  },
});

export default moduleFallback;
