import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildScopedDirectories, createDropkitPlugin } from "cursed-dropkit";

export type CreateVfpStyleDropkitPluginOptions = {
  service?: string;
  namespace?: string;
  includeGlobal?: boolean;
  includeProject?: boolean;
  summaryToolName?: string | false;
};

/// Create a ready-to-customize dropkit plugin using this package defaults.
export function createVfpStyleDropkitPlugin(options: CreateVfpStyleDropkitPluginOptions = {}) {
  const packageRoot = dirname(fileURLToPath(import.meta.url));
  const pluginRootDir = join(packageRoot, "files");

  return createDropkitPlugin({
    service: options.service ?? "dropkit-vfp-style",
    summaryToolName: options.summaryToolName,
    directories: (root) =>
      buildScopedDirectories({
        pluginRootDir,
        root,
        namespace: options.namespace ?? "dropkit-vfp-style",
        includeGlobal: options.includeGlobal,
        includeProject: options.includeProject,
      }),
  });
}
