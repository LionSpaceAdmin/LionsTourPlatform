
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { PlaceHolderImages } from './placeholder-images';

// Initialize Firebase Admin SDK
initializeApp();
const db = getFirestore();

const experiences = [
  {
    id: '1',
    title: 'Echoes of the Old City',
    description: 'Walk the ancient stones of Jerusalem, where history whispers from every corner.',
    location: 'Jerusalem',
    pillar: 'Heritage',
    imageId: 'experience-1'
  },
  {
    id: '2',
    title: 'Galilee Green Hiking',
    description: 'Traverse the lush, rolling hills and serene landscapes of the Galilee.',
    location: 'Galilee Region',
    pillar: 'Nature',
    imageId: 'experience-2'
  },
  {
    id: '3',
    title: 'Tel Aviv Market Flavors',
    description: 'Taste the vibrant, diverse, and delicious pulse of Tel Aviv at the Carmel Market.',
    location: 'Tel Aviv',
    pillar: 'Artistry',
    imageId: 'experience-3'
  },
  {
    id: '4',
    title: 'Dead Sea Serenity',
    description: 'Float effortlessly in the saltiest sea on Earth and cover yourself in its healing mud.',
    location: 'Dead Sea',
    pillar: 'Nature',
    imageId: 'experience-4'
  },
  {
    id: '5',
    title: 'Gardens of Haifa',
    description: 'Find peace and perfect beauty in the stunning Baháʼí Terraces.',
    location: 'Haifa',
    pillar: 'Resilience',
    imageId: 'experience-5'
  },
  {
    id: '6',
    title: 'Bauhaus & Innovation',
    description: 'Explore the White City\'s architectural marvels and Tel Aviv\'s modern startup culture.',
    location: 'Tel Aviv',
    pillar: 'Artistry',
    imageId: 'experience-6'
  },
];


async function seedExperiences() {
  const experiencesCollection = db.collection('experiences');
  console.log('Seeding experiences...');

  for (const exp of experiences) {
    const image = PlaceHolderImages.find(img => img.id === exp.imageId);
    if (image) {
      const docRef = experiencesCollection.doc(exp.id);
      await docRef.set({
        ...exp,
        imageUrl: image.imageUrl,
        imageHint: image.imageHint
      });
      console.log(`Added experience: ${exp.title}`);
    }
  }

  console.log('Seeding complete!');
}

seedExperiences().catch(console.error);
