import React from 'react'
import dynamic from 'next/dynamic';

const Admin = dynamic(
  () => import("../../Components/PageComponents/Admin/Admin"),
  { ssr: false }
);

function Dashboard() {
  return (
    <div>
      <Admin />
    </div>
  )
}

export default Dashboard