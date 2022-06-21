import React, {useState} from 'react';

export enum CardVariant {
    outlined='outlined',
    primary='primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> =
    ({
         width,
         height,
         variant,
         children
    }) => {
    const [state, setState] = useState(0)
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid teal':'none',
            background: variant === CardVariant.primary ? 'lightgrey': 'transparent'
        }}
        >
            {children}
        </div>
    );
};

export default Card;