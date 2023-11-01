import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Hoe denkt de VVD over migratie?",
        value: "Hoe denkt de VVD over migratie?"
    },
    { text: "Wat zeg d66 over de zorg?", value: "Wat zeg d66 over de zorg?" },
    { text: "Welke maatregelen rond klimaat nemen de verschillende partijen?", value: "Welke maatregelen rond klimaat nemen de verschillende partijen?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
