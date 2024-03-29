import { useEffect, useState } from "react";

const useAdmin = user => {
  const email = user?.email;
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setAdmin(data?.admin);
        setAdminLoading(false);
      });
  }, [user, email]);
  return [admin, adminLoading];
};

export default useAdmin;
