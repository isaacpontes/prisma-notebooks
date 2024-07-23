import { TokenManager } from "../../domain/helpers/TokenManager";
import jwt from "jsonwebtoken";

export class JwtAdapter implements TokenManager {
  private secret = "secret-key";

  generate(payload: object): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1d" });
  }

  verify(token: string): object | null {
    try {
      return jwt.verify(token, this.secret) as object;
    } catch (error) {
      return null;
    }
  }
}
