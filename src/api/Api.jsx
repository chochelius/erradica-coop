import PocketBase from 'pocketbase';
import { cache } from 'react';

const pb = new PocketBase('https://pbe.choche.bond');

const getResultList = await pb.collection('posts').getFullList();

export default getResultList;