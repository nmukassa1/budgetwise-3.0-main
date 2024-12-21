import { useState, useEffect } from "react";
import { currencyFormat } from "@/lib/utils";
import { PotType } from "@/lib/types";

interface UseAddWithdrawFormProps {
  potItem: PotType;
  selectedAction: string | null;
  setOpenDrawer: (open: boolean) => void;
  state: { results?: { message?: string }; errors?: Record<string, string[]> };
}

export function useAddWithdrawForm({
  potItem,
  selectedAction,
  setOpenDrawer,
  state,
}: UseAddWithdrawFormProps) {
  const [formData, setFormData] = useState({
    name: potItem?.name,
    potId: potItem?.id,
    amount: "",
    repeat: false,
    selectedAction,
  });

  const [transactionName, setTransactionName] = useState("");

  const handleTransactionName = () => {
    return selectedAction === "withdraw" ? "You withdrew" : "You've added";
  };

  useEffect(() => {
    setTransactionName(handleTransactionName());

    // Reset amount field when action changes
    setFormData((prevFormData) => ({
      ...prevFormData,
      amount: "",
    }));
  }, [selectedAction]);

  const formatTransaction = (amount: string) => {
    if (selectedAction === "withdraw") {
      return -Math.abs(Number(amount));
    }
    return amount;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? formatTransaction(currencyFormat(value)) : value,
    });
  };

  useEffect(() => {
    if (state?.results?.message) {
      setOpenDrawer(false);
    }
  }, [state, setOpenDrawer]);

  return {
    formData,
    transactionName,
    handleChange,
  };
}
