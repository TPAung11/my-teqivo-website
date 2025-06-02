'use server'

import connectDB from '@/lib/mongodb'
import { MongoClient, Db } from 'mongodb'

interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export async function submitContact(formData: ContactFormData) {
  try {
    await connectDB()
    const client = await MongoClient.connect(process.env.MONGODB_URI as string)
    const db = client.db()

    // Add timestamp to the form data
    const contactData = {
      ...formData,
      createdAt: new Date(),
      status: 'new'
    }

    // Insert into MongoDB
    const result = await db.collection('contacts').insertOne(contactData)

    if (!result.insertedId) {
      throw new Error('Failed to insert contact')
    }

    await client.close()
    return { success: true }
  } catch (error) {
    console.error('Error submitting contact:', error)
    throw new Error('Failed to submit contact form')
  }
}