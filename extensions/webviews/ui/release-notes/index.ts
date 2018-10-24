import * as sanityClient from '@sanity/client';

const getClient = () => sanityClient({
  projectId: 'v475t82f',
  dataset: 'production',
  token: 'skywTQVEqa902NDvMHoUATV9wSmVxPEdf93DVM3fvvXKSZnzGLMu0LzUNM96p8Uup2ZTBjIS5SbbQNZUSqU1KSKhnbWeMa2xhiaCprD8pcgOiWWN3r7sdppw6BgpMNT1zNJaWnyAKXmM3fjb0BNogddFHbKMOGv493lkVOTRBneZZ68tK8hj'
});

const getReleaseNotes = (): Promise<object[]> => {
  const query = '*[_type == "release"] | order(publishedDateDesc)';
  const client = getClient();
  return client.fetch(query);
};

getReleaseNotes().then(res => {
  res.forEach((item: any) => console.log(item.title));
});
