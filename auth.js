const users = []; // Simulating a database

function registerUser(name, email, password, role = "consumer") {
  const user = {
    id: Date.now().toString(),
    name,
    email,
    password, // In real apps, hash this!
    role,
  };
  users.push(user);
  return user;
}

function loginUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return null;
  const token = generateToken(user);
  return { user, token };
}

function generateToken(user) {
  // Simulating a token
  return btoa(JSON.stringify({ id: user.id, role: user.role }));
}

function verifyToken(token) {
  try {
    return JSON.parse(atob(token));
  } catch (e) {
    return null;
  }
}

// Expose functions
export { registerUser, loginUser, verifyToken };
