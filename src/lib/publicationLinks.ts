import type { Publication } from '@/types/publication';

export function getArticleHomepage(pub: Publication): string | null {
  if (pub.homepage) return pub.homepage;
  if (pub.url) return pub.url;
  if (pub.doi) return `https://doi.org/${pub.doi}`;
  if (pub.arxivId) return `https://arxiv.org/abs/${pub.arxivId}`;

  const arxivSource = `${pub.journal || ''} ${pub.conference || ''}`;
  const arxivMatch = arxivSource.match(/arXiv:?\s*(\d{4}\.\d{4,5})(v\d+)?/i);

  return arxivMatch ? `https://arxiv.org/abs/${arxivMatch[1]}${arxivMatch[2] || ''}` : null;
}
