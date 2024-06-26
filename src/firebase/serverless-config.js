import admin from "firebase-admin";
import path from "path";
import fs from "fs";

// Firebase SDK initialize

const run = () => {
  const serviceAccountPath = path.join(
    process.cwd(),
    "src/config/pitegg-service-account-key.json"
  );

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"))
      ),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  }
};

export { run };
