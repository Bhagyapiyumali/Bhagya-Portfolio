/*
  # Create Volunteering Experience Table

  1. New Tables
    - `volunteering_experiences`
      - `id` (uuid, primary key)
      - `title` (text) - Title of volunteering role
      - `organization` (text) - Organization name
      - `description` (text) - Description of volunteer work
      - `image_url` (text) - URL to volunteering photo
      - `start_date` (date) - When volunteering started
      - `end_date` (date) - When volunteering ended
      - `skills` (text array) - Skills gained
      - `display_order` (integer) - Order to display
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `volunteering_experiences` table
    - Add policy for public read access
    - Add policy for authenticated users to manage entries

  3. Features
    - Display order allows custom ordering in UI
    - Image URLs point to external storage (Supabase Storage or CDN)
    - Skills stored as array for filtering and display
*/

CREATE TABLE IF NOT EXISTS volunteering_experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  organization text NOT NULL,
  description text NOT NULL,
  image_url text,
  start_date date NOT NULL,
  end_date date,
  skills text[] DEFAULT '{}',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE volunteering_experiences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read volunteering experiences"
  ON volunteering_experiences
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage volunteering experiences"
  ON volunteering_experiences
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
