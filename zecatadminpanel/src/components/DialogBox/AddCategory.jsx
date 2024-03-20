import {
    Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Headers = ({text}) => {
    return(
        <Typography color={"#2f2f2f"} fontSize={'14px'} fontFamily={'mySecondFont'}>
            {text}
        </Typography>
    )
}

const AddCategory = ({ open, onClose }) => {
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
      <DialogTitle
        sx={{
          color: "#1B1B1B",
          fontSize: "18px",
          fontFamily: "mySecondFont",
          padding:"24px 32px"
        }}
      >
        {"Add new category"}
      </DialogTitle>
      <DialogContent sx={{padding:"32px"}}>
       <Box>
        <Headers text={"Category name"} />
        <input type="text"  placeholder="Enter the variant name here" style={{fontFamily: "myFourthFont",padding:"12px 16px", borderRadius:"8px", border:"1px solid rgba(47, 47, 47, 0.25)", width:"100%", marginTop:"4px", outline:"none"}}/>
       </Box>
       <Box mt={'24px'}>
        <Headers text={"Slug"} />
        <input type="text"  placeholder="Enter the variant name here" style={{fontFamily: "myFourthFont",padding:"12px 16px", borderRadius:"8px", border:"1px solid rgba(47, 47, 47, 0.25)", width:"100%", marginTop:"4px", outline:"none"}}/>
       </Box>
       <Box  mt={'24px'}>
        <Headers text={"Category description"} />
        <textarea rows={4} placeholder="Enter the variant name here" style={{fontFamily: "myFourthFont",resize:"none", padding:"12px 16px", borderRadius:"8px", border:"1px solid rgba(47, 47, 47, 0.25)", width:"100%", marginTop:"4px", outline:"none"}}/>
       </Box>
      </DialogContent>
      <DialogActions sx={{justifyContent:"flex-start",padding:"24px 32px"}}>
        <Button sx={{
            fontFamily:"myThirdFont",
            padding:"12px 24px",
            bgcolor:"#2079FF",
            letterSpacing:"2px",
            color:"#fff",
            maxWidth:"240px",
            width:"100%",
            borderRadius:"8px",
            "&:hover":{
                bgcolor:"#2079FF",
                color:"#fff",
            }
        }} onClick={onClose}>ADD CATEGORY</Button>
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
  );
};

export default AddCategory;
