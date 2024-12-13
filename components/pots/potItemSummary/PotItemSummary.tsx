"use client";

import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { usePot } from "@/lib/context/PotContext";
import AddWithdrawMenu from "./AddWithdrawMenu";
import { getTransactionsById } from "@/lib/queries";
import Header from "./Header";
import AddWithdrawButtons from "./AddWithdrawButtons";
import Activities from "./Activities";
import Goals from "./Goals";
import { PotType } from "@/lib/types";

interface PotItemSummaryProps {
  togglePotSummary: boolean;
  setTogglePotSummary: (value: boolean) => void;
}

export default function PotItemSummary({ togglePotSummary, setTogglePotSummary }: PotItemSummaryProps) {
  const { pot: potItem } = usePot();

  const [openAddWithdrawMenu, setOpenAddWithdrawMenu] = useState(false);
  const [addWithdrawMenuAction, setAddWithdrawMenuAction] = useState<{ withdrawOrAdd: string }>({ withdrawOrAdd: "" });

  const [reFetchTransactions, setReFetchTransactions] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const transactions = await getTransactionsById(potItem.id);
        // Process transactions if needed
        console.log("Fetched transactions:", transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    fetchTransactions();
  }, [potItem.id]);

  function handleDrawClose() {
    setTogglePotSummary(false);
  }

  function handleAddWithdrawMenuOpen(e: React.MouseEvent<HTMLButtonElement>) {
    const name = (e.target as HTMLButtonElement).id;
    setAddWithdrawMenuAction({ withdrawOrAdd: name });
    setOpenAddWithdrawMenu(true);
  }

  return (
    <Drawer open={togglePotSummary} anchor="top" sx={{ "& .MuiDrawer-paper": { background: "#161618" } }}>
      <div className="h-screen mobile-container flex flex-col items-center text-white py-4">
        <Header />
        <CurrentBalance potItem={potItem} />
        <AddWithdrawButtons potItem={potItem} handleAddWithdrawMenuOpen={handleAddWithdrawMenuOpen} />
        <div className="w-full">
          <Activities reFetchTransactions={reFetchTransactions} setReFetchTransactions={setReFetchTransactions} />
          {potItem.target_amount > 0 &&  <Goals />}
        </div>
        <button
          onClick={handleDrawClose}
          className="mt-4 bg-primary text-secondary py-4 px-6 rounded-md w-full"
        >
          Close
        </button>
        <AddWithdrawMenu
          openAddWithdrawMenu={openAddWithdrawMenu}
          setOpenAddWithdrawMenu={setOpenAddWithdrawMenu}
          addWithdrawMenuAction={addWithdrawMenuAction}
          setReFetchTransactions={setReFetchTransactions}
        />
      </div>
    </Drawer>
  );
}

function CurrentBalance({ potItem }: { potItem: PotType }) {
  return <div className="current_amount w-fit text-2xl mt-6">£{potItem?.current_amount?.toLocaleString() || 0}</div>;
}
