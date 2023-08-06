import { Button } from "@mui/material";
import React from "react";
import { api } from "~/utils/api";

const CreateMockTransaction = () => {
  const { mutate, isLoading: isPosting } =
    api.transaction.createTransaction.useMutation({
      onSuccess: () => {
        console.info("created mock transaction successfully");
      },
      onError: (e) => {
        const errorMessage = e.data?.zodError?.fieldErrors.content;
        if (errorMessage?.[0]) {
          console.error(errorMessage[0]);
        } else {
          console.error("Failed to post! Please try again later.");
        }
      },
    });

  const handleCreateMockTransaction = () => {
    const content = {
      credit: 100,
      debit: 0,
      description: "Mock Transaction",
    };

    mutate(content);
  };

  return (
    <Button
      onClick={() => handleCreateMockTransaction()}
      disableElevation={isPosting}
    >
      Create Mock Transaction
    </Button>
  );
};

export default CreateMockTransaction;
