import React from 'react';

export const FrameworkDetails: React.FC<FrameworkDetailsProps> = (props: FrameworkDetailsProps) => {

    const [state, update] = React.useState<FrameworkDetailsState>({ loaded: false });

    /*
      Retrieve JS Framework information using `fetch`.
      We pass [prop.details] as a dependency of this hook so that we don't 
      fetch data unnecessarily.
    */
    React.useEffect(() => {
        update({ loaded: false, description: null });

        fetch(props.details)
            .then(response => response.json())
            .then(json => update({ loaded: true, ...json }));

    }, [props.details]);

    return <div style={{ padding: '1rem', margin: '1rem', flex: 1 }}>

        {state.loaded ? <p>
            {state.description}
        </p> : <p>
                Loading information...
            </p>
        }

    </div>;
}


export interface FrameworkDetailsProps {
    details: string;
}

export interface FrameworkDetailsState {
    loaded: boolean;
    description?: string | null;
}
