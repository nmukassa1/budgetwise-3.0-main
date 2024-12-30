"use client";

import { useEffect, useState } from "react";
import { usePot } from "@/lib/context/PotContext";
import { getTransactionsById } from "@/lib/queries";
import Header from "./Header";
import AddWithdrawButtons from "./AddWithdrawButtons";
import Goals from "./Goals";
import { PotType } from "@/lib/types";
import DrawerContainerScreen from "@/components/DrawContainerScreen";
import Transactions from "@/components/Transactions";

interface PotItemSummaryProps {
  togglePotSummary: boolean;
  setTogglePotSummary: (value: boolean) => void;
}

export default function PotItemSummary({ togglePotSummary, setTogglePotSummary }: PotItemSummaryProps) {
  const { pot: potItem } = usePot();


  const [reFetchTransactions, setReFetchTransactions] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        await getTransactionsById(potItem.id, "pot_id");
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    fetchTransactions();
  }, [potItem.id]);

 

  return (
    <DrawerContainerScreen openDrawer={togglePotSummary} setOpenDrawer={setTogglePotSummary} position="top">
      <div className="h-screen mobile-container flex flex-col items-center text-white py-4">
        <Header />
        <CurrentBalance potItem={potItem} />
        <AddWithdrawButtons potItem={potItem}  />
        <Transactions id={potItem.id} match="pot_id" />
        <Goals />
      </div>
    </DrawerContainerScreen>
  );
}

function CurrentBalance({ potItem }: { potItem: PotType }) {
  return <div className="current_amount w-fit text-2xl mt-6">£{potItem?.current_amount?.toLocaleString() || 0}</div>;
}
