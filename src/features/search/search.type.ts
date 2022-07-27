import { Article } from '../../app/types';

export enum SortBy {
  Popularity = 'popularity',
  PublishedAt = 'publishedAt',
}

export interface ArticleReq extends Record<string, string> {
  q: string;
  page: string;
  sortBy: SortBy;
}

export interface ArticleRes {
  status: string;
  totalResults: number;
  articles: Article[];
}
