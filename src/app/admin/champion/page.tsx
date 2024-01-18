'use client'
import Link from 'next/link';
import { useEffect } from 'react';
import useSWR from 'swr';
import AppTable from '@/components/app.table';


export default function Home() {

  // chỉ lấy dữ liệu 1 lần . không gọi lại mỗi lần load trang, hay chuyển trang
  const fetcher = (url: string) => fetch(url)
    .then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );


  if (!data) {
    return <div>loading...</div>;
  }


  return (
    <div>

      <AppTable
        blogs={data?.sort((a: any, b: any) => b.id - a.id)}
      />



    </div>
  )
}
