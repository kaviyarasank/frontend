import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import { Card, Rating } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: () => void;
  id: string;
}


const getServerSideProps = async (id: string) => {

  try {
    // Fetch data from external API based on id
    if(id){
      const res = await fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res?.json())
        .then((res) => res)
        return {
          props: {
            res,
            view:true
          },
        };
    }
  } catch (error) {
    return {
      props: {
        res: null,
      },
    };
  }
};


export default function ModalPopUp({
  open,
  handleClose,
  id
}: Props) {

  const [data, setData] = React.useState<any>({})
  
  useEffect(()=>{
    getServerSideProps(id)
    .then((res:any)=>{
      if(res?.props?.view)(
        setData(res?.props?.res)
      )
    })
  },[id])

  return (
    <div >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='modalView'
      >
        <DialogTitle id="alert-dialog-title">
          {data?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
            {
              data?.reviews?.map((res:any,index:number)=>{
                return(
                  <Card key={index} className='mt-3 p-3'>
                    <div>
                      <p>Name :{res?.reviewerName}</p>
                      <p>Rating :<Rating name="read-only" value={data?.rating ||1} readOnly /></p>
                      <p>comment :{res?.comment}</p>
                      <p>Date : {res?.date?.slice(0,10)}</p>
                    </div>
                  </Card>
                )
              })
            }
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}