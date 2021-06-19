import { useMemo } from 'react';
import Config from 'react-native-config';
import useSWR from 'swr';

const API_URL = 'https://api.themoviedb.org';
const API_VERSION = '3';
const API_KEY = Config.TMDB_API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export type TVShow = {
  name: string;
  description: string;
  imageUrl: string;
};

export const usePopularTVShows = (): { data: TVShow[]; loading: boolean } => {
  const { data, error, isValidating } = useSWR(
    `${API_URL}/${API_VERSION}/tv/popular?api_key=${API_KEY}`,
  );

  const tvShows = useMemo(() => {
    if (!data) {
      return [];
    }

    if (error) {
      return [];
    }

    if (data?.results?.length > 0) {
      return data.results
        .map((item: Record<string, unknown>) => ({
          name: item.original_name,
          description: item.overview || null,
          imageUrl: item.backdrop_path
            ? `${IMAGE_URL}${item.backdrop_path}`
            : null,
        }))
        .filter((item: TVShow) => item.imageUrl && item.description);
    }

    return [];
  }, [data, error]);

  return {
    data: tvShows,
    loading: isValidating && !error && tvShows.length === 0,
  };
};
