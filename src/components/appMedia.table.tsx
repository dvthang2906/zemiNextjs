'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import UpdateModal from './update.modal';

import { useState } from 'react';


interface MediaData {
    type: string;
    images: string;
    title: string;
    id: null | undefined;
    blogs: MediaData[];
}



const AppTable = (data: MediaData) => {
    const { blogs } = data;


    // Sử dụng IBlog cho kiểu dữ liệu của state currentBlog
    const [blog, setBlog] = useState<MediaData | null>(null);
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);


    // Cập nhật kiểu dữ liệu đầu vào cho handleEdit thành IBlog
    const handleEdit = (blog: MediaData) => {
        setBlog(blog); // Lưu trữ thông tin blog hiện tại
        setShowModalUpdate(true); // Hiển thị modal chỉnh sửa
    };

    return (
        <>
            <div className='mb-3'
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table Blogs</h3>
                <Button variant='secondary'
                    onClick={() => setShowModalCreate(true)}>
                    Add New Media</Button>
            </div>

            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Images</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.images}</td>
                                <td>{item.type}</td>
                                <td>
                                    <Button>View</Button>
                                    {/* Gọi handleEdit với đối tượng blog cụ thể */}
                                    <Button variant='warning' className='mx-3' onClick={() => handleEdit(item)}>Edit</Button>
                                    <Button variant='danger'>Delete</Button>

                                </td>
                            </tr>

                        )
                    })}

                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            {/* <UpdateModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog}
            /> */}
        </>
    );
}

export default AppTable;