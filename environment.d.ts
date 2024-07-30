declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_TURSO_DB_URL: string;
    readonly NEXT_TURSO_DB_AUTH_TOKEN: string;
  }
}
