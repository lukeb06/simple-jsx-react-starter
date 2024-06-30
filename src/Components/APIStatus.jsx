import useAPI from '@/hooks/use-api.js';
import LoadSpinner from '@/Components/LoadSpinner.jsx';
import { APIData, APIError, APILoading } from '@/Components/APIConditional.jsx';

const APIStatus = () => {
	const statusResponse = useAPI('status');

	return (
		<>
			<APIData APIState={statusResponse}>API Active</APIData>

			<APIError APIState={statusResponse}>
				Something went wrong...
			</APIError>

			<APILoading APIState={statusResponse}>
				<LoadSpinner />
			</APILoading>
		</>
	);
};

export default APIStatus;
