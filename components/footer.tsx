import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export function Footer() {
  return (
    <footer className="screen-line-before border-x border-grid pt-4 pb-[env(safe-area-inset-bottom,0px)]">
      <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
        Inspired by chanhdai.com.
      </p>

      <p className="mb-4 text-center font-mono text-sm text-balance text-muted-foreground">
        Built by{" "}
        <a
          className="link"
          href="https://linkedin.com/in/rayramadita"
          target="_blank"
          rel="noopener noreferrer"
        >
          RayRama
        </a>
        . The source code is available on{" "}
        <a
          className="link"
          href={SOURCE_CODE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
