import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Delete from "src/images/delete.svg";

function Userhistory() {
  {/*요청 상태*/}
  const [users, setUsers] = useState<any>(null);
  {/*로딩 상태*/}
  const [loading, setLoading] = useState<any>(null);
  {/*에러 상태*/}
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // error users 초기화
        setError(null);
        setUsers(null);
        // loading 상태 true
        setLoading(true);
        const response = await axios.get(
          'http://localhost:8000/api/v1/plants/history'
        );
        setUsers(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return (
    <div>
      <div className="w-80 h-52 border-2 border-black rounded-lg bg-white relative">
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="text-2xl font-press-medium">Loading..</div>
      </div>
    </div>
  );
  if (error)
  return (
  <div>
  <div className="w-80 h-52 border-2 border-black rounded-lg bg-white relative">
    {/*이미지*/}
  </div>
  {/*텍스트*/}
  <div className="mt-2 flex flex-col items-center">
    {/*작물 종류*/}
    <div className="text-2xl font-press-medium">ERROR</div>
  </div>
</div>
  );
  if (!users) return null;
  return (
    <div className="">
      <div className="w-80 h-52 border-2 border-black rounded-lg bg-white relative">
        {/*이미지*/}
        <div className="absolute"></div>
        {/*삭제버튼*/}
        <img className="m-auto mt-2 mr-2" src={Delete} alt="DeleteButton" />
      </div>
      {/*텍스트*/}
      <div className="mt-2 flex flex-col items-center">
        {/*작물 종류*/}
        <div className="text-2xl font-press-medium">토마토</div>
        {/*질병*/}
        <span className="text-xl font-press-medium text-disease">잿빛 곰팡이병</span>
        {/*날짜*/}
        <span className="text-xl font-press-medium">2023-1-11</span>
      </div>
    </div>
  );
}
 
export default Userhistory;