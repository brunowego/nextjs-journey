import { type UseQueryResult, useQuery } from '@tanstack/react-query'

import type { User } from '@acme/db/types'

import api from '@/lib/api'

export type SearchParams = {
  search?: string
  sortBy?: string
  page?: number
}

const cleanParams = (params: SearchParams) => ({
  ...Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value != null && value !== '',
    ),
  ),
})

const userKeys = {
  getUsers: (searchParams: SearchParams) =>
    ['users', 'list', cleanParams(searchParams)] as const,
  getUsersCount: (searchParams: SearchParams) =>
    ['users', 'count', cleanParams(searchParams)] as const,
}

const fetchUsers = async (params: SearchParams) => {
  return (await api
    .get('users', {
      params,
    })
    .then((res) => res.data)) as Promise<User[]>
}

const fetchUsersCount = async (params: SearchParams) => {
  return (await api
    .get('users/count', {
      params,
    })
    .then((res) => res.data)) as Promise<{
    total: number
  }>
}

const useUsers = (
  searchParams: SearchParams,
): UseQueryResult<User[] | undefined, Error> => {
  return useQuery({
    queryKey: userKeys.getUsers(searchParams),
    queryFn: () => fetchUsers(searchParams),
  })
}

const useUsersCount = (
  searchParams: SearchParams,
): UseQueryResult<{ total: number } | undefined, Error> => {
  return useQuery({
    queryKey: userKeys.getUsersCount(searchParams),
    queryFn: () => fetchUsersCount(searchParams),
  })
}

export { userKeys, fetchUsers, fetchUsersCount, useUsers, useUsersCount }
