import PocketBase from 'pocketbase';
import { cache } from 'react';

const pb = new PocketBase('https://pbe.choche.bond');

const getResultList = async () => {
    try {
        const resultList = await pb.collection('results').getFullList();
        return resultList;
    } catch (error) {
        console.error('Error fetching results:', error);
        return [];
    }
};


export default getResultList;