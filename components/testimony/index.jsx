import { testimonies } from "../../constants"
import Card from "./card"


function Testimony() {
    return (
        <div className="flex gap-6">
            {testimonies.map((item, i) =>
                <Card key={i} name={item.name} status={item.status} statement={item.statement} image={item.img} position={item.position} />
            )}
        </div>
    )
}

export default Testimony