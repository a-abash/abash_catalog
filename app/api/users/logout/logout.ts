// pages/api/users/logout.ts
export function logout(req, res) {
  if (req.method === 'POST') {
    // Використовуй лише для зручності, можна не мати цього API
    res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
