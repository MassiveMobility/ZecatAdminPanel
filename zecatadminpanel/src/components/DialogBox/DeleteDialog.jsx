import { Box, Button, Dialog, DialogActions, DialogContent, Slide, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { endPoints } from '../../api/endpoint';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const DeleteDialog = ({open, onClose, productId, endpoint}) => {

    const deleteProduct = async () => {
        try {
          const deletedProduct = await axios.delete(endpoint + productId)
          onClose()
          window.location.reload(true)
        } catch (error) {
          console.log("error occured", error);
        }
      }
  return (
    <Dialog
    sx={{
        borderRadius: "12px",  
    }}
    fullWidth
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
     
      <DialogContent sx={{padding:"32px", mb:'32px'}}>
       <Box>
       <Typography fontWeight={'bold'}>Are you sure, you want to delete this product?</Typography>
       </Box>
      </DialogContent>
      <DialogActions sx={{justifyContent:"flex-end",padding:"24px 32px"}}>
        <Button sx={{
            fontFamily:"myThirdFont",
            padding:"12px 24px",
            bgcolor:"#e50000",
            letterSpacing:"2px",
            color:"#fff",
            maxWidth:"120px",
            width:"100%",
            borderRadius:"8px",
            "&:hover":{
                bgcolor:"#e50000",
                color:"#fff",
            }
        }} onClick={deleteProduct}>Delete</Button>
        <Button
         sx={{
            fontFamily:"myThirdFont",
            padding:"12px 24px",
            bgcolor:"#FFF",
            letterSpacing:"2px",
            color:"#944040",
            maxWidth:"120px",
            width:"100%",
            borderRadius:"8px",
            border:"1px solid #944040",
            "&:hover":{
                bgcolor:"#fff",
                color:"#944040",
            }
        }}
        onClick={onClose}>CANCEL</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog