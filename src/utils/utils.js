import { supabase, signUpEmailPassword } from './supabase';

const putUserInDB = async (id, name, email, profilePicture = '') => {
  const { error } = await supabase
    .from('users')
    .insert({ id, name, email, profilePicture });
  if (error) console.log(error);
};

export const signUpHandler = async (name, email, password) => {
  const { data, error } = await signUpEmailPassword(email, password);
  if (error) {
    console.log(error);
    return error.message;
  }
  console.log('user created');
  await putUserInDB(data.user.id, name, email);
  return 'success';
};

export const isUserLoggedIn = async () => {
  const user = await supabase.auth.getUser();
  if (user.data.user) return true;
  return false;
};

export const getUserInfo = async () => {
  const user = await supabase.auth.getUser();
  if (user.data.user) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('id', user.data.user.id);

    return data[0];
  }

  return {
    id: '',
    name: '',
    email: '',
    profilePicture: '',
    created_at: '',
  };
};
export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const logout = () => {
  const { error } = supabase.auth.signOut();
  error && console.log(error);
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  console.log(data, error);
};

export const signInWithGitHub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
  console.log(data, error);
};

supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    putNewUserInDB();
  }
});

const putNewUserInDB = async () => {
  const response = await supabase.auth.getUser();
  const id = response.data.user.id;
  const { full_name, email, picture } = response.data.user.user_metadata;
  const { data, error } = await supabase.from('users').select().eq('id', id);
  if (data.length === 0) {
    putUserInDB(id, full_name, email, picture);
  }
  return;
};
