'use client';

import { useState } from 'react';
import Button from '../components/Button';
import CardAnswer from '../components/Cards/CardAnswer';
import CardQuestion from '../components/Cards/CardQuestion';

interface TemplateProps {
    question: string;
    answers: string[];
}

export default function QuizzTemplate(TemplateProps: TemplateProps) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const { question, answers } = TemplateProps

    const handleCardChange = (id: string) => {
        setSelectedCard(id === selectedCard ? null : id);
    };

    const handleValidate = () => {
        if (selectedCard !== null) {
            console.log(`Card ${selectedCard} a été sélectionnée.`);
        } else {
            console.log('Aucune carte sélectionnée.');
        }
    };

    return (
        <div className="flex flex-center items-center justify-center flex-col h-[100vh] w-[100vw] ">
            <div className="pb-[30vh]">
                <CardQuestion text={question} />
            </div>
            <div className="flex items-center justify-center">
                <div className="pl-[20px]">
                    <CardAnswer text={answers[0]} checked={selectedCard === "1"} onChange={() => handleCardChange("1")} />
                </div>
                <div className="pl-[20px]">
                    <CardAnswer text={answers[1]} checked={selectedCard === "2"} onChange={() => handleCardChange("2")} />
                </div>
                <div className="pl-[20px]">
                    <CardAnswer text={answers[2]} checked={selectedCard === "3"} onChange={() => handleCardChange("3")} />
                </div>
                <div className="pl-[20px]">
                    <CardAnswer text={answers[3]} checked={selectedCard === "4"} onChange={() => handleCardChange("4")} />
                </div>
            </div>
            <div className="mt-[10vh]">
                <Button children={'Valider'} onClick={handleValidate} />
            </div>
        </div>
    );
}