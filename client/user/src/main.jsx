import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import UserProvider from './contexts/user/UserProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<UserProvider>
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	</UserProvider>
);
