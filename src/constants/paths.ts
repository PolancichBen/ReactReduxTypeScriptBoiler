export const PATHS = {
  landing: { path: '/', isAdmin: false },
  contact: { path: '/contact', isAdmin: false },
  profile: { path: '/profile/:userId', isAdmin: false },
  admin: { path: '/admin', isAdmin: true },
  playground: { path: '/playground', isAdmin: true },
  user: { path: '/user/:id', isAdmin: true },
};
