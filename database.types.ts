export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      challenges: {
        Row: {
          created_at: string;
          from: string;
          id: string;
          is_approved: boolean;
          published_at: string | null;
          to: string;
        };
        Insert: {
          created_at?: string;
          from: string;
          id?: string;
          is_approved?: boolean;
          published_at?: string | null;
          to: string;
        };
        Update: {
          created_at?: string;
          from?: string;
          id?: string;
          is_approved?: boolean;
          published_at?: string | null;
          to?: string;
        };
        Relationships: [];
      };
      journeys: {
        Row: {
          challenge_id: string;
          clicks: number;
          created_at: string;
          finished_at: string | null;
          id: string;
          started_at: string | null;
          user_id: string;
        };
        Insert: {
          challenge_id: string;
          clicks?: number;
          created_at?: string;
          finished_at?: string | null;
          id?: string;
          started_at?: string | null;
          user_id: string;
        };
        Update: {
          challenge_id?: string;
          clicks?: number;
          created_at?: string;
          finished_at?: string | null;
          id?: string;
          started_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "journeys_challenge_id_fkey";
            columns: ["challenge_id"];
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "journeys_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          apple_session_id: string | null;
          created_at: string | null;
          id: string;
        };
        Insert: {
          apple_session_id?: string | null;
          created_at?: string | null;
          id?: string;
        };
        Update: {
          apple_session_id?: string | null;
          created_at?: string | null;
          id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
