"use client";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import Button from '../common/button/button-component';
import BlogForm from '../component/blog/add-blog-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px', // Set the border radius to 20px
  boxShadow: 24,
  p: 4,
};

function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchBlog = async() =>{

  } 

  useEffect(() => {
    
  })


  return (
    <section className="product-page w-full h-[80vh]">
      <Button
        handleClick={handleOpen}
        className="add-product-btn rounded-2xl  bg-[#5545df]  text-white font-normal px-7 py-3"
        name="Add Blog +"
      />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
           <BlogForm />
          </Box>
        </Modal>

        <div className="blog-container">

        </div>
  
    </section>
  );
}

export default Page;
