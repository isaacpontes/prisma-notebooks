import bcrypt from "bcrypt";
import { Encryptor } from "../../domain/helpers/Encryptor";

export class BcryptAdapter implements Encryptor {
  hash(value: string) {
    return bcrypt.hash(value, 10);
  }

  compare(value: string, hashedValue: string) {
    return bcrypt.compare(value, hashedValue);
  }
}
