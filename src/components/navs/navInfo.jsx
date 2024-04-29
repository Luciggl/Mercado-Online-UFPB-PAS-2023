import Info from "../itens/info"
import { TruckIcon, LucideHeadphones, ShieldCheck, Package } from "lucide-react"
const NavInfo = () => {
    return (
        <div className="container-info">
            <Info icone={<TruckIcon color="#21a623"/>} titulo={'Free Shipping'}/>
            <Info icone={<LucideHeadphones color="#21a623"/>} titulo={'Customer Support 24/7'}/>
            <Info icone={<ShieldCheck color="#21a623"/>} titulo={'100% secure Payment'}/>
            <Info icone={<Package color="#21a623"/>} titulo={'Money-back Guarantee'}/>

        </div>
    )

}

export default NavInfo