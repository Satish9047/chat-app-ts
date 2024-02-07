import { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { getUserInfo } from '../../services/auth';


const Dashboard: React.FC = () => {
  useEffect(() => {
    const getUser = async () => {
      const res = await getUserInfo();
      console.log(res);
    };
    getUser();
  }, [])
  return (
    <>
      <Navbar />

    </>
  )
}

export default Dashboard;