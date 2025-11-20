import React from 'react'
import useAuth from '../../../Hooks/useAuth'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";

const MyParcels = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: parcels = []} = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data
    }
  })

  return (
    <div>
      <p>my parcel {parcels.length}</p>
    </div>
  )
}

export default MyParcels
