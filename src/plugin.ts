import { Plugin } from "vite";

const importFallback = ({ parameterName = "f" } = {}): Plugin => ({
  name: "import-fallback",
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

export default importFallback;
