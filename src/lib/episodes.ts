import { getCollection, type CollectionEntry } from 'astro:content';

export type Episode = CollectionEntry<'episodes'>;

/** All episodes in broadcast order (oldest → newest, matching channel numbers). */
export async function getEpisodes(): Promise<Episode[]> {
  return (await getCollection('episodes')).sort((a, b) => a.data.order - b.data.order);
}

/** Episodes newest-first, for archive listings. */
export async function getEpisodesLatestFirst(): Promise<Episode[]> {
  return (await getEpisodes()).reverse();
}

/** The most recently aired episode, if any. */
export async function getLatestEpisode(): Promise<Episode | undefined> {
  const episodes = await getEpisodes();
  return episodes[episodes.length - 1];
}
