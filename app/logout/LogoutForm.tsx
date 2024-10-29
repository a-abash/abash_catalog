'use client'
import axios from 'axios';

export default function LogoutForm() {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/users/logout');
      console.log(response.data.message);
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return <button onClick={handleLogout} className="btn">Logout</button>;
}
