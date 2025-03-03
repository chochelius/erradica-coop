import PocketBase from 'pocketbase';


const pb = new PocketBase('https://pocketbase.erradica.cl');

const fetchAllPosts = () => {
  try {
    const data = pb.collection('posts').getFullList(
      { sort: '+id' }
    );
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export default fetchAllPosts;