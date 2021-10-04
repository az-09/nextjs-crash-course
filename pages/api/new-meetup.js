// /api/new-meetup

import {MongoClient} from 'mongodb'

export default async function handler(req, res) {
    if (req.method=='POST'){
        const data = req.body
        
        const client = await MongoClient.connect(process.env.MONGODB)
        const db = client.db()

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)
        client.close()

        res.status(201).json({message: 'Meeup inserted'})
    }
}