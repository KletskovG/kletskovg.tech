import React from 'react';

export const ProvideBackground = (WrappedComponent: React.FunctionComponent, color: string): React.FunctionComponent<any> => {
    return ({props}: any) => (
        <div style={{background: color}}>
            <WrappedComponent {...props} />
        </div>
    )
}
