import type { QueryOptions } from '@tanstack/vue-query'
import { unInstance } from '@/service'

interface GITHUB {
  owner: {
    archive_url: string
    login: string
  }
  full_name: string
  html_url: string
}

interface GridObj {
  src: string
  url: string
  title: string
}

interface CardObj {
  imgUrl: string
  title: string
  price: string
  vipPrice: string
  shopDesc: string
  delivery: string
  shopName: string
}

export function fetchGitHubRepo(repo: string) {
  return {
    queryKey: [repo, 'repos'],
    queryFn: async () => (await unInstance.get<GITHUB>(`repos/${repo}`)).data,
  }
}

export type { GridObj, CardObj }
