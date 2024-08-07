declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_TURSO_DB_URL: string;
    readonly NEXT_TURSO_DB_AUTH_TOKEN: string;
    readonly AUTH_SECRET: string;
    readonly AUTH_GITHUB_ID: string;
    readonly AUTH_GITHUB_SECRET: string;
    readonly NEXT_PUBLIC_BACKEND_URL: string;
  }
}
