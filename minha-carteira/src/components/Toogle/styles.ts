import  styled  from 'styled-components';
import Switch, {ReactSwitchProps} from 'react-switch';

export const Container = styled.div``;

export const ToogleLabel = styled.span``;

export const ToogleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme}) =>({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    }))<ReactSwitchProps>``;
