export interface TokenManager {
    generate(payload: object): string;
    verify(token: string): object | null;
}
