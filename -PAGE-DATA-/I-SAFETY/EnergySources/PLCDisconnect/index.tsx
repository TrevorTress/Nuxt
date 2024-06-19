import useController from '@/-GLOBAL-SHELL-/GlobalController';
import styled from 'styled-components';
import Figure from '@/-UTILITIES-/Figure';
import GMFW from './figures/FW.png';

import { Row } from 'react-bootstrap';
import Left from '@/-UTILITIES-/Left';
import Right from '@/-UTILITIES-/Right';

const PDPMainDisconnect: React.FC<X> = () => {
	const { plant } = useController();
	return (
		<Row>
			<Left w={45}>
				<p>Hot electrical power circuits are wired above the main electrical disconnect and is not de-energized by the main disconnect. The E-2 hot power disconnect is located inside the PDP. The E-2 circuit breaker controls the power to 120VAC power supply circuit powering the operation lighting and PLC. The circuit breaker has provisions for placing the attached padlock to Lockout and prevents the switching ON the circuit breaker. The padlock key is kept locked in the master key lock box during maintenance and repairs.</p>
				<p>Refer to the Safety Lockout tags and placards for specific Lockout requirements.</p>
			</Left>

			<Right>
				{plant === 'GMFW' && (
					<Figure
						src={GMFW}
						w={36}
						caption="Figure 1: Typical Lockout Tag"
					/>
				)}
			</Right>
		</Row>
	);
};

export default styled(PDPMainDisconnect)`
	//style
`;