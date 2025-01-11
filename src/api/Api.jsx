import PocketBase from 'pocketbase';


const pb = new PocketBase('https://pbe.choche.bond');

const fetchAllPosts = () => {
  try {
    const data = pb.collection('posts').getFullList();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export default fetchAllPosts;