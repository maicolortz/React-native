
interface Person{
    fullName:string;
    age:number;

}
export const ObjectLiteral = () => {

    const person={
        fullName:'Fernando Herrera',
        age:37,
        address:'Canada',
        houseNo:615

    }
  return (
    <>
    <h3>Objetos literales</h3>
    <pre>
        {JSON.stringify(person, null,2)}
    </pre>
    </>
  )
}
