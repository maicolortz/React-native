

export const BasicFunctions = () => {

    const addTwoNumbers = (a: number, b: string) => {
        return a + b;
    }
    return (
        <>
        <div>Functions</div>
        <span>El resultado de sumar: { addTwoNumbers(2,'8')}
        </span>
        </>
    )
}
