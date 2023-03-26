// @utils/database.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          context: string | null
          created_at: string | null
          id: number
          post_id: number | null
          user_id: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          id?: number
          post_id?: number | null
          user_id?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string | null
          id?: number
          post_id?: number | null
          user_id?: string | null
        }
      }
      links: {
        Row: {
          created_at: string | null
          id: number
          title: string | null
          url: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          title?: string | null
          url?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          title?: string | null
          url?: string | null
          user_id?: string | null
        }
      }
      posts: {
        Row: {
          context: string | null
          created_at: string | null
          id: number
          is_published: boolean | null
          title: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          id?: number
          is_published?: boolean | null
          title?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string | null
          id?: number
          is_published?: boolean | null
          title?: string | null
        }
      }
      products: {
        Row: {
          created_at: string
          data: Json | null
          description: string | null
          id: number
          image: string | null
          inserted_at: string
          is_published: boolean | null
          price: number | null
          product_id: string | null
          product_status: boolean | null
          quality: number | null
          sku: number | null
          title: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          data?: Json | null
          description?: string | null
          id?: number
          image?: string | null
          inserted_at?: string
          is_published?: boolean | null
          price?: number | null
          product_id?: string | null
          product_status?: boolean | null
          quality?: number | null
          sku?: number | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          data?: Json | null
          description?: string | null
          id?: number
          image?: string | null
          inserted_at?: string
          is_published?: boolean | null
          price?: number | null
          product_id?: string | null
          product_status?: boolean | null
          quality?: number | null
          sku?: number | null
          title?: string | null
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          data: Json | null
          id: number
          inserted_at: string
          updated_at: string
          user_id: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          data?: Json | null
          id?: number
          inserted_at?: string
          updated_at?: string
          user_id?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          data?: Json | null
          id?: number
          inserted_at?: string
          updated_at?: string
          user_id?: string | null
          username?: string | null
        }
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          customer_id: string | null
          data: Json | null
          email: string | null
          first_name: string | null
          full_name: string | null
          id: number
          inserted_at: string
          is_admin: boolean | null
          is_shown: boolean | null
          last_name: string | null
          password: string | null
          updated_at: string
          user_id: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          customer_id?: string | null
          data?: Json | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: number
          inserted_at?: string
          is_admin?: boolean | null
          is_shown?: boolean | null
          last_name?: string | null
          password?: string | null
          updated_at?: string
          user_id?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          customer_id?: string | null
          data?: Json | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: number
          inserted_at?: string
          is_admin?: boolean | null
          is_shown?: boolean | null
          last_name?: string | null
          password?: string | null
          updated_at?: string
          user_id?: string | null
          username?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
