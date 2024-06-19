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
			<Left w={55}>
				<p>On the Tailgate cell power distribution panel (PDP), open the main electrical disconnect switch (E-3) following the proper lockout /tagout procedures, including arc flash safety and apply personal lock. If more than one person is to perform work on the machine, each employee is to place a personal lock on the energy source using a multiple lockout device (scissor lock). The main electrical disconnect will shut off the main power to the zone. Verify power is removed by indication on the HMI screen and attempting to start the machine.</p>
			</Left>

			<Right>
				{plant === 'GMFW' && (
					<Figure
						src={GMFW}
						w={25}
						caption="Figure 1: Tailgate Cell Disconnect"
					/>
				)}
			</Right>
		</Row>
	);
};

export default styled(PDPMainDisconnect)`
	//style
`;
