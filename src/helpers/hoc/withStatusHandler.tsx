import { Loading } from '../../components';


interface WithStatusHandlerComponentProps {
    children?: React.ReactNode;
    error: Error | null;
    status: string;
}


const withStatusHandler = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    function WithStatusHandlerComponent({
        error,
        status,
        ...props
    }: WithStatusHandlerComponentProps): JSX.Element {
        if (status === 'rejected') {
            return <div>{error?.message}</div>;
        }

        if (status === 'idle' || status === 'pending') {
            return <Loading />;
        }

        return <WrappedComponent {...(props as P)} />;
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

    WithStatusHandlerComponent.displayName = `withStatusHandler(${wrappedComponentName})`;

    return WithStatusHandlerComponent;
}


export default withStatusHandler;