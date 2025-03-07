import { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Title = styled.h3`
    font-size: calc(2px + 2vw);
    color: #2c3e50;
    margin-bottom: 20px;
`;

const InputGroup = styled.div`
    margin-bottom: 10px;
    text-align: left;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: calc(1.2px + 1.2vw);
    color: #2c3e50;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: calc(1.5px + 1.5vw);
    color: #2c3e50;
    background-color: #f5f6fa;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Button = styled.button`
    width: 45%;
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: #ffffff;
    font-size: calc(1.5px + 1.5vw);
`;

const Output = styled.p<{ isNegative: boolean }>`
    margin-top: 20px;
    margin-bottom: 0;
    font-size: calc(2px + 2vw);
    color: ${props => props.isNegative ? '#e74c3c' : '#2c3e50'};
    padding: 10px;
    border-radius: 5px;
`;

export default function Calculator() {
    const [input1, setInput1] = useState<string>('');
    const [input2, setInput2] = useState<string>('');
    const [output, setOutput] = useState<string>('');

    const handleOperation = (operation: string) => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);

        if (isNaN(num1) || isNaN(num2)) {
            setOutput('Error: Invalid input');
            return;
        }

        let result: number | string;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 === 0 ? 'Error: Division by zero' : num1 / num2;
                break;
            case 'power':
                result = num1 ** num2;
                break;
            default:
                result = '';
        }

        setOutput(result.toString());
    };

    const clearInputs = () => {
        setInput1('');
        setInput2('');
        setOutput('');
    };

    const isNegative = parseFloat(output) < 0;

    return (
        <CalculatorContainer>
            <Title>Projects</Title>
            
            <InputGroup>
                <Label htmlFor="input1">First Number:</Label>
                <Input
                    id="input1"
                    type="text"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                />
            </InputGroup>
            
            <InputGroup>
                <Label htmlFor="input2">Second Number:</Label>
                <Input
                    id="input2"
                    type="text"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />
            </InputGroup>
            
            <ButtonsContainer>
                <Button onClick={() => handleOperation('add')}>+</Button>
                <Button onClick={() => handleOperation('subtract')}>-</Button>
                <Button onClick={() => handleOperation('multiply')}>*</Button>
                <Button onClick={() => handleOperation('divide')}>/</Button>
                <Button onClick={() => handleOperation('power')}>**</Button>
                <Button onClick={clearInputs}>Clear</Button>
            </ButtonsContainer>
            
            <Output isNegative={isNegative}>{output}</Output>
        </CalculatorContainer>
    );
}