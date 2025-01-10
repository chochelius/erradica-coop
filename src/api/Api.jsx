import PocketBase from 'pocketbase';
import { cache } from 'react';

const pb = new PocketBase('https://pbe.choche.bond/');

const getResultList = async () => {
         await pb.collection('posts').getFullList();
        const resultList = await pb.collection('posts').getFullList();
        console.log('Result List:', resultList)
        return resultList;
    
};


export default getResultList;