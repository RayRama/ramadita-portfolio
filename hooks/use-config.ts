import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const packageManager = "pnpm" | "npm" | "yarn";
export const installationType = "cli" | "manual";

type Config = {
  packageManager: packageManager;
  installationType: installationType;
};

const configAtom = atomWithStorage<Config>("ramadita.config", {
  packageManager: "npm",
  installationType: "cli",
});

export function useConfig() {
  return useAtom(configAtom);
}
