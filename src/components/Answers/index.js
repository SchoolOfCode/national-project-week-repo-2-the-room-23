



function Answers({answer, octA, octB, octC}){


return(
      <form>

        <input type="radio" id="age1" name="age" value="30"/>
        <label for="age1">0 - 30</label>

        <input type="radio" id="age2" name="age" value="60"/>
        <label for="age2">31 - 60</label>
         
        <input type="radio" id="age3" name="age" value="100"/>
        <label for="age3">61 - 100</label>
        <input type="submit" value="Submit"/>

      </form>
    )
}
export default Answers;