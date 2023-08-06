import { Box, Button, LinearProgress, Modal, Typography } from "@mui/material";
import React from "react";
import MonerisCardVerification from "~/lib/moneris/components/MonerisMco";
import { type MonerisReceiptResponse } from "~/lib/moneris/types/moneris";
import { api } from "~/utils/api";

const CreateRegisteredCard = () => {
  const [open, setOpen] = React.useState(false);

  const ctx = api.useContext();

  const { mutate, isLoading } =
    api.registerdCards.createRegisteredCard.useMutation({
      onSuccess: () => {
        void ctx.registerdCards.getRegisteredCards.invalidate();
      },
    });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleRegisterCardSuccess = (data: MonerisReceiptResponse) => {
    setOpen(false);
    mutate({
      mask: data.response.receipt.cc.tokenize.first4last4,
      dataKey: data.response.receipt.cc.tokenize.datakey,
      issuerId: data.response.receipt.cc.issuer_id,
      date: data.response.receipt.cc.expiry_date,
    });
  };

  if (isLoading) return <LinearProgress />;
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        ADD New Card
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MonerisCardVerification handleReceipt={handleRegisterCardSuccess} />
        </Box>
      </Modal>
    </>
  );
};

export default CreateRegisteredCard;
