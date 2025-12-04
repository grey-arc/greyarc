import crypto from "crypto";

const algorithm = "aes-256-cbc";
const secretKey = process.env.ID_SECRET_KEY;
// || "your-32-char-secret-key"; // must be 32 chars

export function encryptId(id) {
  const iv = crypto.randomBytes(16); // generate a new IV each time
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
  let encrypted = cipher.update(id.toString());
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

export function decryptId(encryptedId) {
  const parts = encryptedId.split(":");
  const iv = Buffer.from(parts.shift(), "hex");
  const encryptedText = Buffer.from(parts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
