import { usePot } from "@/lib/context/PotContext";
import { deletePot, editPot } from "@/lib/mutations";
import { currencyFormat } from "@/lib/utils";
import { Close, Delete, Edit } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";

// interface EditFormData{
//     name: string,
//     amount: number
// }

function Header() {

    const potItem = usePot()

    const [deleteOrEdit, setDeleteOrEdit] = useState<string>('')
    const [openEditOrDeleteModel, setOpenEditOrDeleteModel] = useState<boolean>(false)
    const [editFormData, setEditFormData] = useState({
        name: potItem?.name || '',
        amount: potItem?.target_amount || ''
    })

    const [validation, setValidation] = useState({
        message: ''
    })

    useEffect(() => {
        setEditFormData({
            name: potItem?.name,
            amount: potItem?.target_amount
            // amount: potItem?.target_amount
        })
    }, [potItem.id])
    
    function handleDeleteOrEditModel(e){
        
        setDeleteOrEdit(e.target.id)
        setOpenEditOrDeleteModel(true)
    }

    async function handleSubmit(e, formData, id: number){
        e.preventDefault()
        if(formData.name === '' || formData.amount === ''){
            setValidation({
                message: 'All fields are required'
            })
            return
        }
        await editPot(formData, id)
        setOpenEditOrDeleteModel(false)
    }

    function handleEditFormData(e){
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.name === 'amount' ? currencyFormat(e.target.value) : e.target.value
            // [e.target.name]: e.target.value
        })
    }

    return ( <div className="relative w-full text-center" id="pot-item-header">
        <h1>{potItem?.name}</h1>
        <div className="absolute right-0 top-0">
            <button id="delete" className="block mb-4" onClick={handleDeleteOrEditModel}>
                <div className="pointer-events-none">
                    <Delete />
                </div>
            </button>
            <button id="edit" onClick={handleDeleteOrEditModel}>
                <div className="pointer-events-none">
                    <Edit />
                </div>
            </button>
        </div>

        <Drawer open={openEditOrDeleteModel} anchor="top" sx={{'& .MuiDrawer-paper': {background: '#161618', borderRadius: '0 0 21px 21px'}}}>
            <div className="min-h-[30vh] mobile-container flex items-center justify-center gap-6 text-secondary relative">
                <button onClick={() => setOpenEditOrDeleteModel(false)} className="absolute top-4 right-0">
                    <div className="pointer-events-none">
                        <Close/>
                    </div>
                </button>
                {deleteOrEdit === 'delete' && (
                    <>
                        <button onClick={async () => {await deletePot(potItem.id)}} className="bg-red-500 p-4 rounded-md">Delete Pot</button>
                    </>
                )}
                {deleteOrEdit === 'edit' && (
                    <div className="py-6">
                        <form className="text-center" onSubmit={async (e) => {
                            await handleSubmit(e, editFormData, potItem.id)
                        }}> 
                            <div>
                                <label htmlFor="name">Edit name</label>
                                <input onChange={handleEditFormData} value={editFormData.name} name="name" type="text" placeholder="Pot Name" className="text-secondary p-4 border-white border-2 flex items-center gap-2 mt-4 rounded-md bg-transparent"/>
                            </div>
                            <div className="mt-4">   
                                <label htmlFor="target_amount">Edit Amount</label>
                                <input onChange={handleEditFormData} value={editFormData.amount} name="amount" type="number" placeholder="Amount" className="text-secondary p-4 border-white border-2 flex items-center gap-2 mt-4 rounded-md bg-transparent"/>
                                {validation.amount && <p className="text-red-500">{validation.amount}</p>}
                            </div>
                            {validation.message && <p className="text-red-500">{validation.message}</p>}
                            <button type="submit" className="bg-primary text-secondary p-4 rounded-md mt-6">Save</button>
                        </form>
                    </div>
                )}
            </div>
        </Drawer>
    </div> );
}

export default Header;