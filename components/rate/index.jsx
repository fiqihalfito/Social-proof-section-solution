import { rates } from "../../constants"
import RateItem from "./rate-item"

function Rate() {
    return (
        <div className="space-y-4 self-center">
            {rates.map((rate, i) =>
                <RateItem key={i} text={rate.text} margin={rate.margin} />
            )}
        </div>
    )
}

export default Rate