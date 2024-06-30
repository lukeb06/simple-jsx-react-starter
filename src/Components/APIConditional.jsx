import React, { useMemo } from 'react';

export const APIData = ({ APIState, children }) => {
	const { data } = useMemo(() => APIState, [APIState]);
	return data && data != undefined && data != null && data != {} ? (
		<>{children}</>
	) : (
		<></>
	);
};

export const APIError = ({ APIState, children }) => {
	const { error } = useMemo(() => APIState, [APIState]);
	return error ? <>{children}</> : <></>;
};

export const APILoading = ({ APIState, children }) => {
	const { isLoading } = useMemo(() => APIState, [APIState]);
	return isLoading ? <>{children}</> : <></>;
};
