'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from "swr"



interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}


function CreateModal(props: IProps) {

    const { showModalCreate, setShowModalCreate } = props;

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);


    const handleSubmit = () => {

        handleFileUpload

        if (!title) {
            toast.error("Not empty title!!!")
            return;
        }
        if (!author) {
            toast.error("Not empty author!!!")
            return;
        }
        if (!content) {
            toast.error("Not empty content!!!")
            return;
        }


        fetch("http://localhost:8000/blogs", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                title, author, content
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Create new blog succeed!!!");
                    handleCloseModal();
                    mutate("http://localhost:8000/blogs") //  tự động gọi lại dữ liệu .
                }
            });


    }

    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setFile(null);
        setImagePreviewUrl(null);
        setShowModalCreate(false);
    }



    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
            setFile(file);
            setAuthor(file.name);
        } else {
            setImagePreviewUrl(null);
        }
    };

    // Trong một component React
    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('File uploaded successfully');
            } else {
                console.error('Upload failed');
            }
        }
    };



    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={() => setShowModalCreate(false)}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New A Champion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder={title} value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="file" onChange={handleFileChange} />
                            {imagePreviewUrl && <img src={imagePreviewUrl} style={{ maxWidth: '100%', height: 'auto' }} />}
                        </Form.Group>
                        {/* <Form.Group className="mb-3" >
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" placeholder="..." value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </Form.Group> */}
                        {/* <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" placeholder="Tên file sẽ hiển thị ở đây..." value={author} readOnly />
                        </Form.Group> */}
                        <Form.Group className="mb-3" >
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;
