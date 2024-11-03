import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-13',
  token: process.env.SANITY_TOKEN // Required for writing data
});

export async function getMenu() {
  return client.fetch(`
    *[_type == "category"] {
      name,
      items[] {
        name,
        price,
        description
      }
    }
  `);
}

export async function createReservation(reservationData: {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  status?: string;
}) {
  return client.create({
    _type: 'reservation',
    status: 'pending',
    createdAt: new Date().toISOString(),
    ...reservationData
  });
}