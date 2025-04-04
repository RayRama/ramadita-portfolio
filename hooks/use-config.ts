import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PackageManager = "pnpm" | "npm" | "yarn";
export type InstallationType = "cli" | "manual";

type Config = {
  packageManager: PackageManager;
  installationType: InstallationType;
};

const configAtom = atomWithStorage<Config>("ramadita.config", {
  packageManager: "npm",
  installationType: "cli",
});

export function useConfig() {
  return useAtom(configAtom);
}
