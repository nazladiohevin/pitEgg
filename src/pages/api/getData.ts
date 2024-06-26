// pages/api/addData.ts

import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { run } from "@/firebase/serverless-config";

run();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = admin.database();
    const electricityRef = db.ref('/user/1/electricity');
    const dataRef = db.ref('/user/1/recap/electricity');

    // Ambil data dari endpoint /user/1/electricity
    electricityRef.once('value', (snapshot) => {
      const electricityData = snapshot.val();
      console.log(electricityData);

      if (electricityData) {
        // Tambahkan data ke /user/1/data
        dataRef.set(electricityData, (error) => {
          if (error) {
            res.status(500).json({ error: 'Failed to add data to Firebase' });
          } else {
            res.status(200).json({ message: 'Data added to Firebase successfully' });
          }
        });
      } else {
        res.status(404).json({ error: 'No electricity data found' });
      }
    }, (error) => {
      res.status(500).json({ error: `Failed to retrieve electricity data: ${error.message}` });
    });
  } catch (error) {
    res.status(500).json({ error: `Error occurred: bruh` });
  }
}
