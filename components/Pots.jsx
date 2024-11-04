
import Category from "./Category"
import TotalSaved from "./TotalSaved"
import Item from "./Item"

export default function Pots() {
    return(
        <Category categoryName='Pots'>
            <div className="grid grid-cols-2 gap-4 ">
                <TotalSaved />
                <div className="grid grid-cols-2 gap-2">
                    <Item potName='Holiday' amount='200' />
                    <Item potName='Emergency' amount='1000' />
                    <Item potName='Housing' amount='800' />
                </div>
            </div>
        </Category>
    )
}



