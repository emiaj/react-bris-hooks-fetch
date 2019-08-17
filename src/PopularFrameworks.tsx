import React from 'react';
import { FrameworkDetails } from './FrameworkDetails';

export const PopularFrameworks: React.FC = () => {

    const [state, update] = React.useState<FrameworkSummary | null>(null);

    const frameworks: FrameworkSummary[] = [
        { "name": "React", details: "http://www.mocky.io/v2/5d36894a56000067003a5323?mocky-delay=3s" },
        { "name": "Angular", details: "http://www.mocky.io/v2/5d368a3256000054003a5327?mocky-delay=2s" },
        { "name": "Vue", details: "http://www.mocky.io/v2/5d36899b5600007d5d3a5324?mocky-delay=1s" }
    ];

    return <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, display: 'flex' }}>
            <ul style={{ listStyle: 'none', flex: 1 }}>
                {
                    frameworks.map(framework => {
                        return <li key={framework.name}
                            style={state && state.name === framework.name ? 
                                                            selectedFrameworkStyle : 
                                                            frameworkStyle}
                            onClick={() => update(framework)}>
                            {framework.name}
                        </li>
                    })
                }
            </ul>
        </div>
        <div style={{ flex: 1, display: 'flex' }}>
            {
                state && <FrameworkDetails {...state} />
            }
        </div>
    </div>;
}

interface FrameworkSummary {
    name: string;
    details: string;
}

const frameworkStyle: React.CSSProperties = {
    cursor: 'pointer',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    margin: '1rem',
    padding: '1rem'
}

const selectedFrameworkStyle: React.CSSProperties = {
    ...frameworkStyle,
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bolder'
}
