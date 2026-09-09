// import { useState, useRef } from 'react';
// const Test = () => {
//     const [text, setText] = useState('');
//     const textRef = useRef({})
//     const handlleOnClick = (e) => {
//         const str = e.target.value;
//         setText(str)
//         const splitStr = str.split(' ');
//         const lastElement = splitStr.at(-1);
//         if (textRef.current[lastElement]) {
//             textRef.current[lastElement] = textRef.current[lastElement] + 1
//         } else {
//             textRef.current[lastElement] = 1
//         }

//         return (
//             <div>
//                 <input style={{ background: 'yellow' }} placeholder="Enter text" name='text' value={text} onChange={handlleOnClick}>
//                 </input>
//                 <p>{text.length}</p>
//             </div>
//         )
//     }

// const useCounter = ({ initialValue }) => {
//     const [count, setCount] = useState(initialValue);
//     return {
//         count,
//         setCount
//     }
// }


// export default useCounter;