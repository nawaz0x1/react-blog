import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vuezwbvzhjiqympgopbc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZXp3YnZ6aGppcXltcGdvcGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNDY3NzEsImV4cCI6MjAwMzYyMjc3MX0.BSJ7EpGkgAqYQiZJavfRrW_oyRdVC8y2UBfW666IMHk';
export const supabase = createClient(supabaseUrl, supabaseKey);

// This function will create user form email and password and return {data, error} object

export const signUpEmailPassword = (email, password) => {
  return supabase.auth.signUp({ email, password });
};
