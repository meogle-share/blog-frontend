// 공통 타입 정의
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  role?: 'admin' | 'user'
  createdAt: string
  updatedAt: string
}

export interface Post {
  id: number
  title: string
  content: string
  excerpt: string
  author: string
  authorId: number
  publishedAt: string
  tags: string[]
  status: 'draft' | 'published' | 'archived'
  views: number
  likes: number
  createdAt: string
  updatedAt: string
}

export interface Comment {
  id: number
  postId: number
  author: string
  authorId: number
  content: string
  parentId?: number
  likes: number
  createdAt: string
  updatedAt: string
}

// API 응답 타입
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// 폼 데이터 타입
export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface PostFormData {
  title: string
  content: string
  excerpt: string
  tags: string[]
  status: 'draft' | 'published'
}

export interface CommentFormData {
  content: string
  parentId?: number
}

// 필터 및 정렬 타입
export interface PostFilters {
  status?: 'draft' | 'published' | 'archived'
  author?: string
  tags?: string[]
  dateRange?: {
    start: string
    end: string
  }
}

export type PostSortBy = 'newest' | 'oldest' | 'popular' | 'title'

// 알림 타입
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
}

// 테마 타입
export type Theme = 'light' | 'dark' | 'system'
