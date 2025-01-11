"use client";

import { useEffect } from "react";
import { usePot } from "@/lib/context/PotContext";
import { getTransactionsById } from "@/lib/queries";
import Header from "./Header";
import AddWithdrawButtons from "./AddWithdrawButtons";
import Goals from "./Goals";
import { PotType } from "@/lib/types";
import DrawerContainerScreen from "@/components/DrawContainerScreen";
import Transactions from "@/components/Transactions";


export default function PotItemSummary() {
  const { filteredPot: potItem, openDrawer, setOpenDrawer } = usePot();

  useEffect(() => {
    async function fetchTransactions() {
      try {
        if (potItem?.id) {
          await getTransactionsById(potItem.id, "pot_id");
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    fetchTransactions();
  }, [potItem?.id]);

 

  return (
    <DrawerContainerScreen openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} position="top">
      <div className="mobile-container flex flex-col items-center text-white py-4">
        <Header />
        {potItem && (
          <>
            <CurrentBalance potItem={potItem} />
            <AddWithdrawButtons potItem={potItem}  />
            <Transactions id={potItem.id} match="pot_id" />
          </>
        )}
        <Goals />
      </div>
    </DrawerContainerScreen>
  );
}

function CurrentBalance({ potItem }: { potItem: PotType }) {
  return <div className="current_amount w-fit text-2xl mt-6">£{potItem?.current_amount?.toLocaleString() || 0}</div>;
}
