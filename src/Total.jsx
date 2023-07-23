function Total ({parts}) {
  let sum = 0;
  for(let i = 0; i < parts.length; i++) {
   let  currentValue = parts[i]
   sum += currentValue.exercises
  }
    return(
        <>
<p> Number of exercises {sum}</p>
        </>
    )
}
export default Total;