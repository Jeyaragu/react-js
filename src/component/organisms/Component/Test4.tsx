import { useState } from "react";


// input field
const Child = ({onChange}: any) => {
    const [name, setName] = useState('')

    return (
        <div>
            <input name='name' value={name} onChange={onChange}></input>
        </div>
    )
}
export default Child;